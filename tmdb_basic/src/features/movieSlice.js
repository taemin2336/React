import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies, getMovieDetails } from '../api/tmdbApi'

// createAsyncThunk: 비동기 thunk 액션 -> 영화 목록을 API로부터 가져옴
// createAsyncThunk(type명, 비동기 함수)
// 비동기 함수에서 API를 call하는 함수 실행
// type명은 'slice의 이름/변수명'으로 짓는다.

// 인기영화 목록 가져오기
// fetchMovies(): 액션 생성자 함수역할
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getMovies()
   return response.data.results
})

// 영화상세 정보 가져오기
export const fetchMoviesDetails = createAsyncThunk('movies/fetchMoviesDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   console.log(response)
   return response.data
})

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [], // 인기영화목록
      movieDetails: null,
      loading: false, // 로딩여부
      error: null, // 에러메세지
   },
   reducers: {},
   //    extraReducers: 비동기 액션이 발생했을때 satte를 바꿔줌
   extraReducers: (builder) => {
      builder
         //   데이터를 가져오는 동안
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(fetchMoviesDetails.pending, (state) => {
            state.loading = true
            state.error = null // 다른 액션 생성자 함수에서 에러 발생시 에러 메세지가 남아있는 경우를 대비해 초기화
         })
         .addCase(fetchMoviesDetails.fulfilled, (state, action) => {
            state.loading = false
            // action.payload는 fetchMovieDetails()에서 리턴해주는 값
            state.movieDetails = action.payload
         })
         .addCase(fetchMoviesDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieSlice.reducer // 리듀서 함수를 내보냄
