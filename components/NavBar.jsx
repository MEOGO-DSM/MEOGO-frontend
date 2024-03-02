import React from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { Home, User, Community } from "../styles/svgs";
import { color } from "../styles/colors";
import { fonts } from "../styles/fonts";

function NavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Home stroke="#A1A1AA" />
        <Text
          style={{
            ...fonts.Captions["Captions 12 Medium"],
            color: color.Gray[400],
          }}
        >
          홈
        </Text>
      </View>
      <View style={styles.iconBox}>
        <Community stroke="#A1A1AA" />
        <Text
          style={{
            ...fonts.Captions["Captions 12 Medium"],
            color: color.Gray[400],
          }}
        >
          게시판
        </Text>
      </View>
      <View style={styles.iconBox}>
        <User stroke="#A1A1AA" />
        <Text
          style={{
            ...fonts.Captions["Captions 12 Medium"],
            color: color.Gray[400],
          }}
        >
          프로필
        </Text>
      </View>
    </View>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: Dimensions.get("window").width,
    height: 72,
    paddingHorizontal: 48,
    paddingVertical: 12,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: color.White,

    shadowColor: color.Black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    elevation: 20,
    shadowRadius: 2,
  },
  iconBox: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
});
