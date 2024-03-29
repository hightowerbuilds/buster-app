
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{
            height: 75,
            width: 75,
            borderRadius: 10
          }}
        >
          Increment
        </button>
        <br />  
        <span style={{
          fontSize: 320,
          fontFamily: 'monospace'
        }}>{count}</span>
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{
            height: 75,
            width: 75,
            borderRadius: 10,
         
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}