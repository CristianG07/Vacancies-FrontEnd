import { Title } from '../ui/Title'

export const ListDescription = ({ title, text_list }) => {
  return (
    <div className='space-y-5 font-montserrat'>
      <Title className='text-center md:text-start text-xl lg:text-2xl text-nowrap'>{title}</Title>
      <ul className='ml-5 list-disc'>
        {text_list.map((list, i) => (
          <li key={i}>
            {list}
          </li>
        ))}
      </ul>
    </div>
  )
}
