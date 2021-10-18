import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import tailwind from "tailwind-rn";
const login = () => {
  return (
    <SafeAreaView style={tailwind("h-full")}>
      <View style={tailwind("pt-12 items-center")}>
        <Text>Login !</Text>
      </View>
    </SafeAreaView>
  );
};

export default login;
