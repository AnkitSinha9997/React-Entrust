import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((prev) => prev + 1)
  }
  return (
    <>
      <button onClick={handleClick}>Click {count}</button>
    </>
  )
}
export default Counter
