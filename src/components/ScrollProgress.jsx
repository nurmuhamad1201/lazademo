import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })
  return <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-lazza-yellow origin-left z-[70]" />
}