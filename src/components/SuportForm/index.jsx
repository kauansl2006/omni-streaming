import styles from "./SuportForm.module.css";

export const SuportForm = () => {
  return (
    <div className={styles["suport-form__form-container"]}>
      <form className={styles["suport-form__form"]}>
        <div className={styles["suport-form__fields-container"]}>
          <div className={styles["suport-form__input-container"]}>
            <label
              htmlFor="firstName"
              className={styles["suport-form__label"]}
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className={styles["suport-form__input"]}
              placeholder="Enter First Name"
              required
            />
          </div>

          <div className={styles["suport-form__input-container"]}>
            <label htmlFor="lastName" className={styles["suport-form__label"]}>
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className={styles["suport-form__input"]}
              placeholder="Enter Last Name"
              required
            />
          </div>
        </div>

        <div className={styles["suport-form__fields-container"]}>
          <div className={styles["suport-form__input-container"]}>
            <label htmlFor="email" className={styles["suport-form__label"]}>
              Email
            </label>
            <input
              type="text"
              id="email"
              className={styles["suport-form__input"]}
              placeholder="Enter Email"
              required
            />
          </div>

          <div className={styles["suport-form__input-container"]}>
            <label
              htmlFor="phoneNumber"
              className={styles["suport-form__label"]}
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className={styles["suport-form__input"]}
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Enter Phone Number"
              required
            />
          </div>
        </div>

        <div className={styles["suport-form__textarea-container"]}>
          <label htmlFor="message" className={styles["suport-form__label"]}>
            Message
          </label>
          <textarea
            type="text"
            id="message"
            className={styles["suport-form__textarea"]}
            placeholder="Enter your Message"
            required
          />
        </div>

        <div className={styles["suport-form__send-container"]}>
          <div className={styles["suport-form__checkbox-container"]}>
            <input
              type="checkbox"
              id="termsOfUseAndPrivacyPolicy"
              className={styles["suport-form__checkbox"]}
              required
            />
            <label
              htmlFor="termsOfUseAndPrivacyPolicy"
              className={styles["suport-form__checkbox-label"]}
            >
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>

          <input
            className={styles["suport-form__button-send"]}
            type="submit"
            value="Send Message"
          />
        </div>
      </form>
    </div>
  )
}