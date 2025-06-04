function App() {
   const name = undefined // false
   // 3. || 연산
   //  앞이 true면 앞을 반환하고 앞이 false면 뒤의 값을 반환
   return <div>{name || '리엑트'}</div>
}

export default App
