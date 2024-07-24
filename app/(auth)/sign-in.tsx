import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import LayoutScreens from "@/components/LayoutScreens";
import images from "@/constants/images";

const SignIn = () => {
  return (
    <LayoutScreens>
      <View className="px-8 my-auto">
        <Image
          source={images.logo}
          className="w-[115px] h-[35px]"
          resizeMode="contain"
        />
        <Text className="text-white font-bold text-3xl mt-8">Sign In</Text>
        <View className="my-8 space-y-2">
          <Text className="text-gray-100 text-xl font-semibold">Email</Text>
          <View className="bg-black-100 rounded-lg p-4 ">
            <TextInput className="text-base text-white" />
          </View>
        </View>
      </View>
    </LayoutScreens>
  );
};

export default SignIn;
