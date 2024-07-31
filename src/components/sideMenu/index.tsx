import { ISideMenu } from "app/components/sideMenu/interface";

import styles from "app/components/sideMenu/sideMenu.module.scss";

export const SideMenuComponent = ({ isShowSide }: ISideMenu) => {
  return (
    <div
      className={`
  ${styles["side-menu"]}
  ${isShowSide ? styles["side-menu--show"] : ""}
  `}
    >
      <ul>
        <li className={styles["side-menu__list"]}>Popular</li>
        <li className={styles["side-menu__list"]}>Now Playing</li>
        <li className={styles["side-menu__list"]}>Upcoming</li>
        <li className={styles["side-menu__list"]}>Top Rated</li>
        <li className={styles["side-menu__list"]}>Favorites</li>
        <li className={styles["side-menu__list"]}>Saved</li>
      </ul>
    </div>
  );
};
