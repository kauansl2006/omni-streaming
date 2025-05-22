import styles from "./movies-list.module.css";
import CardComponent from "../card/card";

export default function MoviesListComponent({ movies }) {
  return (
    <div className={styles["movies-wrapper__movies-list"]}>
      {movies.map((movie) => (
        <CardComponent key={movie.id} data={movie} />
      ))}
    </div>
  );
}
