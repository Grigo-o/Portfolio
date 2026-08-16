import { useEffect, useState } from "react";

const NODES = [
  { id: "n0", x: 110, y: 210, r: 7, kind: "lead" },
  { id: "n1", x: 300, y: 95, r: 4.5 },
  { id: "n2", x: 430, y: 330, r: 5 },
  { id: "n3", x: 640, y: 150, r: 4.5 },
  { id: "n4", x: 780, y: 400, r: 5 },
  { id: "n5", x: 900, y: 230, r: 4.5 },
  { id: "n6", x: 550, y: 540, r: 4.5 },
  { id: "n7", x: 220, y: 500, r: 4.5 },
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

const EDGES = [
  ["n0", "n1"],
  ["n1", "n3"],
  ["n3", "n5"],
  ["n5", "n4"],
  ["n4", "n2"],
  ["n2", "n1"],
  ["n2", "n6"],
  ["n6", "n7"],
  ["n7", "n0"],
];

const PULSES = [
  { path: "n0 n1 n3 n5", dur: "6.5s", delay: "0s", color: "var(--accent)" },
  {
    path: "n7 n2 n4",
    dur: "5.2s",
    delay: "1.4s",
    color: "var(--accent-violet)",
  },
  { path: "n0 n7 n6 n2 n1", dur: "8s", delay: "0.6s", color: "var(--accent)" },
  {
    path: "n5 n4 n2 n6",
    dur: "7s",
    delay: "3s",
    color: "var(--accent-violet)",
  },
];

function pathFromIds(ids) {
  const pts = ids.split(" ").map((id) => byId[id]);
  return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
}

export default function NetworkField({ className = "" }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return (
    <svg
      className={`network-field ${className}`}
      viewBox="0 0 1000 620"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="nf-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {EDGES.map(([a, b], i) => {
        const na = byId[a];
        const nb = byId[b];
        return (
          <line
            key={i}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke="var(--border-cold)"
            strokeWidth="1"
          />
        );
      })}

      {NODES.map((n) => (
        <circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={n.kind === "lead" ? "var(--accent)" : "var(--bg-panel-raised)"}
          stroke={n.kind === "lead" ? "var(--accent)" : "var(--border-cold)"}
          strokeWidth="1.4"
          filter={n.kind === "lead" ? "url(#nf-glow)" : undefined}
        />
      ))}

      {!reduced &&
        PULSES.map((p, i) => (
          <circle key={i} r="3.2" fill={p.color} filter="url(#nf-glow)">
            <animateMotion
              dur={p.dur}
              begin={p.delay}
              repeatCount="indefinite"
              path={pathFromIds(p.path)}
            />
          </circle>
        ))}
    </svg>
  );
}
