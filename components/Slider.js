import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CircularSlider from "rn-circular-slider";

export default function Slider() {
  const [value, setValue] = useState(200);
  const [max, setMax] = useState(2700);
  const [min, setMin] = useState(50);

  function convert(value) {
    if (value >= 1000000) {
      value = value / 1000000 + "M";
    } else if (value >= 1000) {
      value = value / 1000 + "K";
    }
    return value;
  }

  return (
    <View style={styles.container}>
      <CircularSlider
        step={10}
        min={min}
        max={max}
        value={value}
        onChange={(value) => setValue(value)}
        contentContainerStyle={styles.contentContainerStyle}
        strokeWidth={30}
        buttonFillColor="#fff"
        buttonStrokeWidth={10}
        openingRadian={Math.PI / 4}
        buttonRadius={10}
        linearGradient={[
          { stop: "0%", color: "black" },
          { stop: "100%", color: "black" },
        ]}
      >
        <View style={styles.content}>
          <Text style={styles.value}>${value}</Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#7559f9",
              textDecorationLine: "none",
            }}
          >
            Max {""}
            <Text style={{ color: "gray", textDecorationLine: "underline" }}>
              ${max}
            </Text>
          </Text>
        </View>
      </CircularSlider>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.min}>${min}</Text>
        <Text style={styles.max}>${convert(max)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  // content: {
  //   alignItems: "center",
  // },
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    fontWeight: "bold",
    fontSize: 32,
    color: "black",
  },
  min: { top: -20, left: -40, fontWeight: "bold", color: "gray", fontSize: 15 },
  max: {
    top: -20,
    right: -40,
    fontWeight: "bold",
    color: "gray",
    fontSize: 15,
  },
});
