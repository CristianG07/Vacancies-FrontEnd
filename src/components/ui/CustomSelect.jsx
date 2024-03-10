import { useState } from 'react'
import { arrow_down } from '../../utils/image'
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler'

export const CustomSelect = ({ options, defaulValue, onSelectChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggleOptions = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    onSelectChange(option)
  }

  return (
    <div className='relative'>
      <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
        <div
          className={` ${
            isOpen
              ? 'border border-green_secondary rounded-t-2xl justify-between'
              : 'border border-transparent rounded-full'
          } bg-light_gray text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 flex items-center w-full py-2.5 cursor-pointer bg-ligth_gray select-none px-5 min-w-36`}
          onClick={toggleOptions}
        >
          {selectedOption || defaulValue}
          <div className='w-3.5'>
            <img src={arrow_down} alt='arrow_down' />
          </div>
        </div>
      {isOpen && (
        <div className='absolute z-10 w-full bg-ligth_gray border border-green_secondary rounded-b-2xl shadow-md pt-2 pb-5 min-w-36'>
          {options.map((option, index) => (
            <div
              key={index}
              className='px-5 pt-2 cursor-pointer hover:bg-gray-100 select-none'
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      </OutsideClickHandler>
    </div>
  )
}
