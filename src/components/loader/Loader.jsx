import { PulseLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <section className='flex items-center justify-center h-screen'>
      <PulseLoader color='#0A8300' loading margin={6} speedMultiplier={1} />
    </section>
  )
}