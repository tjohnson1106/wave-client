import { Navigation } from "react-native-navigation";

import FeedsScreen from "./FeedsScreen";
import ExploreScreen from "./ExploreScreen";

export const registerScreens = () => {
  Navigation.registerComponent("wave_client.FeedsScreen", () => FeedsScreen);
  Navigation.registerComponent("wave_client.ExploreScreen", () => ExploreScreen);
};
