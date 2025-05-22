import styles from "./shows-list.module.css";
import CardComponent from "../card/card";

export default function ShowsListComponent({ shows }) {
  return (
    <div className={styles["shows-wrapper__shows-list"]}>
      {shows.map((show) => (
        <CardComponent key={show.id} data={show} />
      ))}
    </div>
  );
}
