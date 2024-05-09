import * as WebBrowser from "expo-web-browser";
import { environment } from "../config/environment";
import { Dimensions } from "react-native";

export const openUrlInWeb = async (url) => {
  let result = await WebBrowser.openBrowserAsync(url);
};

export const handelGetImage = (url) => {
  if (environment == "development") {
    const parts = (url ?? "").split("\\");
    const ImageId = parts[1];
    return ImageId;
  } else {
    const parts = (url ?? "").split("/");
    const ImageId = parts[parts.length - 1];
    return ImageId;
  }
};

export const extractStateFromAddress = (addressComponents) => {
  const stateComponent = addressComponents.find((component) =>
    component.types.includes("administrative_area_level_1")
  );

  return stateComponent ? stateComponent.long_name : null;
};

export const getVerticalOffset = () => {
  const { height } = Dimensions.get("window");
  return height >= 812 ? 90 : 45; // iPhone X and above have a height of 812 or more
};
