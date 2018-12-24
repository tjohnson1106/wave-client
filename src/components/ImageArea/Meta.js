import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { human, systemWeights } from "react-native-typography";

export default function Meta({ caption, username = "username" }) {
  return (
    <View style={styles.root}>
      <View style={styles.wrapper}>
        <Text>
          Liked by
          <Text style={systemWeights.regular}> {username}</Text> and
          <Text style={systemWeights.regular}> 1,123 others</Text>
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Text numberOfLines={2} style={styles.text}>
          <Text style={systemWeights.regular}>{username} </Text>
          {caption}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    minHeight: 50,
    paddingHorizontal: 16
  },
  wrapper: {
    flex: 1
  },
  text: {
    ...human.footnoteObject,
    ...systemWeights.light
  }
});
