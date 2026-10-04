import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App.jsx'
import { toys, filterToys, cartTotal } from '../data/toys.js'

describe('Tumble Toys', () => {
  it('shows all toys by default', () => {
    render(<App />)
    expect(screen.getAllByRole('article')).toHaveLength(toys.length)
  })

  it('filters by category', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Plush' }))
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('adds a toy to the bag', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: /add rainbow stacker/i }))
    fireEvent.click(screen.getByRole('button', { name: /add rainbow stacker/i }))
    expect(screen.getByTestId('bag-count')).toHaveTextContent('2')
  })
})

describe('helpers', () => {
  it('filterToys returns everything for All', () => {
    expect(filterToys(toys, 'All')).toHaveLength(toys.length)
  })
  it('cartTotal sums price times qty', () => {
    expect(cartTotal([{ price: 10, qty: 2 }, { price: 5, qty: 1 }])).toBe(25)
  })
})
