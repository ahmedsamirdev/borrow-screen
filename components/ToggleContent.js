import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Zocial } from "@expo/vector-icons";
import ToggleButton from "./ToggleButton";

const ToggleContent = () => (
  <>
    <View style={styles.toggleContainer}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <Zocial
            name="bitcoin"
            size={18}
            color="#292828"
            style={styles.icon}
          />
          <Text style={{ color: "black", marginBottom: 5, fontWeight: "bold" }}>
            Do you own crypto?
          </Text>
        </View>
        <Text style={{ color: "gray" }}>Increase your limit up to $10,000</Text>
      </View>
      <ToggleButton />
    </View>
  </>
);
export default ToggleContent;

const styles = StyleSheet.create({
  toggleContainer: {
    backgroundColor: "#f5f4f8",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 12,
    flexDirection: "column",
  },
  icon: {
    marginRight: 5,
  },
});
