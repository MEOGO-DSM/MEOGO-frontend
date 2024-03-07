import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { Search } from "../../styles/svgs";

function SearchInput() {
  return (
    <View style={styles.searchBox}>
      <Search />
      <TextInput
        style={fonts.Body["Body 16 Regular"]}
        placeholderTextColor={color.Gray[400]}
        placeholder="학교 이름을 입력해주세요"
      />
    </View>
  );
}

export default SearchInput;

const styles = StyleSheet.create({
  searchBox: {
    width: "100%",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: color.Gray[100],
    borderRadius: 1000,
    alignItems: "center",
    flexDirection: "row",
  },
});
