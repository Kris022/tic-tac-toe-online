export default function Square({
  value,
  onSquareClick,
}: {
  value: string | null;
  onSquareClick: () => void;
}) {
  return <button onClick={onSquareClick} className="square">{value}</button>;
}
