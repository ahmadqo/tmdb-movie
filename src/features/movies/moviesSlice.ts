import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MoviesState } from "./types";
import { tmdbApi } from "../../utils/api/tmdbApi";

const initialState: MoviesState = {
  searchMovies: null,
  nowPlaying: null,
  popular: null,
  topRated: null,
  upcoming: null,
  detail: null,
  status: "idle",
  error: null,
  loadingUpComing: false,
  loadingTrending: false,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (endpoint: string) => {
    const { data } = await tmdbApi.get(endpoint);
    return data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = "loading";
        if (action.meta.arg.includes("upcoming")) {
          state.loadingUpComing = true;
        }
        if (action.meta.arg.includes("top_rated")) {
          state.loadingTrending = true;
        }
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loadingUpComing = false;
        state.loadingTrending = false;

        if (action.meta.arg.includes("popular")) {
          state.popular = action.payload;
        } else if (action.meta.arg.includes("now_playing")) {
          state.nowPlaying = action.payload;
        } else if (action.meta.arg.includes("top_rated")) {
          state.topRated = action.payload;
        } else if (action.meta.arg.includes("upcoming")) {
          state.upcoming = action.payload;
        } else if (action.meta.arg.includes("search")) {
          state.searchMovies = action.payload;
        } else {
          state.detail = action.payload;
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error";
        state.loadingUpComing = false;
        state.loadingTrending = false;
      });
  },
});

export default moviesSlice.reducer;
