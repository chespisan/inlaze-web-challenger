"use client";

import {
  IOptionsSelect,
  ISelectComponent,
} from "app/components/select/interface";

import styles from "app/components/select/select.module.scss";

import iconArrowDown from "../../../public/assets/arrow-down.svg";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Genre } from "app/services/movies/interface";
import { StoreContext } from "app/context/store-provider";

export const SelectComponent = ({ options }: ISelectComponent) => {
  const { filterBySort } = useContext(StoreContext);
  const [optionSelect, setOptionSelect] = useState<IOptionsSelect>();
  const [isShowOptions, setIsShowOptions] = useState(false);

  const showBoxOptions = () => {
    setIsShowOptions(!isShowOptions);
  };

  const showOptions = (option: IOptionsSelect | Genre) => {
    setOptionSelect(option);
    setIsShowOptions(false);
  };

  useEffect(() => {
    if (optionSelect) {
      filterBySort(optionSelect.value);
    }
  }, [optionSelect]);

  return (
    <div className={styles.container}>
      <div className={styles.container__select} onClick={showBoxOptions}>
        {!optionSelect ? (
          <hr className={styles.container__bar} />
        ) : (
          <p>{optionSelect.label}</p>
        )}
        <Image src={iconArrowDown} alt="" width={10} height={10} unoptimized />
      </div>
      <ul
        className={`
        ${styles.container__box}
        ${isShowOptions ? styles["container__box--open"] : ""}
      `}
      >
        {options?.map((option) => (
          <li
            key={option.label}
            className={styles.container__list}
            onClick={() => showOptions(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
