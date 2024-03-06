import { Title } from '../ui/Title'

export const CardServices = () => {
  const services = [
    {
      title: 'Работа в Польше',
      subtitle: 'Официальное трудоустройство в Польше'
    },
    {
      title: 'Работа в Германии',
      subtitle: 'Официальное трудоустройство в Германии'
    },
    {
      title: 'Работа в Нидерладах',
      subtitle: 'Официальное трудоустройство в Нидерландах'
    }
  ]
  return (
    <section className='container_sections pb-0 text-white font-semibold'>
      <div className='mb-12 mt-8 text-center'>
        <Title>Услуги</Title>
      </div>
      <div className='responsive_cols text-white font-semibold'>
        {services.map((service) => (
          <div className='galery' key={service.title}>
            <div className='galery bg-green_secondary'>
              <div className='galery_content text-balance'>
                <span className='text-2xl'>Работа в Польше</span>
                <p>Официальное трудоустройство в Польше</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
