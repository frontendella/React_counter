
import './App.css';

import { useState } from 'react';

export default function App() {

  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrease = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1
      )
    }
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={decrease}>–</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={increase}>+</button>
    </div>
  )
}

