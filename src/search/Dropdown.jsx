import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Arrow_Down } from "../../styles/svgs";
import { color } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

function Dropdown({ data }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleItemPress = (item) => {
    setSelectedValue(item);
    setDropdownVisible(false);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View style={styles.dropDownList}>
          <Text
            style={{
              ...fonts.Body["Body 14 Regular"],
              color: selectedValue === item ? color.Blue[600] : color.Black,
            }}
          >
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity onPress={toggleDropdown} style={styles.background}>
        <View style={styles.dropDownBox}>
          <Text style={fonts.Body["Body 14 Regular"]}>
            {selectedValue || data[0]}
          </Text>
          <Arrow_Down />
        </View>
        {isDropdownVisible && (
          <View style={styles.dropDownListBox}>
            <FlatList
              data={data}
              keyExtractor={(item) => item}
              renderItem={renderItem}
            />
          </View>
        )}
      </TouchableOpacity>
    </>
  );
}

export default Dropdown;

const styles = StyleSheet.create({
  background: {
    backgroundColor: color.Gray[100],
    borderRadius: 8,
  },
  dropDownBox: {
    width: "auto",
    borderRadius: 8,
    backgroundColor: color.Gray[100],
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    gap: 8,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  dropDownListBox: {
    width: "100%",
    maxHeight: 260,
    overflow: "hidden",
    borderRadius: 8,
  },
  dropDownList: {
    backgroundColor: color.Gray[100],
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
  },
});
