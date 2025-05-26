import styles from "./page.module.css";

import { SubscriptionList } from "@/components/Home/SubscriptionList";
import { Banner } from "@/components/Home/Banner";

export default function SubscriptionPage() {
  return (
    <main className={styles["main__subscription"]}>
      <SubscriptionList id="plans-section" />

      <section
        id="comparasion-section"
        className={styles["comparasion-section__subscription"]}
      >
        <div className={styles["text-container__subscription"]}>
          <h1 className={styles["heading__subscription"]}>
            Compare our plans and find the right one for you
          </h1>
          <p className={styles["text__subscription"]}>
            omni+ offers three different plans to fit your needs: Basic,
            Standard, and Premium. Compare the features of each plan and choose
            the one that&apos;s right for you.
          </p>
        </div>
        <div className={styles["table-container__subscription"]}>
          <table className={styles["table__subscription"]}>
            <thead className={styles["thead__subscription"]}>
              <tr className={styles["tr__subscription"]}>
                <th className={styles["th__subscription"]}>Features</th>
                <th className={styles["th__subscription"]}>Basic</th>
                <th className={styles["th__subscription"]}>Standard</th>
                <th className={styles["th__subscription"]}>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles["tr__subscription"]}>
                <td className={styles["td__subscription"]}>Price</td>
                <td className={styles["td__subscription"]}>$9.99/Month</td>
                <td className={styles["td__subscription"]}>$12.99/Month</td>
                <td className={styles["td__subscription"]}>$14.99/Month</td>
              </tr>
              <tr className={styles["tr__subscription"]}>
                <td className={styles["td__subscription"]}>Content</td>
                <td className={styles["td__subscription"]}>
                  Access to a wide selection of movies and shows, including some
                  new releases
                </td>
                <td className={styles["td__subscription"]}>
                  Access to a wider selection of movies and shows, including
                  most new releases and exclusive content
                </td>
                <td className={styles["td__subscription"]}>
                  Access to a widest selection of movies and shows, including
                  all new releases and Offline Viewing
                </td>
              </tr>
              <tr className={styles["tr__subscription"]}>
                <td className={styles["td__subscription"]}>Devices</td>
                <td className={styles["td__subscription"]}>
                  Watch on one device simultaneously
                </td>
                <td className={styles["td__subscription"]}>
                  Watch on Two device simultaneously
                </td>
                <td className={styles["td__subscription"]}>
                  Watch on Four device simultaneously
                </td>
              </tr>
              <tr className={styles["tr__subscription"]}>
                <td className={styles["td__subscription"]}>Free Trail</td>
                <td className={styles["td__subscription"]}>7 Days</td>
                <td className={styles["td__subscription"]}>7 Days</td>
                <td className={styles["td__subscription"]}>7 Days</td>
              </tr>
              <tr className={styles["tr__subscription"]}>
                <td className={styles["td__subscription"]}>Cancel Anytime</td>
                <td className={styles["td__subscription"]}>Yes</td>
                <td className={styles["td__subscription"]}>Yes</td>
                <td className={styles["td__subscription"]}>Yes</td>
              </tr>
              <tr className={styles["tr__subscription"]}>
                <td className={styles["td__subscription"]}>HDR</td>
                <td className={styles["td__subscription"]}>No</td>
                <td className={styles["td__subscription"]}>Yes</td>
                <td className={styles["td__subscription"]}>Yes</td>
              </tr>
              <tr className={styles["tr__subscription"]}>
                <td className={styles["td__subscription"]}>Dolby Atmos</td>
                <td className={styles["td__subscription"]}>No</td>
                <td className={styles["td__subscription"]}>Yes</td>
                <td className={styles["td__subscription"]}>Yes</td>
              </tr>
              <tr className={styles["tr__subscription"]}>
                <td className={styles["td__subscription"]}>Ad - Free</td>
                <td className={styles["td__subscription"]}>No</td>
                <td className={styles["td__subscription"]}>Yes</td>
                <td className={styles["td__subscription"]}>Yes</td>
              </tr>
              <tr className={styles["tr__subscription"]}>
                <td className={styles["td__subscription"]}>Offline Viewing</td>
                <td className={styles["td__subscription"]}>No</td>
                <td className={styles["td__subscription"]}>
                  Yes, for select titles.
                </td>
                <td className={styles["td__subscription"]}>
                  Yes, for all titles.
                </td>
              </tr>
              <tr className={styles["tr__subscription"]}>
                <td className={styles["td__subscription"]}>Family Sharing</td>
                <td className={styles["td__subscription"]}>No</td>
                <td className={styles["td__subscription"]}>
                  Yes, up to 5 family members.
                </td>
                <td className={styles["td__subscription"]}>
                  Yes, up to 6 family members.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Banner />
    </main>
  );
}
