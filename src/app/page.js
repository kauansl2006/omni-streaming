import styles from "./page.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className={styles["main__home"]}>
      <section className={styles["sec-background-image__home"]}>
        <div className={styles["container__home"]}>
          <div className={styles["subcontainer__home"]}>
            <Image
              src="/background.png"
              alt="Background Image from Application"
              width={1920}
              height={860}
              className={styles["background-image__home"]}
            />
          </div>
          <div className={styles["subcontainer__home"]}>
            <div className={styles["text-container__home"]}>
              <h1 className={styles["heading__home"]}>
                The best plataform to find movies and TV series
              </h1>
              <p className={styles["p__home"]}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                corrupti perspiciatis recusandae deleniti quaerat aperiam ipsam
                cupiditate, velit rerum voluptate! Ducimus veritatis aspernatur
                ipsa magni nam blanditiis nobis odit asperiores.
              </p>
              <button className={styles["button__home"]}>
                Start Watching Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
