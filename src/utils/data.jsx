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
  { text: 'Контакты', link: '/contacts' }
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
    img: card_img,
    title: 'Системный администратор',
    location: { text: 'Местоположение', icon: map_pin },
    dollar: { text: '2000 - 5000$', icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    img: card_img,
    title: 'Системный администратор',
    location: { text: 'Местоположение', icon: map_pin },
    dollar: { text: '2000 - 5000$', icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    img: card_img,
    title: 'Системный администратор',
    location: { text: 'Местоположение', icon: map_pin },
    dollar: { text: '2000 - 5000$', icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    img: card_img,
    title: 'Системный администратор',
    location: { text: 'Местоположение', icon: map_pin },
    dollar: { text: '2000 - 5000$', icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    img: card_img,
    title: 'Системный администратор',
    location: { text: 'Местоположение', icon: map_pin },
    dollar: { text: '2000 - 5000$', icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
  {
    img: card_img,
    title: 'Системный администратор',
    location: { text: 'Местоположение', icon: map_pin },
    dollar: { text: '2000 - 5000$', icon: circle_dollar },
    time: { text: 'Пн - Пт', icon: clock }
  },
]
