export default function Scallop({
  topColor,
  bottomColor,
}: {
  topColor: string;
  bottomColor: string;
}) {
  return (
    <div
      aria-hidden
      className="h-6 w-full"
      style={{
        backgroundColor: bottomColor,
        backgroundImage: `radial-gradient(circle at 14px 0, ${topColor} 14px, transparent 15px)`,
        backgroundSize: "28px 28px",
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}
