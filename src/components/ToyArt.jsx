const INK = '#2A1E3D'

function Bear() {
  return (
    <g>
      <circle cx="56" cy="36" r="13" fill="#B5763E" />
      <circle cx="104" cy="36" r="13" fill="#B5763E" />
      <circle cx="56" cy="36" r="6" fill="#F2C38F" />
      <circle cx="104" cy="36" r="6" fill="#F2C38F" />
      <circle cx="80" cy="62" r="32" fill="#B5763E" />
      <ellipse cx="80" cy="74" rx="15" ry="11" fill="#F2C38F" />
      <ellipse cx="80" cy="68" rx="5" ry="4" fill={INK} />
      <circle cx="68" cy="56" r="3.5" fill={INK} stroke="none" />
      <circle cx="92" cy="56" r="3.5" fill={INK} stroke="none" />
      <path d="M74 78 q6 5 12 0" fill="none" />
      <circle cx="60" cy="70" r="4" fill="#FF8FB1" stroke="none" opacity=".8" />
      <circle cx="100" cy="70" r="4" fill="#FF8FB1" stroke="none" opacity=".8" />
      <path d="M80 100 l-16 -9 v18 z M80 100 l16 -9 v18 z" fill="#FF4D4D" />
      <circle cx="80" cy="100" r="4" fill="#FF4D4D" />
    </g>
  )
}

function Bunny() {
  return (
    <g>
      <ellipse cx="66" cy="32" rx="9" ry="24" fill="#fff" />
      <ellipse cx="94" cy="32" rx="9" ry="24" fill="#fff" />
      <ellipse cx="66" cy="34" rx="4" ry="16" fill="#FF9CC8" stroke="none" />
      <ellipse cx="94" cy="34" rx="4" ry="16" fill="#FF9CC8" stroke="none" />
      <circle cx="80" cy="74" r="30" fill="#fff" />
      <circle cx="69" cy="68" r="3.5" fill={INK} stroke="none" />
      <circle cx="91" cy="68" r="3.5" fill={INK} stroke="none" />
      <path d="M76 77 h8 l-4 4 z" fill="#FF6FB5" />
      <path d="M80 81 v4 M80 85 q-5 4 -9 1 M80 85 q5 4 9 1" fill="none" />
      <circle cx="62" cy="80" r="5" fill="#FF9CC8" stroke="none" opacity=".8" />
      <circle cx="98" cy="80" r="5" fill="#FF9CC8" stroke="none" opacity=".8" />
    </g>
  )
}

function Dino() {
  return (
    <g>
      <path d="M44 66 l8 -14 l8 12 l8 -16 l8 14 l8 -14 l6 14" fill="#FF8A3D" />
      <path d="M30 88 Q20 70 40 72" fill="#4CC26B" />
      <ellipse cx="72" cy="80" rx="38" ry="22" fill="#4CC26B" />
      <path d="M96 70 Q104 50 112 40" fill="none" stroke="#4CC26B" strokeWidth="16" strokeLinecap="round" />
      <path d="M96 70 Q104 50 112 40" fill="none" />
      <circle cx="116" cy="38" r="16" fill="#4CC26B" />
      <circle cx="120" cy="34" r="3.5" fill={INK} stroke="none" />
      <path d="M118 46 q6 3 11 -2" fill="none" />
      <rect x="50" y="94" width="12" height="16" rx="5" fill="#4CC26B" />
      <rect x="80" y="94" width="12" height="16" rx="5" fill="#4CC26B" />
      <circle cx="66" cy="78" r="5" fill="#A5EB7D" stroke="none" />
      <circle cx="82" cy="86" r="4" fill="#A5EB7D" stroke="none" />
    </g>
  )
}

