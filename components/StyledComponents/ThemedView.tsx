import { View, StyleSheet } from "react-native";
import React from "react";

const ThemedView: React.FC<{ children: any; customStyles?: any }> = ({
  children,
  customStyles,
}) => {
  if (customStyles) {
    return (
      <View style={[{ ...customStyles }, styles.container]}>{children}</View>
    );
  }
  return <View style={styles.container}>{children}</View>;
};

export default ThemedView;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
