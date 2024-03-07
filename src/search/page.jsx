import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { color } from "../../styles/colors";

function SearchResult() {
  <ScrollView stickyHeaderIndices={[0]} style={styles.container}>
    <View style={styles.searchBox}></View>
    <View style={styles.listBox}></View>
  </ScrollView>;
}

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Gray[100],
  },
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
    borderBottomLeftRadius: 24,
    backgroundColor: color.White,
  },
});
