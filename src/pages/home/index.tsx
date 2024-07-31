import { IHomePage } from "app/pages/home/interface";

export const HomePage = ({ movies }: IHomePage) => {
  console.log("home-movies", movies);

  return <div>Hi Home Page!!</div>;
};
