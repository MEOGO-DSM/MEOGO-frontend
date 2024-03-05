import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fonts } from "../../styles/fonts";
import { color } from "../../styles/colors";
import axios from "axios";
import { Close } from "../../styles/svgs";

function SearchHistoryTag() {
  return (
    <View style={styles.buttonBox}>
      <Text style={fonts.Body["Body 14 Medium"]}></Text>
      <Close width={16} height={16} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: color.Gray[100],
  },
});
