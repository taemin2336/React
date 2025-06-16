// import ReducerCounter1 from './ReducerCounter1'
// import ReducerCounter2 from './ReducerCounter2'
import { createStore } from 'redux'
import './App.css'
import { Provider, useSelector, useDispatch } from 'react-redux'

// reducer 함수: state를 바꿔주는 역할
function reducer(currentState, action) {
   // action = {type: 'PLUS}

   // state가 정의되지 않았으면 state를 만들어줌
   if (currentState === undefined) {
      return { number: 1 } // number = 1 state를 만들어준다.
   }

   const newState = { ...currentState }

   if (action.type === 'PLUS') {
      newState.number++
   }
   return newState // return 해주는 값으로 state를 업데이트
}

// store: reducer를 저장하는 창고
const store = createStore(reducer)

function Left1() {
   return (
      <div>
         <h1>Left1</h1>
         <Left2 />
      </div>
   )
}

function Left2() {
   return (
      <div>
         <h1>Left2</h1>
         <Left3 />
      </div>
   )
}

function Left3() {
   // useSelector: state값을 무선연결해서 가져오기 위한 함수
   // 처음 사이트 접속시 useSelector에서 reducerf를 실행시켜 state값을 가져온다.
   const number = useSelector((state) => {
      console.log(state)
      return state.number
   })
   return (
      <div>
         <h1>Left3: {number}</h1>
      </div>
   )
}

function Right1() {
   return (
      <div>
         <h1>Right1</h1>
         <Right2 />
      </div>
   )
}

function Right2() {
   return (
      <div>
         <h1>Right2</h1>
         <Right3 />
      </div>
   )
}

function Right3() {
   // 이벤트가 발생했을때 요청 (action)을 받아들여서 reducer에게 전달
   const dispatch = useDispatch()
   return (
      <div>
         <h1>Right3</h1>
         <input
            type="button"
            value="+"
            onClick={() => {
               dispatch({ type: 'PLUS' })
            }}
         />
      </div>
   )
}

function App() {
   return (
      <div className="container">
         <h1>Root</h1>
         <div className="grid">
            {/* Provider: store에 저장된 reducer, state 제공하는 역할을 한다. 제공하고 싶은 컴포넌트를 감싸주면 된다.*/}
            {/* Left1, Right1 컴포넌트에서 store에 저장된 reducer와 state를 사용할 수 있다. */}
            <Provider store={store}>
               <Left1 />
               <Right1 />
            </Provider>
         </div>
         {/* <ReducerCounter1></ReducerCounter1> */}
         {/* <ReducerCounter2></ReducerCounter2> */}
      </div>
   )
}

export default App
