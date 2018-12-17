import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";
import { iconsLoaded, iconsMap } from "./utils/themes";

// start tab based app configuration rn-navigation top-level-api

registerScreens();

export default class Nav {
  constructor() {
    iconsLoaded.then(() => this._initApp());
  }

  _initApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "Feeds",
          screen: "wave_client.FeedsScreen",
          title: "Wave",
          icon: iconsMap.home
        },
        {
          label: "Explore",
          screen: "wave_client.ExploreScreen",
          title: "Wave",
          icon: iconsMap.search1
        }
      ]
    });
  }
}
