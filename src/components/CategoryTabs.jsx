import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CategoryTabs({ categories }) {
  const [active, setActive] = useState(categories[0].id)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' }
    )
    categories.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [categories])

  useEffect(() => {
    document.getElementById(`tab-${active}`)?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  }, [active])

  if (categories.length < 2) return null

  return (
    <div className="sticky top-14 z-30 bg-cream/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-3xl mx-auto flex gap-2 overflow-x-auto px-4 py-2.5 [scrollbar-width:none]">
        {categories.map((c) => (
          <a key={c.id} id={`tab-${c.id}`} href={`#${c.id}`} className="relative whitespace-nowrap px-4 py-1.5 text-sm font-bold">
            {active === c.id && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 bg-lazza-red rounded-full"
                transition={{ type: 'spring', damping: 24, stiffness: 300 }}
              />
            )}
            <span className={`relative ${active === c.id ? 'text-white' : 'text-black/70'}`}>
              {c.icon} {c.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}