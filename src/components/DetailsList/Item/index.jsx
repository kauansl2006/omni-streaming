import styles from "./Item.module.css";

import Image from "next/image";

import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

export const Item = ({ heading, releaseDate, genres, rating, languages, crew }) => {
  return (
    <div className={styles["item__container"]}>
      <h6 className={styles["item__heading"]}>
        {heading}
      </h6>
      {releaseDate && (<p className={styles["item__text"]}>
        {releaseDate}
      </p>)}
      {genres && (
        <div className={styles["item__span-container"]}>
          {genres.map((genre) => (
            <span key={genre.id} className={styles["item__span"]}>
              {genre.name}
            </span>
          ))}
        </div>)}
      {rating && (
        <div className={styles["item__span-container"]}>
          <div className={styles["item__rating-card"]}>
            <h5 className={styles["item__rating-heading"]}>IMDb</h5>
            <div className={styles["item__rating-container"]}>
              <div className={styles["item__rating"]}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />  
              </div> 
              4.5 
            </div>
          </div>
          <div className={styles["item__rating-card"]}>
            <h5 className={styles["item__rating-heading"]}>TMDB</h5>
            <div className={styles["item__rating-container"]}>
              <div className={styles["item__rating"]}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />  
              </div> 
              4.5 
            </div>
          </div>
        </div>
      )}
      {languages && (
        <div className={styles["item__span-container"]}>
          {languages.map((language) => (
            <span key={language.id} className={styles["item__span"]}>
              {language.name}
            </span>
          ))}
        </div>
      )}
      {crew && (
        <div className={styles["item__crew-card"]}>
          <div
            className={styles["item__crew-photo-container"]}
          >
            <Image
              src={
                "https://image.tmdb.org/t/p/original" +
                crew.profile_path
              }
              alt={`${crew.name} photo`}
              width={60}
              height={60}
              className={styles["item__crew-photo"]}
            />
          </div>
          <div
            className={styles["item__crew-text-container"]}
          >
            <h5 className={styles["item__crew-heading"]}>
              {crew.name}
            </h5>
            <span className={styles["item__crew-span"]}>
              {crew.job}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}