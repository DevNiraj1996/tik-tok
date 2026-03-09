function Square({ value, onClick, isWinning }) {
  return (
    <button
      className={`square${isWinning ? ' square--winning' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
