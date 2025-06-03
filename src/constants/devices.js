import {
  MdOutlineSmartphone,
  MdOutlineTabletAndroid,
  MdLiveTv,
} from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { BsHeadsetVr } from "react-icons/bs";

export const DEVICES = [
  {
    id: 1,
    icon: <MdOutlineSmartphone />,
    title: "Smartphones",
    description:
      "omni+ is optimized for Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.",
  },
  {
    id: 2,
    icon: <MdOutlineTabletAndroid />,
    title: "Tablet",
    description:
      "omni+ is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 3,
    icon: <MdLiveTv />,
    title: "Smart TV",
    description:
      "omni+ is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 4,
    icon: <BsLaptop />,
    title: "Laptops",
    description:
      "omni+ is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 5,
    icon: <FaGamepad />,
    title: "Gaming Consoles",
    description:
      "omni+ is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 6,
    icon: <BsHeadsetVr />,
    title: "VR Headsets",
    description:
      "omni+ is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
];
