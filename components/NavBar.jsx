import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Text, Pressable } from "react-native";
import {
  Home,
  User,
  Community,
  Home_Fill,
  User_Fill,
  Community_Fill,
} from "../styles/svgs";
import { color } from "../styles/colors";
import { fonts } from "../styles/fonts";

function NavBar() {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconPress = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.iconBox} onPress={() => handleIconPress("home")}>
        {activeIcon === "home" ? <Home_Fill /> : <Home />}
        <Text
          style={{
            ...fonts.Captions["Captions 12 Medium"],
            color: activeIcon === "home" ? color.Blue[500] : color.Gray[400],
          }}
        >
          홈
        </Text>
      </Pressable>
      <Pressable
        style={styles.iconBox}
        onPress={() => handleIconPress("community")}
      >
        {activeIcon === "community" ? <Community_Fill /> : <Community />}
        <Text
          style={{
            ...fonts.Captions["Captions 12 Medium"],
            color:
              activeIcon === "community" ? color.Blue[500] : color.Gray[400],
          }}
        >
          게시판
        </Text>
      </Pressable>
      <Pressable style={styles.iconBox} onPress={() => handleIconPress("user")}>
        {activeIcon === "user" ? <User_Fill /> : <User />}
        <Text
          style={{
            ...fonts.Captions["Captions 12 Medium"],
            color: activeIcon === "user" ? color.Blue[500] : color.Gray[400],
          }}
        >
          프로필
        </Text>
      </Pressable>
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
