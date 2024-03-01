import React from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { Arrow_Left } from "../styles/svgs";
import { fonts } from "../styles/fonts";

function TopBar({ text }) {
  return (
    <View style={styles.container}>
      <Arrow_Left />
      <Text style={fonts.Subtitle["Subtitle 18 Medium"]}>{text}</Text>
      <View style={styles.voidIcon} />
    </View>
  );
}

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  voidIcon: {
    width: 24,
    height: 24,
  },
  voidBox: {
    flex: 1,
  },
});
