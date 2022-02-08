import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import ToggleContent from "./ToggleContent";
import Slider from "./Slider";
import CryptoList from "./CryptoList";
import { CryptoContext } from "./CryptoContext";

const BorrowComponent = () => {
  const { hasCrypto } = useContext(CryptoContext);

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View style={styles.container}>
        <Text style={styles.question}>How much would you like to borrow?</Text>

        <ToggleContent />

        {hasCrypto ? <CryptoList /> : <Text style={{ marginVertical: 20 }} />}

        <Slider />

        <Text style={{ color: "gray", fontSize: 13, textAlign: "center" }}>
          Total amount with applicable <Text style={styles.fees}>fees:</Text>
          <Text style={{ fontWeight: "bold" }}> $8,800.00</Text>
        </Text>

        <TouchableOpacity style={styles.nextButton}>
          <Feather name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BorrowComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 24,
    shadowColor: "#00000094",
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 2 },
    elevation: 6,
  },
  question: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },

  nextButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "black",
    borderRadius: 50,
    marginVertical: 10,
    alignSelf: "flex-end",
  },
  fees: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    color: "#7559f9",
  },
});
