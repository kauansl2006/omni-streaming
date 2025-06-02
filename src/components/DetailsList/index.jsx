import styles from "./DetailsList.module.css";

import { 
  fetchDetailsById,
  fetchCreditsById,
  fetchReviewsById,
  fetchTvSeasonDetails,
 } from "@/lib/data";
 
import { LANGUAGES } from "@/constants/languages";

import { ReviewsList } from "@/components/ReviewsList";
import { CastList } from "@/components/CastList";
import { Item } from "./Item";
import { Season } from "./Season";

export const DetailsList = async ({ id, type }) => {
  const data = await fetchDetailsById(Number(id), type);
  const { cast, crew } = await fetchCreditsById(
    Number(id),
    type
  );
  const reviews = await fetchReviewsById(Number(id), type);

  const seasonWithEpisodes = await Promise.all(
    data.seasons?.map(async (season) => {
      const { episodes } = await fetchTvSeasonDetails(data.id, season.season_number);
      return {
        ...season,
        episodes
      }
    }) || []
  );

  return (
    <div className={styles["details-list__container"]}>
      <div className={styles["details-list__subcontainer"]}>
       {
        type === "tv" && (
          <div className={styles["details-list__card-container"]}>
            <h5 className={styles["details-list__heading"]}>Seasons and Episodes</h5>
            {
              seasonWithEpisodes.map((season) => (
                <Season key={season.id} season={season} />
              ))
            }
          </div>
        )
       }

        <div className={styles["details-list__card-container"]}>
          <h5 className={styles["details-list__heading"]}>Description</h5>
          <p className={styles["details-list__text"]}>{data.overview}</p>
        </div>

        <div className={styles["details-list__card-container"]}>
          <h5 className={styles["details-list__heading"]}>Cast</h5>

          <div className={styles["details-list__cast-container"]}>
            <CastList cast={cast} />
          </div>
        </div>
        <div className={styles["details-list__card-container"]}>
          <h5 className={styles["details-list__heading"]}>Reviews</h5>

          <div className={styles["details-list__reviews-container"]}>
            <ReviewsList reviews={reviews} />
          </div>
        </div>
      </div>

      <div className={styles["details-list__subcontainer"]}>
        <Item heading={"Released Year"} releaseDate={type === "movie" ? data.release_date.split("-")[0] : data.first_air_date.split("-")[0]} />
        <Item heading={"Genres"} genres={data.genres} />
        <Item heading={"Rating"} rating={true} />
        <Item heading={"Available Languages"} languages={LANGUAGES} />
        {crew
          .filter((c) => c.department === "Production")
          .slice(0, 2)
          .map((c) =>
            c.profile_path && <Item key={c.id} heading={c.department} crew={c} />,
        )}
      </div>
    </div>
  )
}