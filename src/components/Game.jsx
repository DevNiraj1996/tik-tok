import { useState } from 'react';
import Board from './Board';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const currentSquares = history[currentMove];
  const isXNext = currentMove % 2 === 0;
  const result = calculateWinner(currentSquares);
  const winner = result?.winner;
  const winningLine = result?.line ?? [];
  const isDraw = !winner && currentSquares.every(Boolean);

  function handlePlay(i) {
    if (currentSquares[i] || winner) return;

    const nextSquares = currentSquares.slice();
    nextSquares[i] = isXNext ? 'X' : 'O';

    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    const newResult = calculateWinner(nextSquares);
    if (newResult) {
      setScores((prev) => ({
        ...prev,
        [newResult.winner]: prev[newResult.winner] + 1,
      }));
    }
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function resetScores() {
    setScores({ X: 0, O: 0 });
    resetGame();
  }

  let statusText;
  if (winner) {
    statusText = `🎉 Player ${winner} wins!`;
  } else if (isDraw) {
    statusText = "It's a draw!";
  } else {
    statusText = `Player ${isXNext ? 'X' : 'O'}'s turn`;
  }

  const moves = history.map((_, move) => {
    const label = move === 0 ? 'Go to start' : `Move #${move}`;
    return (
      <li key={move}>
        <button
          className={`history-btn${move === currentMove ? ' history-btn--active' : ''}`}
          onClick={() => jumpTo(move)}
        >
          {label}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <header className="game-header">
        <h1 className="game-title">Tic‑Tac‑Toe</h1>
        <p className="game-subtitle">Classic strategy game for two players</p>
      </header>

      <div className="game-layout">
        <div className="game-board-section">
          <div className={`status-badge${winner ? ' status-badge--win' : isDraw ? ' status-badge--draw' : ''}`}>
            {statusText}
          </div>

          <Board
            squares={currentSquares}
            onPlay={handlePlay}
            winningSquares={winningLine}
          />

          <div className="game-actions">
            <button className="btn btn--primary" onClick={resetGame}>
              New Game
            </button>
            <button className="btn btn--secondary" onClick={resetScores}>
              Reset Scores
            </button>
          </div>
        </div>

        <div className="game-sidebar">
          <div className="scoreboard">
            <h2 className="scoreboard-title">Scoreboard</h2>
            <div className="score-row">
              <span className="score-label score-label--x">Player X</span>
              <span className="score-value">{scores.X}</span>
            </div>
            <div className="score-row">
              <span className="score-label score-label--o">Player O</span>
              <span className="score-value">{scores.O}</span>
            </div>
          </div>

          <div className="history">
            <h2 className="history-title">Move History</h2>
            <ol className="history-list">{moves}</ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
