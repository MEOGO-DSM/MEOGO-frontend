import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { Arrow_Down, Arrow_Up } from "../../styles/svgs";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import styled from "styled-components/native";

function Dropdown({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropData, setDropData] = useState(data);
  return (
    <>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropDownBox}>
        <Text style={fonts.Body["Body 14 Regular"]}>
          {selectedValue || data[0]}
        </Text>
        {isDropdownVisible ? <Arrow_Up /> : <Arrow_Down />}
      </TouchableOpacity>
      {isDropdownVisible && (
        <View style={styles.dropDownListBox}>
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            renderItem={RenderItem}
          />
        </View>
      )}
    </>
  );
}

export default Dropdown;

const styles = StyleSheet.create({
  dropDownBox: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: color.Gray[100],
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    gap: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "relative",
  },
  dropDownListBox: {
    maxHeight: 270,
    overflow: "hidden",
    borderRadius: 8,
    position: "absolute",
    top: 48,
    zIndex: 100,
  },
  dropDownList: {
    backgroundColor: color.Gray[100],
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
  },
});
