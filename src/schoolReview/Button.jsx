import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Edit } from "../../styles/svgs";
import {fonts} from "../../styles/fonts"
import {color} from "../../styles/colors"

function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Edit fill="#fff" stroke="#fff"/>
      <Text style={{ ...fonts.Body["Body 16 Medium"], color: color.White }}>
        리뷰작성
      </Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 99,
    height: 31,
    backgroundColor: color.Blue[600],
    borderRadius: 20,
    color: color.White,
    flexDirection: "row", 
    justifyContent: "center",
    alignItems: "center",
    gap: 2
  },
});
