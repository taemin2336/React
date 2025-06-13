import { useDispatch, useSelector } from 'react-redux'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => state.value) // state = { value: 0 }

   return (
      <div>
         <button
            onClick={() => {
               dispatch({ type: 'up', step: 1 })
            }}
         >
            +
         </button>
         {count}
      </div>
   )
}

export default Counter
