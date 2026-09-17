const NODES = [0, 1, 2, 3, 4];

export default function PipelineMotif() {
  return (
    <div
      aria-hidden
      className="relative mt-2 h-6 w-full max-w-[260px] select-none"
    >
      <div className="absolute left-0 right-[20%] top-1/2 h-px -translate-y-1/2 bg-zinc-300 dark:bg-zinc-700" />
      <div
        className="pipeline-marker absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-orange-600 dark:bg-orange-400"
        style={{ left: "80%" }}
      />
      {NODES.map((i) => (
        <span
          key={i}
          className="pipeline-node absolute h-1.5 w-1.5 rounded-[2px] bg-orange-600 dark:bg-orange-400"
          style={
            {
              top: "50%",
              marginTop: "-3px",
              left: 0,
              "--i": i,
              "--travel": "190px",
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
