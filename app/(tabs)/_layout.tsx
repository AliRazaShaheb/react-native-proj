import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

type IconCompTypes = {
  name?: string;
  focused?: string;
  color?: string;
  size?: string;
};

const IconComp = () => {
  return (
    <View>
      <Image />
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused, size }) => {
              return <IconComp color={color} focused={focused} size={size} />;
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
