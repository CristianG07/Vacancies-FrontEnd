
export const StepsMobile = () => {
  return (
    <section className='block lg:hidden w-[90%] mx-auto'>
      <div className='flex justify-center gap-5 md:gap-14 lg:gap-5 h-[750px]'>
        <div className="h-full">
          <div className='flex flex-col h-full justify-between relative mx-auto items-center py-3 after:content-[""] after:absolute after:-z-10 after:w-[2px] after:bg-green_secondary after:h-[90%]'>
            <div className='steps relative outline outline-8 outline-white after:content-[""] after:absolute after:bg-green_primary after:w-2 after:h-2 after:rounded-full after:top-full after:mt-1'>
              <p>1</p>
            </div>
            <div className='steps relative outline outline-8 outline-white before:content-[""] before:absolute before:bg-green_primary before:w-2 before:h-2 before:rounded-full before:top-full before:mt-1 after:content-[""] after:absolute after:bg-green_primary after:w-2 after:h-2 after:rounded-full after:bottom-full after:mb-1 font-montserrat'>
              <p className=''>2</p>
            </div>
            <div className='steps relative outline outline-8 outline-white before:content-[""] before:absolute before:bg-green_primary before:w-2 before:h-2 before:rounded-full before:top-full before:mt-1 after:content-[""] after:absolute after:bg-green_primary after:w-2 after:h-2 after:rounded-full after:bottom-full after:mb-1 font-montserrat'>
              <p className=''>3</p>
            </div>
            <div className='steps relative outline outline-8 outline-white before:content-[""] before:absolute before:bg-green_primary before:w-2 before:h-2 before:rounded-full before:top-full before:mt-1 after:content-[""] after:absolute after:bg-green_primary after:w-2 after:h-2 after:rounded-full after:bottom-full after:mb-1 font-montserrat'>
              <p className=''>4</p>
            </div>
            <div className='steps relative outline outline-8 outline-white before:content-[""] before:absolute before:bg-green_primary before:w-2 before:h-2 before:rounded-full before:bottom-full before:mb-1 font-montserrat'>
              <p className=''>5</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col text-center justify-center gap-[7.5rem] font-medium font-montserrat text-balance max-w-48'>
          <div className=''>
            <p className=''>Поиск вакансий за вашими критериями</p>
          </div>
          <div className=''>
            <p className=''>Присылаем вам варианты</p>
          </div>
          <div className=''>
            <p className=''>Выбор подходящей вакансии</p>
          </div>
          <div className=''>
            <p className=''>Связь с работодателем</p>
          </div>
          <div className='px-3'>
            <p className=''>Заключение договора</p>
          </div>
        </div>
      </div>
    </section>
  )
}