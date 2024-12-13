"use client";

import { ChangeEvent, useState } from "react";

import styles from "app/components/sidebar/sidebar.module.scss";
import { useDebouncedValue } from "app/hooks";
import { InputComponent } from "../input";
import { SelectComponent } from "../select";
import { ISidebarComponent } from "./interface";

const filterSort = [
  {
    label: "Categories",
    value: "categories",
  },
  {
    label: "Popularity Ascending",
    value: "popularity_asc",
  },
  {
    label: "Popularity Descending",
    value: "popularity_desc",
  },
  {
    label: "Title A-Z",
    value: "title_asc",
  },
  {
    label: "Release Date Ascending",
    value: "release_date_asc",
  },
  {
    label: "Release Date Descending",
    value: "release_date_desc",
  },
];

export const SidebarComponent = ({ genres }: ISidebarComponent) => {
  const [inputValue, setInputValue] = useState<string>("");

  const debouncedSearch = useDebouncedValue(inputValue, 1000);

  const onChangeInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__box}>
        <h4 className={styles.sidebar__label}>Search</h4>
        <InputComponent onChange={onChangeInputSearch} />
      </div>
      <div className={styles.sidebar__box}>
        <h4 className={styles.sidebar__label}>Sort By</h4>
        <SelectComponent options={filterSort} />
      </div>

      <div className={styles.sidebar__box}>
        <h4 className={styles.sidebar__label}>Genres</h4>
        <SelectComponent options={genres} />
      </div>
    </div>
  );
};
