import { createContext, useContext, useState } from 'react'

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)

  const add = (item) =>
    setItems((prev) => {
      const found = prev.find((i) => i.id === item.id)
      return found
        ? prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...item, qty: 1 }]
    })

  const dec = (id) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i)).filter((i) => i.qty > 0)
    )

  const clear = () => setItems([])
  const count = items.reduce((s, i) => s + i.qty, 0)
  const total = items.reduce((s, i) => s + i.qty * i.price, 0)

  return (
    <CartContext.Provider value={{ items, add, dec, clear, count, total, open, setOpen }}>
      {children}
    </CartContext.Provider>
  )
}