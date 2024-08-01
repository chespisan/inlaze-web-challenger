export interface IGenericResult {
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

export interface IGenericDates {
  maximum: string;
  minimum: string;
}

export interface IPopular {
  page: number;
  results: IGenericResult[];
  total_pages: number;
  total_results: number;
}

export interface INowPlaying {
  dates: IGenericDates;
  page: number;
  results: IGenericResult[];
  total_pages: number;
  total_results: number;
}

export interface IUpcoming {
  dates: IGenericDates;
  page: number;
  results: IGenericResult[];
  total_pages: number;
  total_results: number;
}

export interface ITopRated {
  page: number;
  results: IGenericResult[];
  total_pages: number;
  total_results: number;
}

export interface IPrincipalMovies {
  popular: IPopular;
  now_playing: INowPlaying;
  upcoming: IUpcoming;
  top_rated: ITopRated;
}

export interface Genre {
  value: string;
  label: string;
}

export interface GenreEntity {
  genres: Genre[];
}
