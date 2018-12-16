import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";

// start tab based app configuration rn-navigation top-level-api

registerScreens();

export default class Nav {
  constructor() {
    this._initApp();
  }

  _initApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "Feeds",
          screen: "wave_client.FeedsScreen",
          title: "Wave"
        },
        {
          label: "Explore",
          screen: "wave_client.ExploreScreen",
          title: "Wave"
        }
      ]
    });
  }
}
