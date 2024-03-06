import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fonts } from "../../styles/fonts";
import { Close } from "../../styles/svgs";
import { color } from "../../styles/colors";

function SearchHistoryTag() {
  return (
    <View style={styles.tag}>
      <Text style={fonts.Body["Body 14 Medium"]}>일반고</Text>
      <Close width={16} height={16} />
    </View>
  );
}

export default SearchHistoryTag;

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: color.Gray[100],
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
});
