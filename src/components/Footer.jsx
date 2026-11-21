import { INSTAGRAM } from '../data/info'

export default function Footer() {
  return (
    <footer className="bg-lazza-red text-white text-center pt-10 pb-28 grain">
      <p className="font-display font-black text-4xl">LAZZA</p>
      <p className="font-hand text-2xl text-lazza-yellow mt-1">Вкус, который объединяет!</p>
      <a href={INSTAGRAM} className="inline-block mt-4 underline underline-offset-4">@lazza.tajikistan</a>
      <p className="text-xs opacity-60 mt-6">Сделано с любовью в Душанбе ❤️</p>
    </footer>
  )
}