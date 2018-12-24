import { Navigation } from "react-native-navigation";

import FeedsScreen from "./FeedsScreen";
import ExploreScreen from "./ExploreScreen";
import WithProvider from "../components/WithProvider";

export const registerScreens = () => {
  Navigation.registerComponent("wave_client.FeedsScreen", () =>
    WithProvider(FeedsScreen)
  );
  Navigation.registerComponent("wave_client.ExploreScreen", () =>
    WithProvider(ExploreScreen)
  );
};
