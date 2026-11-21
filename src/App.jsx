import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import FoodPage from './pages/FoodPage'
import CoffeePage from './pages/CoffeePage'

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollProgress />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Navigate to="/food" replace />} />
            <Route path="/food" element={<FoodPage />} />
            <Route path="/coffee" element={<CoffeePage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}