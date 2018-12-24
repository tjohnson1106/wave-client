import React, { Component } from "react";
import { FlatList, ActivityIndicator, StyleSheet, View } from "react-native";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { ImageArea } from "../../components";

class FeedsScreen extends Component {
  state = {};

  _keyExtractor = (item) => item.id;

  _renderItem = ({ item }) => <ImageArea data={item} />;

  render() {
    console.log("props", this.props, "props");
    if (this.props.data.loading) {
      return (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <FlatList
        data={this.props.data.photos}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const getPhotos = gql`
  query {
    photos {
      id
      imageUrl
      caption
    }
  }
`;

export default graphql(getPhotos)(FeedsScreen);
