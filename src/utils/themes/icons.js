import React from "react";
import { PixelRatio, Platform } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const navIconSize =
  __DEV__ === false && Platform.OS === "android"
    ? PixelRatio.getPixelSizeForLayoutSize(25)
    : 25;

// react-native navigatoin variable to replace loading suffixes

const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const icons = {
  home: [navIconSize, AntDesign],
  search1: [navIconSize, AntDesign]
};

const iconsMap = {};

// pass an object with promise.all to return an an index
// need to use JavaScript's replace method for the icon names

const iconsLoaded = () =>
  new Promise((resolve) => {
    new Promise.all(
      Object.keys(icons).map((iconName) => {
        const Provider = icons[iconName][1];
        return Provider.getImageSource(
          iconName.replace(replaceSuffixPattern, ""),
          icons[iconName][0]
        );
      })
    ).then((sources) => {
      Object.keys(icons).forEach((iconName, i) => (iconsMap[iconName] = sources[i]));

      resolve(true);
    });
  });

export { iconsMap, iconsLoaded };
