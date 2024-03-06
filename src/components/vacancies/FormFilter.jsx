import { CustomSelect } from '../ui/CustomSelect'
import { PriceRange } from './PriceRange'

export const FormFilter = () => {
  
  const options1 = ['Польша', 'Германия', 'Нидерланды']
  const options2 = ['Повар', 'Строитель', 'Водитель']

  

  return (
    <section className='w-[60%] mx-auto pb-0 pt-32 font-montserrat'>
      <div className='grid grid-cols-2 gap-6'>
        <CustomSelect options={options1} defaulValue={'Страна'} />
        <CustomSelect options={options2} defaulValue={'Професии'} />
      </div>
      <div>
        <PriceRange />
      </div>
    </section>
  )
}
