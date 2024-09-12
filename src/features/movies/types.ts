export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  revenue: number;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MoviesState {
  allMovies: MovieResponse | null;
  nowPlaying: MovieResponse | null;
  popular: MovieResponse | null;
  topRated: MovieResponse | null;
  upcoming: MovieResponse | null;
  detail: Movie | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
