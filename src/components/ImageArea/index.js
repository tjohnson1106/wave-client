import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ImageArea extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>Image Area</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    minHeight: 600,
    backgroundColor: "red",
    padding: 10
  }
});

export default ImageArea;
