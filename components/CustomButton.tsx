import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TextProps,
  ActivityIndicator,
  ActivityIndicatorProps,
  Image,
  ViewProps,
} from "react-native";
import React, { ElementType, PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import images from "@/constants/images";

type PropsActivityIndicator = ActivityIndicatorProps & {
  className?: string;
};
type PropsText = TextProps & {
  title: string | ReactNode;
  className?: string;
};

type CustomButtonPropTypes = TouchableOpacityProps & {
  className?: string;
  loading?: boolean;
  indicatorProps?: PropsActivityIndicator;
  labelProps: PropsText;
};

const CustomButton = (props: CustomButtonPropTypes) => {
  const {
    className,
    loading = false,
    labelProps = { title: "Label" },
    indicatorProps = {},
    ...rest_touchableOpacity
  } = props;

  const tw_className = twMerge(
    `bg-secondary h-10 flex-row justify-center items-center rounded-md ${
      loading ? "opacity-50" : ""
    }`,
    className
  );
  //   label
  const { title, className: labelClasses, ...rest_labelProps } = labelProps;
  const tw_labelClasses = twMerge("font-semibold", labelClasses);

  //   indicator
  const { className: indicatorClasses, ...rest_indicatorProps } =
    indicatorProps;
  const tw_indicatorClasses = twMerge("ml-1", indicatorClasses);

  return (
    <TouchableOpacity
      className={tw_className}
      activeOpacity={0.7}
      disabled={loading}
      {...rest_touchableOpacity}
    >
      <Text className={tw_labelClasses} {...rest_labelProps}>
        {title}
      </Text>

      {loading ? (
        <ActivityIndicator
          className={tw_indicatorClasses}
          {...rest_indicatorProps}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default CustomButton;
