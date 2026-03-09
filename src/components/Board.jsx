import Square from './Square';

function Board({ squares, onPlay, winningSquares }) {
  function handleClick(i) {
    onPlay(i);
  }

  return (
    <div className="board">
      {squares.map((value, i) => (
        <Square
          key={i}
          value={value}
          onClick={() => handleClick(i)}
          isWinning={winningSquares.includes(i)}
        />
      ))}
    </div>
  );
}

export default Board;
