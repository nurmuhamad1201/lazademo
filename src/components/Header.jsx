import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const tabs = [['/food', 'Food'], ['/coffee', 'Coffee']]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-14 bg-lazza-red/90 backdrop-blur-md shadow-lg">
      <div className="max-w-3xl mx-auto h-full flex items-center justify-between px-4">
        <motion.img
          whileHover={{ rotate: 12, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src="/images/logo.jpg"
          alt="Lazza"
          className="h-10 w-10 rounded-full bg-white object-contain ring-2 ring-lazza-yellow"
        />
        <nav className="flex bg-black/20 rounded-full p-1">
          {tabs.map(([to, label]) => (
            <NavLink key={to} to={to} className="relative px-5 py-1.5 text-sm font-bold">
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-lazza-yellow rounded-full"
                      transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                    />
                  )}
                  <span className={`relative ${isActive ? 'text-black' : 'text-white'}`}>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}