function App() {
   const type = 'radio'
   const str = 'string'
   const number = 0
   return (
      <>
         <input type="text" value="리엑트" disabled={true} /> <br />
         <input type="text" value="자바스크립트" disabled={str && number} />
         <br />
         <input type={type} checked={false} /> 선택1
         <br />
         <input type={type} checked={str || number} /> 선택2
      </>
   )
}

export default App
