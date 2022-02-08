import React from "react";
import { StatusBar } from "expo-status-bar";
import Index from "./Screens/Index";
import { NavigationContainer } from "@react-navigation/native";
import { CryptoContextProvider } from "./components/CryptoContext";

export default () => {
  return (
    <CryptoContextProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Index />
      </NavigationContainer>
    </CryptoContextProvider>
  );
};
