import React, { Component } from "react";
import { ScrollView } from "react-native";

import { ImageArea } from "../../components";

class FeedsScreen extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <ImageArea />
      </ScrollView>
    );
  }
}

export default FeedsScreen;
