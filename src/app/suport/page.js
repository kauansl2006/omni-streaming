import { FaqList } from "@/components/Home/FaqList";
import styles from "./page.module.css";

import Image from "next/image";
import { Banner } from "@/components/Home/Banner";

export default function SuportPage() {
  return (
    <main className={styles["main__suport"]}>
      <section id="suport-section" className={styles["suport-section__suport"]}>
        <div className={styles["suport-container__suport"]}>
          <div className={styles["sub-container__suport"]}>
            <div className={styles["text-container__suport"]}>
              <h1 className={styles["heading__suport"]}>
                Welcome to our support page!
              </h1>
              <p className={styles["text__suport"]}>
                We&apos;re here to help you with any problems you may be having
                with our product.
              </p>
            </div>
            <div className={styles["image-container__suport"]}>
              <Image
                src="/background.png"
                alt="Movies image"
                width={1500}
                height={1500}
                className={styles["image__suport"]}
              />
            </div>
          </div>

          <div className={styles["form-container__suport"]}>
            <form className={styles["form__suport"]}>
              <div className={styles["fields-container__suport"]}>
                <div className={styles["input-container__suport"]}>
                  <label
                    htmlFor="firstName"
                    className={styles["label__suport"]}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className={styles["input__suport"]}
                    placeholder="Enter First Name"
                    required
                  />
                </div>

                <div className={styles["input-container__suport"]}>
                  <label htmlFor="lastName" className={styles["label__suport"]}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className={styles["input__suport"]}
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
              </div>

              <div className={styles["fields-container__suport"]}>
                <div className={styles["input-container__suport"]}>
                  <label htmlFor="email" className={styles["label__suport"]}>
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className={styles["input__suport"]}
                    placeholder="Enter Email"
                    required
                  />
                </div>

                <div className={styles["input-container__suport"]}>
                  <label
                    htmlFor="phoneNumber"
                    className={styles["label__suport"]}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    className={styles["input__suport"]}
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>
              </div>

              <div className={styles["textarea-container__suport"]}>
                <label htmlFor="message" className={styles["label__suport"]}>
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  className={styles["textarea__suport"]}
                  placeholder="Enter your Message"
                  required
                />
              </div>

              <div className={styles["send-container__suport"]}>
                <div className={styles["checkbox-container__suport"]}>
                  <input
                    type="checkbox"
                    id="termsOfUseAndPrivacyPolicy"
                    className={styles["checkbox__suport"]}
                    required
                  />
                  <label
                    htmlFor="termsOfUseAndPrivacyPolicy"
                    className={styles["checkbox-label__suport"]}
                  >
                    I agree with Terms of Use and Privacy Policy
                  </label>
                </div>

                <input
                  className={styles["button-send__suport"]}
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      <FaqList />
      <Banner />
    </main>
  );
}
