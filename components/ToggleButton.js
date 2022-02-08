import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import { CryptoContext } from "./CryptoContext";

export default function ToggleButton() {
  const [enabled, setEnabled] = useState(false);
  const { hasCrypto, toggleCrypto } = useContext(CryptoContext);

  const toggleSwitch = () => {
    setEnabled((oldValue) => !oldValue);
    toggleCrypto();
  };

  const thumbColorOn = Platform.OS === "android" ? "white" : "#f3f3f3";
  const thumbColorOff = Platform.OS === "android" ? "white" : "#f3f3f3";
  const trackColorOn = Platform.OS === "android" ? "#7559f9" : "#7559f9";
  const trackColorOff = Platform.OS === "android" ? "gray" : "gray";

  return (
    <View style={styles.container}>
      <Switch
        onValueChange={toggleSwitch}
        value={enabled}
        thumbColor={enabled ? thumbColorOn : thumbColorOff}
        trackColor={{ false: trackColorOff, true: trackColorOn }}
        ios_backgroundColor={trackColorOff}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -40,
    paddingRight: 6,
  },
});
