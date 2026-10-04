import { useState } from 'react'
import { toys, categories, filterToys, cartTotal } from './data/toys.js'
import ToyCard from './components/ToyCard.jsx'
import HeroScene from './components/HeroScene.jsx'

const CHIP_COLORS = { All: '#8B5CF6', Plush: '#FF6FB5', Vehicles: '#FF4D4D', Blocks: '#3D7BFF', Outdoor: '#2FB34F' }

export default function App() {
  const [category, setCategory] = useState('All')
  const [cart, setCart] = useState([])

  const visible = filterToys(toys, category)
  const count = cart.reduce((n, item) => n + item.qty, 0)

  function addToBag(toy) {
    setCart((prev) => {
      const found = prev.find((item) => item.id === toy.id)
      if (found) return prev.map((item) => (item.id === toy.id ? { ...item, qty: item.qty + 1 } : item))
      return [...prev, { ...toy, qty: 1 }]
    })
  }

  return (
    <>
      <div className="sky">
        <header className="topbar">
          <a className="logo" href="#top">
            <span className="logo__mark" aria-hidden="true">
              <i style={{ background: '#FF4D4D' }} />
              <i style={{ background: '#FFD23F' }} />
              <i style={{ background: '#3D7BFF' }} />
            </span>
            Tumble Toys
          </a>
          <nav className="nav" aria-label="Main">
            <a href="#shop">Shop</a>
            <a href="#sale">Sale</a>
          </nav>
          <div className="bag" aria-live="polite">
            <span aria-hidden="true">🛍️</span>
            <strong key={count} className="bag__count" data-testid="bag-count">{count}</strong>
            <span className="bag__total">${cartTotal(cart)}</span>
          </div>
        </header>

        <section className="hero" id="top">
          <div className="hero__copy">
            <h1>Toys that make kids giggle</h1>
            <p>Cuddly bears, zooming rockets and wobbly blocks. Picked by parents, tested by very serious kids.</p>
            <a className="btn-big" href="#shop">Shop toys</a>
          </div>
          <HeroScene />
        </section>
        <svg className="hills" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 70 Q240 10 480 60 T960 50 T1440 40 V140 H0 Z" fill="#59D16B" stroke="#2A1E3D" strokeWidth="3" />
          <path d="M0 110 Q300 70 600 105 T1200 95 T1440 90 V140 H0 Z" fill="#3FB955" stroke="#2A1E3D" strokeWidth="3" />
        </svg>
      </div>

      <div className="ribbon" id="sale">
        <p>Toy Week! Free gift wrap on every order over $30</p>
      </div>

      <main className="shop" id="shop">
        <h2>Pick a toy</h2>
        <nav className="filters" aria-label="Toy categories">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={c === category ? 'chip chip--on' : 'chip'}
              style={{ '--chip': CHIP_COLORS[c] }}
              aria-pressed={c === category}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </nav>

        <div className="grid">
          {visible.map((toy) => (
            <ToyCard key={toy.id} toy={toy} onAdd={addToBag} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>Tumble Toys is a demo shop for a DevOps CI/CD lab.</p>
      </footer>
    </>
  )
}
