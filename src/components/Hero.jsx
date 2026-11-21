import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import OpenStatus from './OpenStatus'
import { PHONE } from '../data/info'

export default function Hero({ title, subtitle, note, image, floaters = [] }) {
  const { scrollY } = useScroll()
  const imgY = useTransform(scrollY, [0, 400], [0, 40])
  const h = new Date().getHours()
  const greet = h < 5 ? 'Не спится?' : h < 12 ? 'Доброе утро' : h < 18 ? 'Добрый день' : 'Добрый вечер'

  return (
    <section className="relative overflow-hidden bg-lazza-red text-white grain">
      {/* размытая копия фото на фоне */}
      <img src={image} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-lazza-red/50 via-lazza-red/80 to-lazza-dark" />

      {floaters.map((f, i) => (
        <span
          key={i}
          className="absolute text-4xl select-none animate-floaty opacity-80 pointer-events-none"
          style={{ left: f.x, top: f.y, animationDelay: `${i * 0.6}s` }}
        >
          {f.e}
        </span>
      ))}

      <div className="relative max-w-3xl mx-auto px-5 pt-8 pb-20">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-hand text-3xl text-lazza-yellow -rotate-2"
        >
          {greet}! 👋
        </motion.p>

        <h1 className="font-display font-black text-5xl sm:text-6xl leading-none mt-1">
          {title.split(' ').map((w, i) => (
            <motion.span
              key={i}
              className="inline-block mr-3"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 * i, type: 'spring', damping: 12 }}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <p className="mt-3 text-lg opacity-90 max-w-md">{subtitle}</p>
        <div className="mt-3"><OpenStatus /></div>

        {/* фото полностью, без обрезки */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
          transition={{ delay: 0.3, type: 'spring', damping: 14 }}
          className="relative mt-8 rounded-3xl bg-white p-2 shadow-2xl shadow-black/40"
        >
          <img src={image} alt={title} className="w-full max-h-[60svh] object-contain rounded-2xl" />
          <span className="absolute -top-4 -right-2 rotate-6 bg-lazza-yellow text-black font-hand text-2xl px-3 py-0.5 rounded-xl shadow-lg">
            {note}
          </span>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3">
          <motion.a
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            href="#menu"
            className="bg-lazza-yellow text-black font-black px-7 py-3 rounded-full shadow-lg"
          >
            Смотреть меню 🔥
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${PHONE}`}
            className="flex items-center gap-2 bg-white/15 backdrop-blur border border-white/30 font-bold px-6 py-3 rounded-full"
          >
            <MessageCircle size={18} /> Написать
          </motion.a>
        </div>
      </div>

      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute bottom-0 w-full h-10 text-cream" fill="currentColor">
        <path d="M0 30 Q 360 70 720 30 T 1440 30 V60 H0Z" />
      </svg>
    </section>
  )
}