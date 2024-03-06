import { useCallback, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import './PriceRange.css'

export const PriceRange = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal, onChange])

  return (
    <div className='w-full'>
      <div className='relative '>
        <input
          type='range'
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1)
            setMinVal(value)
            minValRef.current = value
          }}
          className='thumb thumb--left'
          style={{ zIndex: minVal > max - 100 && '5' }}
        />
        <input
          type='range'
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1)
            setMaxVal(value)
            maxValRef.current = value
          }}
          className='thumb thumb--right'
        />
      </div>

      <div className='relative w-full font-montserrat'>
        <div className='absolute rounded h-0.5 bg-[#D9E3D8] w-full' />
        <div ref={range} className='absolute h-0.5 rounded bg-[#D9E3D8]' />
        <div className='absolute mt-3.5 left-0'>{minVal}$</div>
        <div className='absolute mt-3.5 -right-3'>{maxVal}$</div>
      </div>
    </div>
  )
}

PriceRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}
