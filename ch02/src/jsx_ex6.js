function App() {
   // 4. CSS 인라인 스타일 적용
   const name = '리액트'
   //  json 객체로 지정, CSS 속성은 카멜표기법, 속성값은 문자열
   //  const style = {
   //     backgroundColor: 'red',
   //     color: 'black',
   //     fontSize: '48px',
   //     padding: 16,
   //  }

   //  혹은 json 객체 자체를 style에 지정
   return (
      <div
         style={{
            backgroundColor: 'red',
            color: 'black',
            fontSize: '48px',
            padding: 16,
         }}
      >
         {name}
      </div>
   )
}

export default App
