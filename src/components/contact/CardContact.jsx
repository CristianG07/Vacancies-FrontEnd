import { decoration_bg } from "../../utils/image"

export const CardContact = ({className, children}) => {
  return (
    <div className={`relative bg-green_secondary w-full md:max-w-[28rem] rounded-[2rem] text-white ${className}`}>
      <div className='absolute left-0 top-0 w-[80%] lg:w-[60%]'>
        <img src={decoration_bg} alt='decoration_bg' />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
