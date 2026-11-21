import { ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function CartButton() {
  const { count, total, setOpen } = useCart()
  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 18 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setOpen(true)}
          className="fixed bottom-4 left-4 right-4 max-w-3xl mx-auto z-40 bg-black text-white rounded-full py-3.5 px-5 flex items-center justify-between shadow-2xl font-bold"
        >
          <span className="flex items-center gap-3">
            <motion.span key={count} initial={{ scale: 1.6 }} animate={{ scale: 1 }} className="bg-lazza-yellow text-black w-7 h-7 rounded-full grid place-items-center text-sm font-black">
              {count}
            </motion.span>
            <ShoppingBag size={18} /> Моя корзина
          </span>
          <span className="font-display">{total} сом.</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}