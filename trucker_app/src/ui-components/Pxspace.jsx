/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Pxspace(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="48px"
      height="48px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Pxspace")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(181,219,255,1)"
        {...getOverrideProps(overrides, "48px-space")}
      ></View>
      <Text
        fontFamily="Mulish"
        fontSize="6px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="8px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="41.67%"
        bottom="41.67%"
        left="41.67%"
        right="41.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="48"
        {...getOverrideProps(overrides, "48")}
      ></Text>
    </View>
  );
}