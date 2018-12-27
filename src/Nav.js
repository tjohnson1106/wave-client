import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";
import { iconsMap } from "./utils/themes";
import appInitialized from "./utils/appInitialized";

// start tab based app configuration rn-navigation top-level-api

registerScreens();

export function startLogin() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: "wave_client.LoginScreen",
      navigatorStyle: {
        navBarHidden: true
      }
    }
  });
}

export function startMainApp() {
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

export function init() {
  appInitialized();
}

// export default class Nav {
//   constructor() {
//     iconsLoaded.then(() => this._initApp());
//   }

//   _initApp() {
//     Navigation.startTabBasedApp({
//       tabs: [
//         {
//           label: "Feeds",
//           screen: "wave_client.FeedsScreen",
//           title: "Wave",
//           icon: iconsMap.home
//         },
//         {
//           label: "Explore",
//           screen: "wave_client.ExploreScreen",
//           title: "Wave",
//           icon: iconsMap.search1
//         }
//       ]
//     });
//   }
// }
