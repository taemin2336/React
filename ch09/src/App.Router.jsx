import { Route, Routes, Link, NavLink } from 'react-router-dom'
import './App.css'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home...
      </div>
   )
}

var contents = [
   { id: 1, title: 'HTML', description: 'HTML is...' },
   { id: 2, title: 'JS', description: 'JS is...' },
   { id: 3, title: 'React', description: 'React is...' },
]

function Topic() {
   return (
      <div>
         <h3>Topic</h3>
      </div>
   )
}

function Topics() {
   var lis = []
   for (var i = 0; i < contents.length; i++) {
      lis.push(
         <li key={contents[i].id}>
            <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
         </li>
      )
   }

   return (
      <div>
         <h1>Topics</h1>
         <ul>{lis}</ul>

         {/* 주소의 경로에 따라 어떤 컴포넌트를 보여줄지 결정 */}
         <Routes>
            {/* <Route path="/1" element={'HTML is...'} />
            <Route path="/2*" element={'JS is...'} />
            <Route path="/3" element={'React is...'} /> */}

            <Route path="/:topic_id" element={<Topic />} />

            {/* 지정한 경로 외에 다른 경로는 모두 Not Found를 보여준다. */}
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}
function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact...
      </div>
   )
}

/*
a태그로 링크 이동시 페이지가 전체 새로고침 되면서 모든 DOM들이 다시 랜더링이 된다.

<Link>컴포넌트로 이동시 바뀐 부분의 DOM만 리렌더링이 된다.
-> SPA 방식
-> 리엑트는 기본적으로 SPA 방식으로 동작하므로 <Link> 컴포넌트 사용을 추천
*/

function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/*" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

export default App
