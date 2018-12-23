import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { human, iOSColors } from "react-native-typography";

import Header from "./Header";
import ActionButtons from "./ActionButtons";
import Meta from "./Meta";
import CommentInput from "../CommentInput";

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
        <Meta />
        <View style={styles.commentsWrapper}>
          <TouchableOpacity>
            <Text style={styles.viewAllComments}>View all 13 comments</Text>
          </TouchableOpacity>
          <CommentInput />
        </View>
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
  },
  commentsWrapper: {
    height: 50,
    paddingHorizontal: 16
  },
  viewAllComments: {
    ...human.calloutObject,
    color: iOSColors.midGray
  }
});

export default ImageArea;
