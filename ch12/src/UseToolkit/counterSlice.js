import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const counterSlice = createSlice({
   name: 'counterSlice', // slice 이름(store 안에 slice가 여러개가 될 수 있으므로 구분하는 이름 지정)
   initialState: { value: 0 }, // state의 초기값
   // reducer: state를 변경
   reducers: {
      up: (state, action) => {
         // 0 = 0 + 2
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default counterSlice.reducer // 리듀서를 내보냄

export const { up, down } = counterSlice.actions // reducers 안에 정의한 up, down 함수를 내보냄
