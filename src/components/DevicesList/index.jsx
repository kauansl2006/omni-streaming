import styles from "./DevicesList.module.css";

import { DeviceCard } from "@/components/DevicesList/DeviceCard";

import { DEVICES } from "@/constants/devices";

export const DevicesList = () => {
  return (
    <>
      <div className={styles["devices-list__text-devices-container"]}>
          <h2 className={styles["devices-list__heading"]}>
            We Provide you streaming experience across various devices.
          </h2>
          <p className={styles["devices-list__text"]}>
            With omni+ , you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </p>
        </div>
        <div className={styles["devices-list__devices-container"]}>
          {DEVICES.map((device) => (
            <DeviceCard key={device.id} item={device} />
          ))}
        </div>
    </>
  )
}