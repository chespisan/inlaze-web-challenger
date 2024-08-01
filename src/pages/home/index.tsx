"use client";

import { useContext, useEffect } from "react";

import {
  BannerComponent,
  CarouselComponent,
  SidebarComponent,
} from "app/components";

import styles from "app/pages/home/home.module.scss";
import { StoreContext } from "app/context/store-provider";
import { IPrincipalMovies, Genre } from "app/services/movies/interface";

interface IHomePage {
  movies: IPrincipalMovies;
  genres: Genre[];
}

export default function HomePage({ genres, movies }: IHomePage) {
  const { savePrincipalMovies } = useContext(StoreContext);
  const bannerUrl = `https://image.tmdb.org/t/p/w500/${movies?.top_rated?.results[0]?.backdrop_path}`;
  const title = movies?.top_rated?.results[0]?.title;
  const overview = movies?.top_rated?.results[0]?.overview;

  useEffect(() => {
    if (movies) {
      savePrincipalMovies(movies);
    }
  }, [movies, savePrincipalMovies]);

  return (
    <div className={styles.container}>
      <BannerComponent
        bannerUrl={bannerUrl}
        overview={overview}
        title={title}
      />
      <div className={styles.container__home}>
        <SidebarComponent genres={genres} />
        <div className={styles.container__content}>
          <CarouselComponent
            label="Popular"
            movies={movies?.popular?.results}
          />
          <CarouselComponent
            label="Now Playing"
            movies={movies?.now_playing?.results}
          />
          <CarouselComponent
            label="Upcoming"
            movies={movies?.upcoming?.results}
          />
          <CarouselComponent
            label="Top Rated"
            movies={movies?.top_rated?.results}
          />
        </div>
      </div>
    </div>
  );
}
