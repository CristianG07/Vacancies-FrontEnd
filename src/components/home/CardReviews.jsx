import { Button_Primary } from "../ui/Button_Primary"

export const CardReviews = ({img, title, subtitle, date, desc, btntext}) => {
  return (
    <div className='relative h-[21.25rem] rounded-3xl overflow-hidden text-white'>
      <img className='absolute' src={img} alt={title} />
      <div className='absolute px-6 py-8 flex flex-col justify-between h-full'>
        <div className='flex justify-between items-center gap-2.5 text-nowrap'>
          <span className='text-base md:text-lg font-montserrat'>{date}</span>
          <Button_Primary className='px-3 py-3'>
            {btntext}
          </Button_Primary>
        </div>
        <div className='space-y-3'>
          <div>
            <h5 className='text-xl font-semibold'>{title}</h5>
            <span className='text-lg font-medium'>{subtitle}</span>
          </div>
          <p className='font-montserrat'>{desc}</p>
        </div>
      </div>
    </div>
  )
}
