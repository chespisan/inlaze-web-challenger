import Image from "next/image";

import { IButtonIcon } from "app/components/buttonIcon/interface";

import styles from "app/components/buttonIcon/buttonIcon.module.scss";

export const ButtonIconComponent = ({ action, icon }: IButtonIcon) => {
  return (
    <button className={styles["button-icon"]} onClick={action}>
      <Image
        src={icon}
        alt="Inlaze - Icon"
        height={30}
        width={30}
        unoptimized
      />
    </button>
  );
};
