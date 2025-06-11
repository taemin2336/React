import style, { styled } from 'styled-components'

// styled-components는 스타일이 있는 컴포넌트(변수명 대문자)
// 벡틱안에 css 작성(css 코드와 똑같이 작성)
const StyledButton = style.button`
color: white;
background-color: green;
`
// 감싸기 기능을 이용해서 기존의 StyledButton의 성질을 그대로 가져온다.
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`
// 리엑트 전통방식으로 만든 컴포넌트
const ReactButton = (props) => {
   return <button>{props.children}</button>
}

// ReactButton의 성질을 그대로 가져오면서 폰트사이즈 50px의 버튼을 만들고 싶다 -> 적용X
const ReactLargeButton = styled(ReactButton)`
   font-size: 150px;
`

function ReactButton4() {
   return (
      <>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
      </>
   )
}

export default ReactButton4
