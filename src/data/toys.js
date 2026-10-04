export const categories = ['All', 'Plush', 'Vehicles', 'Blocks', 'Outdoor']

export const toys = [
  { id: 1, name: 'Hugo the teddy bear', category: 'Plush', age: '0+', price: 24, bg: '#FFD9A8', kind: 'bear', badge: 'Bestseller' },
  { id: 2, name: 'Bella the bunny', category: 'Plush', age: '0+', price: 19, bg: '#FFC9E3', kind: 'bunny' },
  { id: 3, name: 'Dino buddy', category: 'Plush', age: '2+', price: 22, bg: '#C8F5B4', kind: 'dino', badge: 'New' },
  { id: 4, name: 'Zoom rocket', category: 'Vehicles', age: '3+', price: 29, bg: '#BEE8FF', kind: 'rocket' },
  { id: 5, name: 'Red race car', category: 'Vehicles', age: '3+', price: 18, bg: '#FFE27A', kind: 'car', badge: 'Bestseller' },
  { id: 6, name: 'Choo-choo train', category: 'Vehicles', age: '2+', price: 34, bg: '#FFCBB8', kind: 'train' },
  { id: 7, name: 'Rainbow stacker', category: 'Blocks', age: '1+', price: 12, bg: '#E2D4FF', kind: 'stacker' },
  { id: 8, name: 'ABC blocks', category: 'Blocks', age: '1+', price: 16, bg: '#BFF3EA', kind: 'blocks' },
  { id: 9, name: 'Beep-boop robot', category: 'Blocks', age: '5+', price: 39, bg: '#D6E4FF', kind: 'robot', badge: 'New' },
  { id: 10, name: 'Rainbow kite', category: 'Outdoor', age: '5+', price: 21, bg: '#C9F0FF', kind: 'kite' },
  { id: 11, name: 'Beach ball', category: 'Outdoor', age: '3+', price: 8, bg: '#FFF0A8', kind: 'ball' },
  { id: 12, name: 'Splash duck', category: 'Outdoor', age: '0+', price: 7, bg: '#C6F1FF', kind: 'duck' },
]

export function filterToys(list, category) {
  if (!category || category === 'All') return list
  return list.filter((toy) => toy.category === category)
}

export function cartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0)
}
