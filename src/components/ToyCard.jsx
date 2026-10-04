import ToyArt from './ToyArt.jsx'

export default function ToyCard({ toy, onAdd }) {
  return (
    <article className="toy-card">
      <div className="toy-card__art" style={{ background: toy.bg }}>
        {toy.badge && <span className={`sticker sticker--${toy.badge === 'New' ? 'new' : 'best'}`}>{toy.badge}</span>}
        <ToyArt kind={toy.kind} />
      </div>
      <h3>{toy.name}</h3>
      <p className="toy-card__meta">Ages {toy.age}</p>
      <div className="toy-card__row">
        <span className="toy-card__price">${toy.price}</span>
        <button type="button" onClick={() => onAdd(toy)} aria-label={`Add ${toy.name} to bag`}>
          Add to bag
        </button>
      </div>
    </article>
  )
}
