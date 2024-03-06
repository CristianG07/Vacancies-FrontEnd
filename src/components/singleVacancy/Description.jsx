import { Title } from '../ui/Title'
import { ListDescription } from './ListDescription'

export const Description = () => {
  const responsibilities = [
    {
      title: 'Обязанности',
      text_list: [
        'Принимать и обрабатывать обращения от пользователей по телефону',
        'Осуществлять техническую поддержку пользователей удаленно, иногда возможны выезды клиентам',
        'Консультировать пользователей',
        'Регулярно информировать пользователей о ходе решения их заявок',
        'Проводить первичную диагностику и устранять неисправности в работе компьютерной техники'
      ]
    }
  ]

  const requirements = [
    {
      title: 'Требования к кандидату',
      text_list: [
        'Понимание принципов диагностики ПК',
        'Знание десктопных ОС семейства Windows на уровне администратора',
        'Понимание принципов работы сети NAT, DHCP, DNS',
        'Понимание работы почтовых протоколов POP3, IMAP, SMTP, etc.',
        'Практический опыт работы с Google Workspace',
        'Базовые знания Windows Server, AD, DNS, Terminal Services'
      ]
    }
  ]

  const additional_Information = [
    {
      title: 'Дополнительная информация:',
      text_list: [
        'Опыт работы обязателен',
        'Питание: за свой счёт',
        'Испытательный срок – до 2 недель'
      ]
    }
  ]

  return (
    <section className='container_sections pt-10'>
      <div className='space-y-10 md:max-w-[55%]'>
        <div className='space-y-5 font-montserrat'>
          <Title className='text-center text-xl lg:text-2xl text-nowrap md:text-start'>
            Описание вакансии
          </Title>
          <p>
            Нужен системный администратор в компанию комплексной IT поддержки.
            Занимаемся обслуживанием компьютерной техники и компьютерных сетей
            для наших корпоративных клиентов в формате аутсорсинга.
          </p>
          <p>
            Мы ищем нашу команду талантливого IT специалиста, готового бросить
            вызов посредственности в поддержке пользователей!
          </p>
        </div>
        {responsibilities.map((lists, i) => (
          <ListDescription key={i} {...lists} />
        ))}
        {requirements.map((lists, i) => (
          <ListDescription key={i} {...lists} />
        ))}
        {additional_Information.map((lists, i) => (
          <ListDescription key={i} {...lists} />
        ))}
      </div>
    </section>
  )
}
