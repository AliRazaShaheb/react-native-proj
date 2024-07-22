import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-blue-500 text-2xl font-pbold">App</Text>
      <Link
        href={"/home"}
        className="underline underline-offset-2 text-blue-500"
      >
        Go to working Route
      </Link>
    </View>
  );
};

export default App;
