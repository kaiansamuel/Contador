import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  const handleMinus = () => {
    setCount(count -1);
  }

  const handleMore = () => {
    setCount(count + 1);
  }

  return (
    <div className='count'>
      <button onClick={handleMinus}>-</button>
      <div>{count}</div>
      <button onClick={handleMore}>+</button>
    </div>
  )
}

export default App;
