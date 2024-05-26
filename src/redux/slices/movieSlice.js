import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchMovies from "../../api/movieAPI";

export const fetchMoviesAsync = createAsyncThunk(
  "movies/fetchMovies",
  async () => {
    const response = await fetchMovies();
    return response;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default moviesSlice.reducer;
