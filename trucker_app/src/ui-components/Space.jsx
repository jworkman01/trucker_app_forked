/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Space(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="192px"
      height="192px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Space")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(118,230,255,1)"
        {...getOverrideProps(overrides, "192-space")}
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
        top="47.92%"
        bottom="47.92%"
        left="47.4%"
        right="46.88%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="192"
        {...getOverrideProps(overrides, "192")}
      ></Text>
    </View>
  );
}
