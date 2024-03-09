import {
  account,
  bell,
  card_img,
  circle_dollar,
  clock,
  envelope,
  facebook,
  instagram,
  mail,
  map_pin,
  phone,
  telegram
} from './image'

export const nav_links = [
  { text: 'Главная', link: '/' },
  { text: 'О компании', link: '/About' },
  { text: 'Вакансии', link: '/vacancies' },
  { text: 'Услуги', link: '/services' },
  { text: 'Контакты', link: '/contact' }
]

export const nav_icons = [{ icon: bell }, { icon: mail }, { icon: account }]

export const footer_social = [
  { icon: telegram, link: '' },
  { icon: instagram, link: '' },
  { icon: facebook, link: '' }
]

export const footer_contens = [
  { text: 'Популярные вакансии' },
  { text: 'Подбор вакансий' },
  { text: 'Преимущества' },
  { text: 'Стадии подбора' },
  { text: 'Партнеры' },
  { text: 'Награды' },
  { text: 'Отзывы' }
]

export const footer_contens2 = [
  { text: 'Про компанию' },
  { text: 'Информация' }
]

export const footer_contens3 = [
  { text: 'Все вакансии' },
  { text: 'По странам' },
  { text: 'По професии' },
  { text: 'По зарплате' }
]

export const footer_contens4 = [
  { text: 'Europe service' },
  { text: 'Страны Европы' }
]

export const footer_contact = [
  { text: '+0000000000', icon: phone },
  { text: 'post@gmail.com', icon: envelope }
]

export const card_vacancies = [
  {
    id:'MNCXZ',
    img: card_img,
    title: 'Строитель',
    location: { text: 'Польша', icon: map_pin },
    dollar: { min: 1000, max: 2000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'WUJBA',
    img: card_img,
    title: 'Водитель',
    location: { text: 'Германия', icon: map_pin },
    dollar: { min: 2000, max: 4000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'KRHWP',
    img: card_img,
    title: 'Строитель',
    location: { text: 'Польша', icon: map_pin },
    dollar: { min: 0, max: 5000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'WUYS',
    img: card_img,
    title: 'Водитель',
    location: { text: 'Нидерланды', icon: map_pin },
    dollar: { min: 1500, max: 3000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'EWGRY',
    img: card_img,
    title: 'брояч',
    location: { text: 'Германия', icon: map_pin },
    dollar: { min: 3500, max: 4000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'3GKLSJ',
    img: card_img,
    title: 'Водитель',
    location: { text: 'Польша', icon: map_pin },
    dollar: { min: 0, max: 500, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'PP43',
    img: card_img,
    title: 'Строитель',
    location: { text: 'Аржентина', icon: map_pin },
    dollar: { min: 1000, max: 2000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'LKWH',
    img: card_img,
    title: 'Водитель',
    location: { text: 'Нидерланды', icon: map_pin },
    dollar: { min: 2000, max: 5000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'MSJEFRH',
    img: card_img,
    title: 'брояч',
    location: { text: 'Аржентина', icon: map_pin },
    dollar: { min: 0, max: 5000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'ETIOI',
    img: card_img,
    title: 'Водитель',
    location: { text: 'Польша', icon: map_pin },
    dollar: { min: 2000, max: 5000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'LNEU',
    img: card_img,
    title: 'брояч',
    location: { text: 'Аржентина', icon: map_pin },
    dollar: { min: 4500, max: 5000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'SFALS',
    img: card_img,
    title: 'Водитель',
    location: { text: 'Польша', icon: map_pin },
    dollar: { min: 2600, max: 4000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'I35IU',
    img: card_img,
    title: 'брояч',
    location: { text: 'Польша', icon: map_pin },
    dollar: { min: 2000, max: 5000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'AKH',
    img: card_img,
    title: 'Повар',
    location: { text: 'Германия', icon: map_pin },
    dollar: { min: 0, max: 4000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'ZISJO',
    img: card_img,
    title: 'брояч',
    location: { text: 'Аржентина', icon: map_pin },
    dollar: { min: 2000, max: 5000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'LKNDA',
    img: card_img,
    title: 'Строитель',
    location: { text: 'Германия', icon: map_pin },
    dollar: { min: 2000, max: 5000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'OIJTR',
    img: card_img,
    title: 'Повар',
    location: { text: 'Нидерланды', icon: map_pin },
    dollar: { min: 2000, max: 5000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'EW4NO',
    img: card_img,
    title: 'брояч',
    location: { text: 'Аржентина', icon: map_pin },
    dollar: { min: 0, max: 5000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'GDKK',
    img: card_img,
    title: 'Повар',
    location: { text: 'Нидерланды', icon: map_pin },
    dollar: { min: 2000, max: 5000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    id:'JAIE',
    img: card_img,
    title: 'Строитель',
    location: { text: 'Нидерланды', icon: map_pin },
    dollar: { min: 0, max: 5000, icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
]
