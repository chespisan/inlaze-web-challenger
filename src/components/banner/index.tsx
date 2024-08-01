import Image from "next/image";

import styles from "app/components/banner/banner.module.scss";

import { IbannerComponent } from "./interface";

import iconFav from "/public/assets/Fav.svg";
import iconShare from "/public/assets/Share.svg";
import iconBock from "/public/assets/book-check.svg";

export const BannerComponent = ({
  bannerUrl,
  overview,
  title,
}: IbannerComponent) => {
  return (
    <div className={styles.banner}>
      <Image
        className={styles.banner__img}
        src={bannerUrl}
        alt=""
        width={0}
        height={0}
        unoptimized
      />
      <div className={styles.banner__info}>
        <h1>{title}</h1>
        <p className={styles.banner__overview}>{overview}</p>
      </div>
      <div className={styles["banner__footer-container"]}>
        <ul className={styles.banner__menu}>
          <li>Trama</li>
          <li>Cast</li>
          <li>Gallery</li>
          <li>Info</li>
        </ul>
        <div className={styles.banner__bullets}></div>
        <div className={styles.banner__actions}>
          <Image src={iconFav} alt="" width={20} height={20} unoptimized />
          <Image src={iconBock} alt="" width={20} height={20} unoptimized />
          <Image src={iconShare} alt="" width={20} height={20} unoptimized />
        </div>
      </div>
      <div className={styles.banner__footer}></div>
    </div>
  );
};
