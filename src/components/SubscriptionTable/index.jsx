import styles from "./SubscriptionTable.module.css";

export const SubscriptionTable = () => {
  return (
    <>
      <div className={styles["subscription__text-container"]}>
        <h1 className={styles["subscription__heading"]}>
          Compare our plans and find the right one for you
        </h1>
        <p className={styles["subscription__text"]}>
          omni+ offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that&apos;s right for you.
        </p>
      </div>
      <div className={styles["subscription__table-container"]}>
        <table className={styles["subscription__table"]}>
          <thead className={styles["subscription__thead"]}>
            <tr className={styles["subscription__tr"]}>
              <th className={styles["subscription__th"]}>Features</th>
              <th className={styles["subscription__th"]}>Basic</th>
              <th className={styles["subscription__th"]}>Standard</th>
              <th className={styles["subscription__th"]}>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles["subscription__tr"]}>
              <td className={styles["subscription__td"]}>Price</td>
              <td className={styles["subscription__td"]}>$9.99/Month</td>
              <td className={styles["subscription__td"]}>$12.99/Month</td>
              <td className={styles["subscription__td"]}>$14.99/Month</td>
            </tr>
            <tr className={styles["subscription__tr"]}>
              <td className={styles["subscription__td"]}>Content</td>
              <td className={styles["subscription__td"]}>
                Access to a wide selection of movies and shows, including some
                new releases
              </td>
              <td className={styles["subscription__td"]}>
                Access to a wider selection of movies and shows, including
                most new releases and exclusive content
              </td>
              <td className={styles["subscription__td"]}>
                Access to a widest selection of movies and shows, including
                all new releases and Offline Viewing
              </td>
            </tr>
            <tr className={styles["subscription__tr"]}>
              <td className={styles["subscription__td"]}>Devices</td>
              <td className={styles["subscription__td"]}>
                Watch on one device simultaneously
              </td>
              <td className={styles["subscription__td"]}>
                Watch on Two device simultaneously
              </td>
              <td className={styles["subscription__td"]}>
                Watch on Four device simultaneously
              </td>
            </tr>
            <tr className={styles["subscription__tr"]}>
              <td className={styles["subscription__td"]}>Free Trail</td>
              <td className={styles["subscription__td"]}>7 Days</td>
              <td className={styles["subscription__td"]}>7 Days</td>
              <td className={styles["subscription__td"]}>7 Days</td>
            </tr>
            <tr className={styles["subscription__tr"]}>
              <td className={styles["subscription__td"]}>Cancel Anytime</td>
              <td className={styles["subscription__td"]}>Yes</td>
              <td className={styles["subscription__td"]}>Yes</td>
              <td className={styles["subscription__td"]}>Yes</td>
            </tr>
            <tr className={styles["subscription__tr"]}>
              <td className={styles["subscription__td"]}>HDR</td>
              <td className={styles["subscription__td"]}>No</td>
              <td className={styles["subscription__td"]}>Yes</td>
              <td className={styles["subscription__td"]}>Yes</td>
            </tr>
            <tr className={styles["subscription__tr"]}>
              <td className={styles["subscription__td"]}>Dolby Atmos</td>
              <td className={styles["subscription__td"]}>No</td>
              <td className={styles["subscription__td"]}>Yes</td>
              <td className={styles["subscription__td"]}>Yes</td>
            </tr>
            <tr className={styles["subscription__tr"]}>
              <td className={styles["subscription__td"]}>Ad - Free</td>
              <td className={styles["subscription__td"]}>No</td>
              <td className={styles["subscription__td"]}>Yes</td>
              <td className={styles["subscription__td"]}>Yes</td>
            </tr>
            <tr className={styles["subscription__tr"]}>
              <td className={styles["subscription__td"]}>Offline Viewing</td>
              <td className={styles["subscription__td"]}>No</td>
              <td className={styles["subscription__td"]}>
                Yes, for select titles.
              </td>
              <td className={styles["subscription__td"]}>
                Yes, for all titles.
              </td>
            </tr>
            <tr className={styles["subscription__tr"]}>
              <td className={styles["subscription__td"]}>Family Sharing</td>
              <td className={styles["subscription__td"]}>No</td>
              <td className={styles["subscription__td"]}>
                Yes, up to 5 family members.
              </td>
              <td className={styles["subscription__td"]}>
                Yes, up to 6 family members.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}