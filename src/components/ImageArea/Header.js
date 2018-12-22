import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { makeCircle } from "../../utils/themes";

export default function Header() {
  return (
    <View style={styles.root}>
      <View style={styles.userMetaWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarImg} />
        </View>
      </View>
      <View style={styles.buttonWrapper}>{}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 16
  },
  userMetaWrapper: {
    flex: 1,
    backgroundColor: "dodgerblue",
    flexDirection: "row"
  },
  buttonWrapper: {
    flex: 0.1,
    backgroundColor: "yellow"
  },
  avatarWrapper: {
    flex: 0.15,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center"
  },
  avatarImg: {
    backgroundColor: "green",
    ...makeCircle(45)
  }
});