function Rocket() {
  return (
    <g>
      <path d="M72 92 q8 26 16 0 z" fill="#FFD23F" />
      <path d="M75 92 q5 14 10 0 z" fill="#FF8A3D" stroke="none" />
      <path d="M62 70 l-14 22 h18 z" fill="#FF4D4D" />
      <path d="M98 70 l14 22 h-18 z" fill="#FF4D4D" />
      <path d="M80 10 C100 30 102 66 98 92 L62 92 C58 66 60 30 80 10 Z" fill="#F7F5FF" />
      <path d="M80 10 C88 18 93 26 96 34 L64 34 C67 26 72 18 80 10 Z" fill="#FF4D4D" />
      <circle cx="80" cy="56" r="11" fill="#6FD3FF" />
      <circle cx="76" cy="52" r="3" fill="#fff" stroke="none" />
    </g>
  )
}

function Car() {
  return (
    <g>
      <path d="M52 60 l12 -20 h34 l14 20 z" fill="#FF4D4D" />
      <path d="M62 58 l8 -13 h12 v13 z M88 58 v-13 h8 l9 13 z" fill="#BEE8FF" />
      <rect x="26" y="58" width="110" height="28" rx="12" fill="#FF4D4D" />
      <circle cx="80" cy="72" r="9" fill="#fff" />
      <text x="80" y="76.5" textAnchor="middle" fontSize="12" fontWeight="800" fill={INK} stroke="none" fontFamily="sans-serif">7</text>
      <rect x="128" y="64" width="8" height="8" rx="2" fill="#FFD23F" />
      <circle cx="52" cy="88" r="13" fill={INK} />
      <circle cx="110" cy="88" r="13" fill={INK} />
      <circle cx="52" cy="88" r="5" fill="#ccc" stroke="none" />
      <circle cx="110" cy="88" r="5" fill="#ccc" stroke="none" />
    </g>
  )
}

function Train() {
  return (
    <g>
      <rect x="40" y="24" width="12" height="18" rx="2" fill={INK} />
      <circle cx="36" cy="16" r="6" fill="#fff" />
      <circle cx="24" cy="10" r="4" fill="#fff" />
      <rect x="26" y="42" width="56" height="40" rx="6" fill="#3D7BFF" />
      <rect x="58" y="28" width="26" height="54" rx="5" fill="#3D7BFF" />
      <rect x="63" y="34" width="16" height="14" rx="3" fill="#FFE27A" />
      <rect x="90" y="52" width="46" height="30" rx="5" fill="#FF4D4D" />
      <path d="M82 70 h8" />
      <circle cx="40" cy="88" r="10" fill={INK} />
      <circle cx="68" cy="88" r="10" fill={INK} />
      <circle cx="102" cy="88" r="8" fill={INK} />
      <circle cx="124" cy="88" r="8" fill={INK} />
      <circle cx="104" cy="66" r="4" fill="#FFD23F" />
      <circle cx="122" cy="66" r="4" fill="#4CC26B" />
    </g>
  )
}

function Stacker() {
  const rings = ['#FF4D4D', '#FF8A3D', '#FFD23F', '#4CC26B', '#3D7BFF']
  return (
    <g>
      <rect x="40" y="96" width="80" height="12" rx="6" fill="#B5763E" />
      <rect x="76" y="18" width="8" height="80" rx="4" fill="#B5763E" />
      {rings.map((c, i) => (
        <ellipse key={c} cx="80" cy={88 - i * 15} rx={36 - i * 6} ry="9" fill={c} />
      ))}
      <circle cx="80" cy="16" r="8" fill="#FF6FB5" />
    </g>
  )
}

function Blocks() {
  const b = [
    { x: 28, y: 64, c: '#FF4D4D', l: 'A' },
    { x: 84, y: 64, c: '#3D7BFF', l: 'B' },
    { x: 56, y: 18, c: '#FFD23F', l: 'C' },
  ]
  return (
    <g>
      {b.map((k) => (
        <g key={k.l}>
          <rect x={k.x} y={k.y} width="46" height="46" rx="8" fill={k.c} />
          <text x={k.x + 23} y={k.y + 33} textAnchor="middle" fontSize="28" fontWeight="900" fill="#fff" stroke={INK} strokeWidth="2" fontFamily="sans-serif">{k.l}</text>
        </g>
      ))}
    </g>
  )
}

