import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { color } from "../styles/colors";
import { fonts } from "../styles/fonts";

function Button({ buttonTxt }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={{ ...fonts.Body["Body 16 Medium"], color: color.White }}>
        {buttonTxt}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.Blue[600],
    borderRadius: 8,
    color: color.White,
  },
});
