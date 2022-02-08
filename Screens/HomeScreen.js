import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import BorrowComponent from "../components/BorrowComponent";

const HomeScreen = () => {

  const { width } = Dimensions.get("window");
  const ratio = 1 / 1;
  const style = {
    width,
    height: width * ratio,
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        style={[style, styles.banner]}
        source={require("../assets/banner.png")}
      />
      <Text style={styles.user}>Hi Mark</Text>
      <BorrowComponent />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f6f7f9",
  },
  banner: {
    position: "absolute",
    top: -70,
  },
  user: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 90,
    marginBottom: 20,
    textAlign: "left",
  },
});
