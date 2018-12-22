import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.root}>
      <View style={styles.userMetaWrapper}>{}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    backgroundColor: "green"
  },
  userMetaWrapper: {
    flex: 1,
    backgroundColor: "dodgerblue"
  }
});
