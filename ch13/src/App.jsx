import { createContext } from 'react'
import './App.css'
import { useContext } from 'react'

const themeDefault = { border: '10px solid skyblue' }

// 데이터를 공유하기 위한 Context생성
const themeContext = createContext(themeDefault)

function App() {
   const theme = useContext(themeContext)
   return (
      <themeContext.Provider value={{ border: '10px solid blue' }}>
         <div style={theme}>
            <h1>Sub1</h1>
            <Sub1 />
         </div>
      </themeContext.Provider>
   )
}

function Sub1() {
   const theme = useContext(themeContext)
   return (
      // themeContext.Provider -> 모든 하위 컴포넌트에 value 값 전달
      <themeContext.Provider value={{ border: '10px solid green' }}>
         <div style={theme}>
            <h1>Sub1</h1>
            <Sub2 />
         </div>
      </themeContext.Provider>
   )
}

function Sub2() {
   const theme = useContext(themeContext)
   return (
      <div style={theme}>
         <h1>Sub2</h1>
         <Sub3 />
      </div>
   )
}

function Sub3() {
   const theme = useContext(themeContext)
   return (
      <div style={theme}>
         <h1>Sub3</h1>
      </div>
   )
}

export default App
