/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function TextareaInput(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="420px"
      height="120px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "TextareaInput")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(206,212,218,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "textareaInput")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(171,181,190,1)"
        lineHeight="21px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="13.33%"
        bottom="69.17%"
        left="3.81%"
        right="51.19%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Write your message here"
        {...getOverrideProps(overrides, "Write your message here")}
      ></Text>
    </View>
  );
}
