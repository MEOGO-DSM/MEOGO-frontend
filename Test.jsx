import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "./components/Header";

const MyComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50 }} // Adjust paddingTop based on your Topbar height
        stickyHeaderIndices={[0]} // Index of the element you want to stick (Topbar in this case)
      >
        <View style={styles.content}>
          <Text>Scrollable Content</Text>
          <Text>Scrollable Content</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    height: 50, // Set the height of your Topbar
    backgroundColor: "blue", // Customize the background color
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2, // Set zIndex to ensure Topbar is above the ScrollView content
  },
  topbarText: {
    color: "white",
  },
  content: {
    height: 1000, // Set the height of your content
    padding: 20,
    // Add other styles for your content as needed
    backgroundColor: "red",
  },
});

export default MyComponent;
