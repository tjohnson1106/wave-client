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

        <Image
          style={styles.img}
          source={{
            uri: this.props.data.imageUrl
          }}
        />
        <ActionButtons />
        <Meta caption={this.props.data.caption} />
        <View style={styles.commentsWrapper}>
          <TouchableOpacity>
            <Text style={styles.viewAllComments}>View all 13 comments</Text>
          </TouchableOpacity>

          <CommentInput />
        </View>
        <View style={styles.timeWrapper}>
          <Text style={styles.time}>6 Hours ago</Text>
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
  },
  timeWrapper: {
    height: 70,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 16
  },
  time: {
    ...human.footnoteObject,
    color: iOSColors.midGray
  }
});

export default ImageArea;
