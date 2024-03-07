import React from "react";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Arrow_Left } from "../styles/svgs";
import { fonts } from "../styles/fonts";
import { useNavigation } from '@react-navigation/native';

function TopBar({ text }) {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Arrow_Left />
      </TouchableOpacity>
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
