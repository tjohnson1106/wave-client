import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { iOSColors } from "react-native-typography";

import { fakeAvatar } from "../utils/constants";
import { makeCircle, makeHitSlop } from "../utils/themes";

class CommentInput extends Component {
  state = {};
  render() {
    return <View style={styles.root}>{}</View>;
  }
}

export default CommentInput;

const styles = StyleSheet.create({
  root: {
    minHeight: 50,
    backgroundColor: "red"
  }
});
