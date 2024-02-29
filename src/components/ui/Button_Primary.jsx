export const Button_Primary = ({className, children}) => {
  return (
    <button className={`bg-green_primary text-sm py-2 px-5 rounded-full font-bold text-nowrap ${className}`}>{children}</button>
  )
}