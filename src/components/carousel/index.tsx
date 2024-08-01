import Image from "next/image";

import styles from "app/components/carousel/carousel.module.scss";
import { formatDate } from "app/utils/formDate";

import { ICarouselComponent } from "app/components/carousel/interface";

export const CarouselComponent = ({ label, movies }: ICarouselComponent) => {
  return (
    <div className={styles.carousel}>
      <h2 className={styles.carousel__title}>{label}</h2>
      <div className={styles.carousel__container}>
        <div className={styles.carousel__content}>
          {movies?.map((item) => (
            <div key={item.id} className={styles.carousel__card}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt=""
                width={180}
                height={200}
                unoptimized
              />
              <div className={styles.carousel__info}>
                <h3>{item.title}</h3>
                <p className={styles.carousel__date}>
                  {formatDate(item.release_date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
