import { View, Text, ScrollView } from "react-native";
import React, { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LayoutScreens = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView className="bg-primary  h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LayoutScreens;
