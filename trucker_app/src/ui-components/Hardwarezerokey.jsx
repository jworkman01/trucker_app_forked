/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Hardwarezerokey(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="48px"
      height="48px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Hardwarezerokey")}
    >
      <View
        width="40px"
        height="40px"
        position="absolute"
        top="4px"
        left="4px"
        border="4px SOLID rgba(0,0,0,1)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 370")}
      ></View>
      <View
        width="14px"
        height="24px"
        position="absolute"
        top="12px"
        left="17px"
        border="4px SOLID rgba(0,0,0,1)"
        borderRadius="7px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 377")}
      ></View>
    </View>
  );
}
