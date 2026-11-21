export default function Marquee({ words }) {
  const row = [...words, ...words, ...words, ...words]
  return (
    <div className="bg-lazza-yellow overflow-hidden border-y-4 border-black -rotate-1 scale-105 my-6">
      <div className="flex w-max animate-marquee py-2">
        {row.map((w, i) => (
          <span key={i} className="mx-5 font-display font-black text-xs whitespace-nowrap uppercase">
            {w} <span className="ml-5">🔥</span>
          </span>
        ))}
      </div>
    </div>
  )
}