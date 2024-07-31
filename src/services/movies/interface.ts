export interface IPrincipalMovies {
  popular: IPopular;
  now_playing: INowPlaying;
  upcoming: IUpcoming;
  top_rated: ITopRated;
}

export interface IPopular {
  page: number;
  results: IPopularResult[];
  total_pages: number;
  total_results: number;
}

export interface IPopularResult {
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
  vote_count: number;
}

export interface INowPlaying {
  dates: INowPlayingDates;
  page: number;
  results: INowPlayingResult[];
  total_pages: number;
  total_results: number;
}

export interface INowPlayingDates {
  maximum: string;
  minimum: string;
}

export interface INowPlayingResult {
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
  vote_count: number;
}

export interface IUpcoming {
  dates: IUpcomingDates;
  page: number;
  results: IUpcomingResult[];
  total_pages: number;
  total_results: number;
}

export interface IUpcomingDates {
  maximum: string;
  minimum: string;
}

export interface IUpcomingResult {
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
  vote_count: number;
}

export interface ITopRated {
  page: number;
  results: ITopRatedResult[];
  total_pages: number;
  total_results: number;
}

export interface ITopRatedResult {
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
  vote_count: number;
}
