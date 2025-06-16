import { useSelector, useDispatch } from 'react-redux'
import { up, down } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()

   // store에 slice가 여려개 쓸 수 있으므로 state.store에 지정한 슬라이스 key값으로 가져온다.
   // state.counter = { value: 0 }
   const count = useSelector((state) => state.counter.value)
   return (
      <div>
         <button
            onClick={() => {
               // 액션 생성자 함수(payload값)
               dispatch(up(2))
            }}
         >
            증가
         </button>
         <button
            onClick={() => {
               dispatch(down(2))
            }}
         >
            감소
         </button>
         {count}
      </div>
   )
}

export default Counter
