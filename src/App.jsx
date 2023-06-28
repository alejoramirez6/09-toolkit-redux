
import { useDispatch, useSelector } from 'react-redux'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter/CounterSlice'
import { useState } from 'react'

function App() {

  const {counter} = useSelector( state => state.counter )
  const dispatch = useDispatch(); 

/*   const [incrementValue, setIncrementValue] = useState(0);

  const handleIncrementBy = () => {
    dispatch(incrementBy(incrementValue));
  }; */


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is { counter }</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() ) }>
          Increment
        </button>
        <button onClick={() => dispatch( decrement() ) }>
          Decrement
        </button>
 {/*        <input
          type="number"
          value={incrementValue}
          onChange={e => setIncrementValue(Number(e.target.value))}
        />
        <button onClick={handleIncrementBy}>
          IncrementBy
        </button> */}
        <button onClick={() => dispatch( incrementBy(2) ) }>
          Increment by 2 
        </button>

      </div>
    </>
  )
}

export default App
