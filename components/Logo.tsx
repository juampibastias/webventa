// Logo JPBT — wordmark minimal "jpbt." con el punto en cian.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-extrabold leading-none ${className}`}
      style={{ letterSpacing: "-0.045em" }}
    >
      <span className="text-2xl text-white">jpbt</span>
      <span className="text-2xl text-cyber-400">.</span>
    </span>
  );
}
