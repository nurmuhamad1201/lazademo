export default [
  { id: 'hotdogs', icon: '🌭', title: 'Хот-доги', hint: 'с чего всё началось', items: [
    { id: 'h1', name: 'Парной классический', price: 10, emoji: '🌭' },
    { id: 'h2', name: 'Парной начо', price: 15, emoji: '🌮' },
    { id: 'h3', name: 'Парной LAZZA', price: 13, emoji: '🔥', hit: true },
    { id: 'h4', name: 'Парной с курицей', price: 15, emoji: '🍗' },
  ]},
  { id: 'sandwiches', icon: '🥖', title: 'Сэндвичи', hint: 'когда хочется посытнее', items: [
    { id: 's1', name: 'Сэндвич', price: 15, emoji: '🥖' },
    { id: 's2', name: 'Сэндвич большой', price: 20, emoji: '🥪' },
  ]},
  { id: 'potato', icon: '🍟', title: 'Картофель', hint: 'хрустит так, что слышно', items: [
    { id: 'p1', name: 'Картошка фри', price: 10, emoji: '🍟' },
    { id: 'p2', name: 'Картошка по-деревенски', price: 10, emoji: '🥔' },
  ]},
  { id: 'shawarma', icon: '🌯', title: 'Шаурма', hint: 'с курицей, горячая', items: [
    { id: 'sh1', name: 'Шаурма с курицей', price: 20, emoji: '🌯', hit: true },
  ]},
  { id: 'combo', icon: '🎁', title: 'Комбо', hint: 'берёшь больше, получаешь подарок', items: [
    { id: 'c1', name: 'Парной классический 3 шт', price: 30, emoji: '🎁', gift: 'Dirol в подарок' },
    { id: 'c2', name: 'Парной классический 5 шт', price: 50, emoji: '🎁', gift: 'CocaCola 0,5 в подарок', hit: true },
    { id: 'c3', name: 'Парной классический 10 шт', price: 100, emoji: '🎉', gift: 'CocaCola 1,5 л в подарок' },
  ]},
  { id: 'sauces', icon: '🥣', title: 'Соусы', hint: 'без них никак', items: [
    { id: 'so1', name: 'Чесночный соус', price: 4, emoji: '🧄' },
    { id: 'so2', name: 'Сырный соус', price: 4, emoji: '🧀' },
    { id: 'so3', name: 'Томатный соус', price: 4, emoji: '🍅' },
  ]},
]