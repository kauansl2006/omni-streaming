import styles from "./page.module.css";

import { SubscriptionList } from "@/components/Home/SubscriptionList";
import { Banner } from "@/components/Home/Banner";
import { SubscriptionTable } from "@/components/SubscriptionTable";

export default function SubscriptionPage() {
  return (
    <main className={styles["subscription__main"]}>
      <section
        id="subscription-section"
        className={styles["subscription__subscription-section"]}
      >
        <SubscriptionList />
      </section>

      <section
        id="comparasion-section"
        className={styles["subscription__comparasion-section"]}
      >
        <SubscriptionTable />
      </section>

      <section
        id="banner-section"
        className={styles["subscription__banner-section"]}
      >
        <Banner />
      </section>
    </main>
  );
}
