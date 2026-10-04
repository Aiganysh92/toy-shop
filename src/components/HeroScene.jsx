import ToyArt from './ToyArt.jsx'

const INK = '#2A1E3D'

export default function HeroScene() {
  return (
    <svg viewBox="0 0 520 420" className="hero-scene" aria-hidden="true">
      <g stroke={INK} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        <g className="sun">
          <circle cx="430" cy="80" r="44" fill="#FFD23F" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <path key={a} d="M430 20 v-14" transform={`rotate(${a} 430 80)`} />
          ))}
          <circle cx="416" cy="74" r="4" fill={INK} stroke="none" />
          <circle cx="444" cy="74" r="4" fill={INK} stroke="none" />
          <path d="M418 90 q12 10 24 0" fill="none" />
        </g>
        <path d="M60 110 a26 26 0 0 1 48 -14 a20 20 0 0 1 34 10 a18 18 0 0 1 -4 34 h-74 a16 16 0 0 1 -4 -30 z" fill="#fff" />
        <path d="M260 60 a20 20 0 0 1 36 -8 a16 16 0 0 1 26 10 a14 14 0 0 1 -4 26 h-56 a14 14 0 0 1 -2 -28 z" fill="#fff" />
        <g className="balloons">
          <path d="M120 260 q-10 -60 -20 -110 M150 260 q4 -70 10 -130 M180 260 q14 -60 30 -100" fill="none" strokeWidth="2" />
          <ellipse cx="96" cy="130" rx="26" ry="32" fill="#FF4D4D" />
          <ellipse cx="160" cy="104" rx="26" ry="32" fill="#3D7BFF" />
          <ellipse cx="212" cy="144" rx="26" ry="32" fill="#FF6FB5" />
          <path d="M86 116 q4 -10 12 -12 M150 90 q4 -10 12 -12 M202 130 q4 -10 12 -12" fill="none" stroke="#fff" strokeWidth="4" />
        </g>
      </g>
      <ToyArt kind="bear" x="40" y="230" width="230" height="172" className="" />
      <ToyArt kind="rocket" x="300" y="150" width="200" height="150" className="" />
      <ToyArt kind="blocks" x="250" y="300" width="160" height="120" className="" />
      <ToyArt kind="duck" x="390" y="320" width="130" height="98" className="" />
    </svg>
  )
}
