import MenuPage from './MenuPage'
import menu from '../data/foodMenu'

const hero = {
  title: 'Lazza Food',
  subtitle: 'Горячие хот-доги, шаурма и картошка. Берёшь и сразу идёшь есть.',
  note: 'горячее!',
  image: '/images/storefront.jpg',
  floaters: [
    { e: '🌭', x: '6%', y: '28%' },
    { e: '🍟', x: '84%', y: '22%' },
    { e: '🔥', x: '88%', y: '58%' },
    { e: '🌯', x: '3%', y: '70%' },
  ],
}

export default function FoodPage() {
  return <MenuPage hero={hero} menu={menu} marquee={['Парной LAZZA', 'Шаурма с курицей', 'Комбо в подарок', 'Доставка и самовывоз']} />
}