import { MapPin, Clock, Phone, Truck } from 'lucide-react'
import { motion } from 'framer-motion'
import { PHONE, PHONE_VIEW } from '../data/info'

const rows = [
  { icon: MapPin, label: 'Где мы', value: 'Душанбе' },
  { icon: Clock, label: 'Работаем', value: 'Каждый день 09:00 – 23:00' },
  { icon: Truck, label: 'Как получить', value: 'Доставка и самовывоз' },
  { icon: Phone, label: 'WhatsApp', value: PHONE_VIEW, href: `https://wa.me/${PHONE}` },
]

export default function InfoBlock() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="font-display font-black text-2xl">Заходите в гости</h2>
      <p className="font-hand text-2xl text-lazza-red -mt-1 mb-4">мы всегда рады</p>
      <div className="grid grid-cols-2 gap-3">
        {rows.map(({ icon: Icon, label, value, href }, i) => (
          <motion.a
            key={label}
            href={href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white rounded-3xl p-4 shadow-md shadow-lazza-red/10 border border-black/5 block"
          >
            <span className="inline-grid place-items-center w-10 h-10 rounded-2xl bg-lazza-red text-white mb-2"><Icon size={18} /></span>
            <p className="text-xs text-black/50">{label}</p>
            <p className="font-bold text-sm leading-tight">{value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}