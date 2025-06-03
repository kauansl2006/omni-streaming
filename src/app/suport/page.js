import styles from "./page.module.css";

import Image from "next/image";

import { Banner } from "@/components/Banner";
import { FaqList } from "@/components/FaqList";
import { SuportForm } from "@/components/SuportForm";

export default function SuportPage() {
  return (
    <main className={styles["suport__main"]}>
      <section id="suport-section" className={styles["suport__suport-section"]}>
        <div className={styles["suport__suport-container"]}>
          <div className={styles["suport__sub-container"]}>
            <div className={styles["suport__text-container"]}>
              <h1 className={styles["suport__heading"]}>
                Welcome to our support page!
              </h1>
              <p className={styles["suport__text"]}>
                We&apos;re here to help you with any problems you may be having
                with our product.
              </p>
            </div>
            <div className={styles["suport__image-container"]}>
              <Image
                src="/background.png"
                alt="Movies image"
                width={1500}
                height={1500}
                className={styles["suport__image"]}
              />
            </div>
          </div>

          <SuportForm />
        </div>
      </section>

      <section id="faq-section" className={styles["suport__faq-section"]}>
        <FaqList />
      </section>

      <section id="banner-section" className={styles["suport__banner-section"]}>
        <Banner />
      </section>
    </main>
  );
}
