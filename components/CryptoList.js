import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

const CryptoList = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={styles.bitcoinLogo}
        source={require("../assets/bitcoin.png")}
      />
      <Text style={{ fontWeight: "bold", fontSize: 17, marginRight: 4 }}>
        Bitcoin
      </Text>
      <SimpleLineIcons name="arrow-down" size={13} color="black" />
    </View>
  );
};

export default CryptoList;

const styles = StyleSheet.create({
  bitcoinLogo: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginVertical: 20,
  },
});
