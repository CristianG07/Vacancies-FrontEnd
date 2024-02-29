import { Button_Primary } from '../ui/Button_Primary'
import { Title } from '../ui/Title'

export const CardVacancies = ({ img, title, location, dollar, time }) => {
  return (
    <div className='mx-3 overflow-hidden rounded-3xl'>
      <div className=''>
        <img className='aspect-[23/20]' src={img} alt='card_img' />
      </div>
      <div className='bg-ligth_gray p-3 sm:p-5 space-y-3 sm:space-y-5'>
        <div>
          <Title className='text-base sm:text-lg'>{title}</Title>
        </div>
        <div className='font-montserrat text-xs sm:text-sm text-text_card space-y-1 sm:space-y-2'>
          <div className='flex items-center gap-1'>
            <div>
              <img src={location.icon} alt={location.text} />
            </div>
            <p>{location.text}</p>
          </div>
          <div className='flex items-center gap-1'>
            <div>
              <img src={dollar.icon} alt={dollar.text} />
            </div>
            <p>{dollar.text}</p>
          </div>
          <div className='flex items-center gap-1'>
            <div>
              <img src={time.icon} alt={time.text} />
            </div>
            <p>{time.text}</p>
          </div>
        </div>
        <div className='mx-auto w-fit text-white'>
          <Button_Primary>Подробнее</Button_Primary>
        </div>
      </div>
    </div>
  )
}
