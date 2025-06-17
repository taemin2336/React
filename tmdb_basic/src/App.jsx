// import MovieList from './components/NonRedux/MovieList'
// import MovieUpcoming from './components/NonRedux/MovieUpComing'
import { Route, Routes } from 'react-router-dom'
import MovieDetail from './components/UseRedux/MovieDetail'
import NotFound from './components/UseRedux/NotFound'
import MovieList from './components/UseRedux/MovieList'

function App() {
   //  return <MovieList></MovieList>
   // return <MovieUpcoming></MovieUpcoming>
   return (
      <Routes>
         <Route path="/" element={<MovieList />} />
         <Route path="/detail/:movieId" element={<MovieDetail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
