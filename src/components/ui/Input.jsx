export const Input = ({className, ...props}) => {
  return (
    <>
      <input className={`block w-full bg-ligth_gray rounded-full py-3 px-4 font-montserrat placeholder:text-dark_blue text-dark_blue focus:outline focus:outline-2 focus:outline-green_secondary ${className}`} {...props} />
    </>
  )
}