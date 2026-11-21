import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function MenuCard({ item, index = 0 }) {
  const { add, items } = useCart()
  const [pop, setPop] = useState(0)
  const qty = items.find((i) => i.id === item.id)?.qty || 0

  const onAdd = () => {
    add(item)
    setPop((p) => p + 1)
    navigator.vibrate?.(15)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: (index % 2) * 0.08, type: 'spring', damping: 18 }}
      whileHover={{ y: -4 }}
      className="relative bg-white rounded-3xl p-3 shadow-md shadow-lazza-red/10 flex flex-col overflow-hidden border border-black/5"
    >
      {item.hit && (
        <span className="absolute top-2 left-2 z-10 bg-lazza-red text-white text-[10px] font-black px-2 py-0.5 rounded-full -rotate-6">
          🔥 ХИТ
        </span>
      )}
      {qty > 0 && (
        <motion.span
          key={qty}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 z-10 bg-black text-white text-xs font-bold w-6 h-6 rounded-full grid place-items-center"
        >
          {qty}
        </motion.span>
      )}

      <div className="grid place-items-center h-28 rounded-2xl bg-gradient-to-br from-lazza-yellow/50 to-lazza-red/10">
        <span className="text-6xl animate-floaty" style={{ animationDelay: `${(index % 5) * 0.4}s` }}>
          {item.emoji}
        </span>
      </div>

      <h3 className="font-bold text-sm leading-tight mt-3 flex-1">{item.name}</h3>
      {item.gift && <p className="font-hand text-lg text-lazza-red leading-none mt-1">🎁 {item.gift}</p>}

      <div className="relative flex items-center justify-between mt-3">
        <span className="font-display font-black text-base">
          {item.price} <span className="text-xs text-black/50">сом.</span>
        </span>
        <motion.button
          whileTap={{ scale: 0.8, rotate: 90 }}
          onClick={onAdd}
          aria-label="Добавить"
          className="bg-lazza-red text-white rounded-full p-2.5 shadow-md shadow-lazza-red/40"
        >
          <Plus size={18} strokeWidth={3} />
        </motion.button>
        <AnimatePresence>
          {pop > 0 && (
            <motion.span
              key={pop}
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{ opacity: 0, y: -34, scale: 1.4 }}
              transition={{ duration: 0.7 }}
              className="absolute right-1 -top-1 font-black text-lazza-red pointer-events-none"
            >
              +1
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}