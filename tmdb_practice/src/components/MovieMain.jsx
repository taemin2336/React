import { useDispatch, useSelector } from 'react-redux'
import movieSlice, { fetchMovies } from '../features/sliceNow'
import { useEffect } from 'react'

function MovieMain() {
   const dispatch = useDispatch()
   const { movie, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchMovies())
   }, [dispatch])

   if (loading) return <p>로딩중입니다.</p>
   if (error) return <p>에러입니다. {error}</p>
   return (
      <div>
         <h1>지금 상영중인 영화입니다.</h1>
         <ul>
            {movie.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MovieMain
