import { getUpcomingMovies } from '../../api/tmdbApi'
import { useEffect, useState } from 'react'

function MovieUpcoming() {
   const [movieList, setMovieList] = useState('')
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState('')

   useEffect(() => {
      const fetchMovies = async () => {
         try {
            const movies = await getUpcomingMovies()
            setMovieList(movies.data.results)
         } catch (error) {
            setError(error.message)
         } finally {
            setLoading(false)
         }
      }
      fetchMovies()
   }, [])

   if (error) {
      return <p>Error: {error.message}</p>
   }
   if (loading) {
      return <p>로딩중..</p>
   }

   return (
      <div>
         <h1>개봉예정 영화 목록</h1>
         <ul>
            {movieList.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MovieUpcoming