function Robot() {
  return (
    <g>
      <path d="M80 18 v12" />
      <circle cx="80" cy="14" r="5" fill="#FF4D4D" />
      <rect x="54" y="30" width="52" height="36" rx="10" fill="#9FB4FF" />
      <circle cx="69" cy="47" r="7" fill="#fff" />
      <circle cx="91" cy="47" r="7" fill="#fff" />
      <circle cx="69" cy="47" r="3" fill={INK} stroke="none" />
      <circle cx="91" cy="47" r="3" fill={INK} stroke="none" />
      <rect x="70" y="56" width="20" height="5" rx="2" fill={INK} stroke="none" />
      <rect x="58" y="70" width="44" height="36" rx="8" fill="#6C8CFF" />
      <rect x="40" y="74" width="12" height="26" rx="6" fill="#9FB4FF" />
      <rect x="108" y="74" width="12" height="26" rx="6" fill="#9FB4FF" />
      <circle cx="72" cy="86" r="4" fill="#FFD23F" />
      <circle cx="88" cy="86" r="4" fill="#4CC26B" />
    </g>
  )
}

function Kite() {
  return (
    <g>
      <path d="M80 10 L112 50 L80 90 L48 50 Z" fill="#fff" />
      <path d="M80 10 L80 50 L48 50 Z" fill="#FF4D4D" />
      <path d="M80 10 L112 50 L80 50 Z" fill="#FFD23F" />
      <path d="M48 50 L80 50 L80 90 Z" fill="#3D7BFF" />
      <path d="M112 50 L80 90 L80 50 Z" fill="#4CC26B" />
      <path d="M80 90 q-10 10 0 18 q10 6 4 12" fill="none" />
      <path d="M74 100 l-8 -4 l2 8 z" fill="#FF6FB5" />
      <path d="M86 108 l8 -4 l-2 8 z" fill="#FF8A3D" />
    </g>
  )
}

function Ball() {
  const colors = ['#FF4D4D', '#fff', '#FFD23F', '#fff', '#3D7BFF', '#fff', '#4CC26B', '#fff']
  const r = 40
  const cx = 80
  const cy = 60
  return (
    <g>
      {colors.map((c, i) => {
        const a1 = (i * Math.PI) / 4
        const a2 = ((i + 1) * Math.PI) / 4
        const d = `M${cx} ${cy} L${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} A${r} ${r} 0 0 1 ${cx + r * Math.cos(a2)} ${cy + r * Math.sin(a2)} Z`
        return <path key={i} d={d} fill={c} strokeWidth="2" />
      })}
      <circle cx={cx} cy={cy} r={r} fill="none" />
      <circle cx={cx} cy={cy} r="8" fill="#fff" />
      <path d="M58 40 q8 -10 20 -12" fill="none" stroke="#fff" strokeWidth="5" />
    </g>
  )
}

function Duck() {
  return (
    <g>
      <path d="M30 70 Q30 104 80 104 Q124 104 124 76 Q112 82 100 76 Q88 60 70 66 Q50 72 30 70 Z" fill="#FFD23F" />
      <circle cx="98" cy="46" r="20" fill="#FFD23F" />
      <path d="M116 46 q14 2 16 8 q-8 4 -18 0 z" fill="#FF8A3D" />
      <circle cx="102" cy="42" r="3.5" fill={INK} stroke="none" />
      <path d="M58 80 q14 10 30 0" fill="none" />
      <circle cx="94" cy="54" r="4" fill="#FF9CC8" stroke="none" opacity=".8" />
    </g>
  )
}

const ART = { bear: Bear, bunny: Bunny, dino: Dino, rocket: Rocket, car: Car, train: Train, stacker: Stacker, blocks: Blocks, robot: Robot, kite: Kite, ball: Ball, duck: Duck }

export default function ToyArt({ kind, className = 'toy-art', ...rest }) {
  const Art = ART[kind] || Bear
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" className={className} {...rest}>
      <g stroke={INK} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        <Art />
      </g>
    </svg>
  )
}
