import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import CategoryTabs from '../components/CategoryTabs'
import MenuCard from '../components/MenuCard'
import InfoBlock from '../components/InfoBlock'
import Footer from '../components/Footer'
import CartButton from '../components/CartButton'
import CartDrawer from '../components/CartDrawer'

export default function MenuPage({ hero, menu, marquee }) {
  return (
    <>
      <Hero {...hero} />
      <Marquee words={marquee} />
      <CategoryTabs categories={menu} />
      <main id="menu" className="max-w-3xl mx-auto px-4 pb-6">
        {menu.map((cat) => (
          <section key={cat.id} id={cat.id} className="pt-8 scroll-mt-28">
            <h2 className="font-display font-black text-2xl">{cat.icon} {cat.title}</h2>
            <p className="font-hand text-2xl text-lazza-red -mt-1 mb-3">{cat.hint}</p>
            <div className="grid grid-cols-2 gap-3">
              {cat.items.map((item, i) => <MenuCard key={item.id} item={item} index={i} />)}
            </div>
          </section>
        ))}
      </main>
      <InfoBlock />
      <Footer />
      <CartButton />
      <CartDrawer />
    </>
  )
}