import styles from "./ReviewCard.module.css";

import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

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
        <div className={styles["review__rating-container"]}>
          <div className={styles["review__rating"]}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />  
          </div>  
            
           {review.rating}
        </div>
      </div>

      <p className={styles["review__text"]}>{review.content}</p>
    </div>
  )
}