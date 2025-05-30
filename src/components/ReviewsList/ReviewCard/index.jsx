import styles from "./ReviewCard.module.css";

export const ReviewCard = ({ review }) => {
  return (
    <div className={styles["review__card"]}>
      <div className={styles["review__heading-container"]}>
        <div className={styles["review__author-container"]}>
          <h5 className={styles["review__name"]}>
            {
              review.author_details.name ? 
              review.author_details.name : 
              review.author
            }
          </h5>
          <h6 className={styles["review__username"]}>
            {
              review.author_details.username ? 
              review.author_details.username : 
              review.author
            }
          </h6>
        </div>
        <span className={styles["review__rating"]}>{review.rating} stars</span>
      </div>

      <p className={styles["review__text"]}>{review.content}</p>
    </div>
  )
}