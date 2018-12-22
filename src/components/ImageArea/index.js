import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "./Header";

class ImageArea extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header />
        <Text>Image Area</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    minHeight: 500,
    backgroundColor: "red",
    paddingBottom: 10
  }
});

export default ImageArea;
