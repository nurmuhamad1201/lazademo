export default function OpenStatus() {
  const h = new Date().getHours()
  const open = h >= 9 && h < 23
  return (
    <span className="inline-flex items-center gap-2 bg-black/30 backdrop-blur px-3 py-1.5 rounded-full text-sm font-medium">
      <span className={`w-2.5 h-2.5 rounded-full ${open ? 'bg-green-400 pulse-dot' : 'bg-gray-400'}`} />
      {open ? 'Открыто до 23:00' : 'Сейчас закрыто, откроемся в 09:00'}
    </span>
  )
}