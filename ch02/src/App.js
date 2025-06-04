import './App.css'

function App() {
   // 6. JSX는 닫는 태그가 반드시 있어야 한다.

   return (
      <>
         <input type="text"></input>
         <input type="text" />
         {/* <input type="text" > -> 오류남 */}
      </>
   )
}

export default App
