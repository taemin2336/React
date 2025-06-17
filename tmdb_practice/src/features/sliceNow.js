import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getNow } from '../api/movieApi'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getNow()
   return response.data.results
})

const movieSlice = createSlice({
   name: 'movie',
   initialState: {
      movie: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movie = action.payload
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieSlice.reducer
