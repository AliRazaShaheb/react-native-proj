import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";
import { useTheme } from "@/context/ThemeProvider";

type IconCompTypes = {
  icon: {
    uri: string;
  };
  name?: string;
  focused?: boolean;
  color?: string;
  size?: number;
};

const IconComp = ({ icon, color, focused, size, name }: IconCompTypes) => {
  return (
    <View className="flex justify-center items-center gap-1">
      <Image
        source={icon}
        className="h-6 w-6"
        tintColor={color}
        resizeMode="contain"
      />
      <Text
        className={`${focused ? "font-pbold" : "font-pregular"} `}
        style={{
          color: color,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  const obj = useTheme();
  const theme = obj?.theme;
  const tabMenu = [
    {
      title: "Home",
      name: "home",
      icon: icons.home,
    },
    {
      title: "Profile",
      name: "profile",
      icon: icons.profile,
    },
    {
      title: "Create",
      name: "create",
      icon: icons.plus,
    },
    {
      title: "Saved",
      name: "bookmark",
      icon: icons.bookmark,
    },
  ];

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme?.secondary,
          tabBarStyle: {
            backgroundColor: theme?.primary,
            paddingTop: 10,
            height: 80,
            borderTopWidth: 1,
            borderColor: theme?.secondary,
          },
        }}
      >
        {tabMenu.map((eachMenu, eachMenu_idx) => {
          return (
            <Tabs.Screen
              key={eachMenu.name}
              name={eachMenu.name}
              options={{
                headerShown: false,
                title: eachMenu.title,
                tabBarIcon: ({ color, focused, size }) => {
                  return (
                    <IconComp
                      icon={eachMenu.icon}
                      color={color}
                      focused={focused}
                      size={size}
                      name={eachMenu.title}
                    />
                  );
                },
              }}
            />
          );
        })}
      </Tabs>
    </>
  );
};

export default TabLayout;
