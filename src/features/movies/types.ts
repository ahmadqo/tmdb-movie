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
}

export interface MoviesState {
  allMovies: Movie[];
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
