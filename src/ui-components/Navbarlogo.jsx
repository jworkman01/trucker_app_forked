/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Navbarlogo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1110px"
      height="48px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Navbarlogo")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(248,249,250,1)"
        {...getOverrideProps(overrides, "Rectangle 44")}
      ></View>
      <View
        position="absolute"
        top="16.67%"
        bottom="16.67%"
        left="1.44%"
        right="95.68%"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(119,73,248,1)"
        {...getOverrideProps(overrides, "Rectangle 45")}
      ></View>
      <Text
        fontFamily="Mulish"
        fontSize="18px"
        fontWeight="900"
        color="rgba(248,249,250,1)"
        lineHeight="17px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="31.25%"
        bottom="33.33%"
        left="2.25%"
        right="96.58%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="B"
        {...getOverrideProps(overrides, "B")}
      ></Text>
    </View>
  );
}
