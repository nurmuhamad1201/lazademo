import MenuPage from './MenuPage'
import menu from '../data/coffeeMenu'

const hero = {
  title: 'Lazza Coffee',
  subtitle: 'Кофе с собой. Взял стакан и пошёл дальше по делам.',
  note: 'с собой!',
  image: '/images/coffee.jpg',
  floaters: [
    { e: '☕', x: '6%', y: '26%' },
    { e: '🫘', x: '86%', y: '24%' },
    { e: '🍫', x: '88%', y: '62%' },
    { e: '🥛', x: '3%', y: '72%' },
  ],
}

export default function CoffeePage() {
  return <MenuPage hero={hero} menu={menu} marquee={['Раф', 'Горячий шоколад', 'Капучино', 'Кофе с собой']} />
}