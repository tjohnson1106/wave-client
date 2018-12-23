import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

import Header from "./Header";
import ActionButtons from "./ActionButtons";

class ImageArea extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header />
        {/* 12232018 image is temp placeholder */}

        <Image
          style={styles.img}
          source={{
            uri:
              "https://res.cloudinary.com/bracket-factory/image/upload/v1528063679/fake_avatar_V04.jpg"
          }}
        />
        <ActionButtons />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    minHeight: 500,
    paddingBottom: 10
  },
  img: {
    flex: 1
  }
});

export default ImageArea;
