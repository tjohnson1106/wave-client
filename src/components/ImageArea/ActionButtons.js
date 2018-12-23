import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

class ActionButtons extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.actionsWrapper}>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign name="hearto" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign name="message1" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign name="retweet" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View>{}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    backgroundColor: "red",
    paddingHorizontal: 16
  },
  actionsWrapper: {
    flex: 1,
    backgroundColor: "dodgerblue",
    flexDirection: "row"
  },
  actionButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ActionButtons;
