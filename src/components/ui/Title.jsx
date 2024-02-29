export const Title = ({className, children}) => {
  return (
    <h3 className={`font-semibold text-3xl text-dark_blue ${className}` }>{children}</h3>
  )
}