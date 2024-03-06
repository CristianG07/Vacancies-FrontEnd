import { FaFacebookF } from "react-icons/fa"
import { Link } from "react-router-dom"

export const ContentReviews = ({img, name, desc, link_facebook}) => {
  return (
    <div className='flex flex-col md:flex-row text-center md:text-start items-center justify-center gap-5 mb-10'>
      <div className='rounded-full overflow-hidden max-w-48'>
        <img src={img} alt={name} />
      </div>
      <div className='space-y-5'>
        <div className='flex items-center justify-center md:justify-start gap-4 text-lg'>
          <h4 className='font-semibold'>{name}</h4>
          <Link to={link_facebook}>
            <div className='w-7 h-7 bg-[#1418A1] hover:bg-blue-700 duration-500 flex items-center justify-center rounded-full text-white'>
              <FaFacebookF />
            </div>
          </Link>
        </div>
        <div className='max-w-lg'>
          <p className='font-montserrat'>{desc}</p>
        </div>
      </div>
    </div>
  )
}
