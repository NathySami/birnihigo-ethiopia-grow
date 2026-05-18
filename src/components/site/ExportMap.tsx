import { motion } from "framer-motion";

// Stylized Horn of Africa export-corridor SVG.
// Not geographically precise — built as an editorial diagram.
const nodes = [
  { id: "addis", x: 320, y: 280, label: "Addis Ababa", role: "HQ" },
  { id: "awash", x: 380, y: 240, label: "Awash · Afar", role: "Operations" },
  { id: "djibouti", x: 470, y: 215, label: "Djibouti", role: "Sea Corridor" },
  { id: "berbera", x: 540, y: 270, label: "Berbera", role: "Export Port" },
  { id: "nairobi", x: 360, y: 410, label: "Nairobi", role: "Regional Hub" },
  { id: "khartoum", x: 240, y: 170, label: "Khartoum", role: "Northern Corridor" },
];

const corridors: [string, string][] = [
  ["addis", "awash"],
  ["awash", "djibouti"],
  ["awash", "berbera"],
  ["addis", "nairobi"],
  ["addis", "khartoum"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export const ExportMap = () => {
  return (
    <svg viewBox="0 0 700 520" className="w-full h-auto" role="img" aria-label="Regional export corridors stylised map">
      <defs>
        <linearGradient id="land" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(38 48% 32% / 0.12)" />
          <stop offset="100%" stopColor="hsl(38 48% 32% / 0.04)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* stylized landmass */}
      <path
        d="M120 200 C180 120, 280 110, 360 130 C 440 145, 520 150, 580 200 C 620 240, 600 320, 540 360 C 480 410, 400 440, 320 450 C 240 460, 170 420, 140 360 C 110 300, 90 250, 120 200 Z"
        fill="url(#land)"
        stroke="hsl(38 48% 32% / 0.25)"
        strokeWidth="1"
      />

      {/* corridors */}
      {corridors.map(([a, b], i) => {
        const A = byId[a]; const B = byId[b];
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={A.x} y1={A.y} x2={B.x} y2={B.y}
            stroke="hsl(35 99% 58%)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
        );
      })}

      {/* nodes */}
      {nodes.map((n, i) => (
        <motion.g
          key={n.id}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
        >
          <circle cx={n.x} cy={n.y} r="10" fill="hsl(35 99% 58% / 0.25)" filter="url(#glow)" />
          <circle cx={n.x} cy={n.y} r="4.5" fill="hsl(35 99% 58%)" />
          <text x={n.x + 12} y={n.y - 8} fontSize="12" fontWeight="700" fill="hsl(38 48% 18%)" fontFamily="Parkinsans">
            {n.label}
          </text>
          <text x={n.x + 12} y={n.y + 6} fontSize="9.5" fill="hsl(38 48% 32% / 0.7)" letterSpacing="0.12em" fontFamily="Inter">
            {n.role.toUpperCase()}
          </text>
        </motion.g>
      ))}
    </svg>
  );
};