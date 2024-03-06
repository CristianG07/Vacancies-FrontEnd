export const Button_Primary = ({ className, children, ...props }) => {
  return (
    <button
      className={`bg-green_primary hover:bg-green-600 duration-500 text-sm py-2 rounded-full font-bold text-nowrap ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
