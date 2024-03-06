import { useState } from 'react'

const MIN = 0
const MAX = 5000

export const PriceRange = () => {
  const [values, setValues] = useState([MIN, MAX])

  console.log('values: ', values)
  return (
    <div>
      <div>
        <span className="values">$0 - $5000</span>
      </div>
    </div>
  )
}