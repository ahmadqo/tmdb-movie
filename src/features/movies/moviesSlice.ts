import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MoviesState } from "./types";
import { tmdbApi } from "../../utils/api/tmdbApi";

const initialState: MoviesState = {
  allMovies: [],
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: [],
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (endpoint: string) => {
    const { data } = await tmdbApi.get(endpoint);
    return data?.results;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.warn("action", action);
        if (action.meta.arg.includes("popular")) {
          state.popular = action.payload;
        } else if (action.meta.arg.includes("now_playing")) {
          state.nowPlaying = action.payload;
        } else if (action.meta.arg.includes("top_rated")) {
          state.topRated = action.payload;
        } else if (action.meta.arg.includes("upcoming")) {
          state.upcoming = action.payload;
        } else {
          state.allMovies = action.payload;
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error";
      });
  },
});

export default moviesSlice.reducer;
