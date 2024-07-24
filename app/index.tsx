import CustomButton from "@/components/CustomButton";
import LayoutScreens from "@/components/LayoutScreens";
import image from "@/constants/images";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const onPressHandle = () => {
    console.log("hello");
    router.push("/sign-in");
  };

  return (
    <LayoutScreens>
      <View className="items-center justify-between min-h-[85%] my-auto">
        <Image
          source={image.logo}
          className="w-[137px] h-[84px]"
          resizeMode="contain"
        />
        <Image
          source={image.cards}
          className="max-w-[380px] w-full h-[300px]"
          resizeMode="contain"
        />

        <View className="relative">
          <Text className="text-3xl font-semibold text-center text-white">
            Discover Endless Possibilities with{" "}
            <Text className="text-secondary-100 font-bold">Aora</Text>
          </Text>
          <Image
            className=" absolute w-[65px] h-[30px] right-0 -bottom-3"
            source={image.path}
            resizeMode="contain"
          />
        </View>
        <Text className="text-gray-100 text-center text-base mt-4 px-4">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>
        <CustomButton
          className="mt-4 w-[90%] h-14 bg-secondary-100"
          onPress={onPressHandle}
          labelProps={{
            title: "Continue with Email",
            className: "font-bold text-lg",
          }}
        />
      </View>
    </LayoutScreens>
  );
};

export default App;
