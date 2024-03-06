import { CustomSelect } from '../ui/CustomSelect'
import { PriceRange } from './PriceRange'

export const FormFilter = () => {
  const options1 = ['Польша', 'Германия', 'Нидерланды']
  const options2 = ['Повар', 'Строитель', 'Водитель']

  return (
    <section className='container_sections lg:w-[70%] pb-0 pt-32 font-montserrat'>
      <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5'>
        <div className='md:col-span-2 w-full'>
          <div className='grid grid-cols-2 justify-center space-x-5'>
            <CustomSelect options={options1} defaulValue={'Страна'} />
            <CustomSelect options={options2} defaulValue={'Професии'} />
          </div>
        </div>
        <div className='md:h-14'>
          <div className='text-center mb-1'>
            <p>Зарплата</p>
          </div>
          <PriceRange
            min={0}
            max={5000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
      </div>
    </section>
  )
}
