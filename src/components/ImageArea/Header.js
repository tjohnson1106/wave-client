import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { makeCircle, makeHitSlop } from "../../utils/themes";
import { fakeAvatar } from "../../utils/constants";

export default function Header() {
  return (
    <View style={styles.root}>
      <View style={styles.userMetaWrapper}>
        <View style={styles.avatarWrapper}>
          <Image source={{ uri: fakeAvatar }} style={styles.avatarImg} />
        </View>
        <View style={styles.userInfoWrapper}>
          <Text style={styles.username}> Bracket Factory</Text>
          <Text style={styles.location}> New York, NY</Text>
        </View>
      </View>
      <TouchableOpacity hitSlop={makeHitSlop(20)} style={styles.buttonWrapper}>
        <MaterialCommunityIcons name="dots-horizontal" size={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 16
  },
  userMetaWrapper: {
    flex: 1,
    flexDirection: "row"
  },
  buttonWrapper: {
    flex: 0.1,
    backgroundColor: "yellow"
  },
  avatarWrapper: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center"
  },
  avatarImg: {
    ...makeCircle(45)
  },
  userInfoWrapper: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10
  },
  username: {
    color: "gray"
  },
  location: {
    color: "gray"
  }
});
