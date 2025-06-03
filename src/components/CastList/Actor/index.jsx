import styles from "./Actor.module.css";

import Image from "next/image";

export const Actor = ({ actor }) => {
  return (
    <div className={styles["actor__actor"]}>
      <div className={styles["actor__photo-container"]}>
        <Image
          src={"https://image.tmdb.org/t/p/original" + actor.profile_path}
          alt={`${actor.name} photo`}
          width={120}
          height={120}
          className={styles["actor__photo"]}
        />
      </div>
    </div>
  );
}
