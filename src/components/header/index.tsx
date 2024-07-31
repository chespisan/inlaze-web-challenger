"use client";
import { useState } from "react";
import Image from "next/image";

import { ButtonIconComponent } from "app/components/buttonIcon";
import { SideMenuComponent } from "app/components/sideMenu";

import styles from "app/components/header/header.module.scss";

import iconLogo from "../../../public/assets/Logo.svg";
import iconSign from "../../../public/assets/Signin.svg";
import iconSun from "../../../public/assets/Sun.svg";
import iconBurgerMenu from "../../../public/assets/BurgerMenu.svg";

export const HeaderComponent = () => {
  const [isShowSide, setIsShowSide] = useState(false);

  const showMenu = () => {
    setIsShowSide(!isShowSide);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__menu}>
          <ButtonIconComponent icon={iconBurgerMenu} action={showMenu} />
        </div>

        <div className={styles.header__section}>
          <Image src={iconLogo} alt="Inlaze - Logo" unoptimized />
          <ul className={styles.header__actions}>
            <li className={styles.header__list}>Popular</li>
            <li className={styles.header__list}>Now Playing</li>
            <li className={styles.header__list}>Upcoming</li>
            <li className={styles.header__list}>Top Rated</li>
            <li className={styles.header__list}>Favorites</li>
            <li className={styles.header__list}>Saved</li>
          </ul>
        </div>

        <div>
          <Image src={iconSun} alt="Inlaze - Icon" unoptimized />
          <Image src={iconSign} alt="Inlaze - Icon" unoptimized />
        </div>
      </div>

      <SideMenuComponent isShowSide={isShowSide} />
    </>
  );
};
