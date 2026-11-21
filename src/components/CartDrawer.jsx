import { useMemo, useState } from 'react'
import { X, Minus, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { PHONE } from '../data/info'

function Confetti() {
  const pieces = useMemo(
    () => Array.from({ length: 40 }, (_, i) => ({
      left: Math.random() * 100,
      rot: Math.random() * 720,
      dur: 2 + Math.random() * 1.5,
      color: ['#d90b11', '#f9c513', '#ffffff', '#25d366'][i % 4],
    })), []
  )
  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute top-0 w-2.5 h-4 rounded-sm"
          style={{ left: `${p.left}%`, background: p.color }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{ y: '105vh', rotate: p.rot, opacity: 0.9 }}
          transition={{ duration: p.dur, ease: 'easeIn' }}
        />
      ))}
    </div>
  )
}

export default function CartDrawer() {
  const { items, add, dec, clear, total, open, setOpen } = useCart()
  const [sent, setSent] = useState(false)

  const close = () => { setOpen(false); setSent(false) }

  const send = () => {
    const lines = items.map((i) => `• ${i.name} x${i.qty} — ${i.qty * i.price} сом.`).join('\n')
    const text = `Здравствуйте! Хочу заказать:\n${lines}\n\nИтого: ${total} сом.`
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end"
          onClick={close}
        >
          {sent && <Confetti />}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="bg-cream w-full max-w-3xl mx-auto rounded-t-[2rem] p-5 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1.5 bg-black/15 rounded-full mx-auto mb-4" />
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-display font-black text-xl">Ваш заказ</h2>
              <button onClick={close} className="bg-black/10 rounded-full p-1.5"><X size={18} /></button>
            </div>

            {sent ? (
              <div className="text-center py-8">
                <p className="text-6xl">🎉</p>
                <p className="font-hand text-3xl text-lazza-red mt-2">Спасибо, что выбрали нас!</p>
                <p className="text-black/60 mt-1">Мы уже читаем ваше сообщение в WhatsApp.</p>
                <button onClick={() => { clear(); close() }} className="mt-5 bg-lazza-red text-white font-bold px-8 py-3 rounded-full">
                  Отлично
                </button>
              </div>
            ) : items.length === 0 ? (
              <p className="font-hand text-2xl text-black/50 py-8 text-center">Тут пока пусто. Голодный желудок ждёт 🙂</p>
            ) : (
              <>
                <AnimatePresence initial={false}>
                  {items.map((i) => (
                    <motion.div
                      key={i.id}
                      layout
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      className="flex items-center justify-between py-3 border-b border-black/10"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{i.emoji}</span>
                        <div>
                          <p className="font-semibold text-sm leading-tight">{i.name}</p>
                          <p className="text-xs text-black/50">{i.price} сом.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button onClick={() => dec(i.id)} className="bg-black/10 rounded-full p-1.5"><Minus size={14} /></button>
                        <span className="font-black w-4 text-center">{i.qty}</span>
                        <button onClick={() => add(i)} className="bg-lazza-red text-white rounded-full p-1.5"><Plus size={14} /></button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <div className="flex justify-between font-display font-black text-lg mt-5">
                  <span>Итого</span><span>{total} сом.</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={send}
                  className="w-full mt-4 bg-[#25d366] text-white font-bold py-3.5 rounded-full shadow-lg shadow-green-500/30"
                >
                  Заказать в WhatsApp
                </motion.button>
                <button onClick={clear} className="w-full mt-2 text-sm text-black/50 py-2">Очистить корзину</button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}