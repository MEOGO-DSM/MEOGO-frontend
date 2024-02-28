import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Eye, EyeOff } from "../../styles/svgs";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

const InputBox = ({
  placeholder,
  maxLength,
  placeholderTextColor,
  secureTextEntry,
  value,
  onChangeText,
  onEyePress,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.inputBox, isFocused && styles.focusedBorder]}>
      <TextInput
        style={styles.input}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {onEyePress && (
        <TouchableOpacity onPress={onEyePress}>
          {secureTextEntry ? (
            <Eye style={styles.eyeIcon} />
          ) : (
            <EyeOff style={styles.eyeIcon} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: color.Gray[100],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.White,
  },
  focusedBorder: {
    borderWidth: 1,
    borderColor: color.Blue[500],
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    color: color.Gray[400],
  },
});

export default InputBox;
