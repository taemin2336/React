import MovieMain from './components/MovieMain'
import { Route, Routes } from 'react-router-dom'

function App() {
   return (
      <Routes>
         <Route path="/" element={<MovieMain />} />
      </Routes>
   )
}

export default App
