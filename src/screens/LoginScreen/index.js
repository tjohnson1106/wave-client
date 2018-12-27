import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { iOSColors } from "react-native-typography";

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.appName}>Login Screen</Text>
        </View>
        <View style={styles.content}>{}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    flex: 0.3,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  appName: {
    color: iOSColors.white,
    fontSize: 50,
    fontFamily: fonts.julius
  },
  content: {
    flex: 1,
    alignSelf: "stretch",
    width: "100%",
    height: "100%"
  }
});

export default LoginScreen;
