import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import { makeHitSlop } from "../../utils/themes";

class ActionButtons extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.actionsWrapper}>
          <TouchableOpacity hitSlop={makeHitSlop(20)} style={styles.actionButton}>
            <AntDesign name="hearto" size={30} />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={makeHitSlop(20)} style={styles.actionButton}>
            <AntDesign name="message1" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.fakeView} />
        <TouchableOpacity hitSlop={makeHitSlop(20)} style={styles.shareWrapper}>
          <AntDesign name="retweet" size={35} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    paddingHorizontal: 16,
    flexDirection: "row"
  },
  actionsWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  actionButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fakeView: {
    flex: 1.6
  },
  shareWrapper: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-end"
  }
});

export default ActionButtons;
