import Image from "next/image";

import styles from "app/components/input/input.module.scss";

import iconSearch from "../../../public/assets/Search.svg";
import { IInputComponent } from "./interface";

export const InputComponent = ({ onChange }: IInputComponent) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.container__input}
        placeholder="Keywords"
        onChange={onChange}
      />
      <Image src={iconSearch} alt="" width={12} height={12} unoptimized />
    </div>
  );
};
