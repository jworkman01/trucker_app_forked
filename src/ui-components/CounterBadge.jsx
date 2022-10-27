/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function CounterBadge(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="7px"
      alignItems="center"
      position="relative"
      borderRadius="4px"
      padding="9px 13px 9px 13px"
      backgroundColor="rgba(119,73,248,1)"
      {...rest}
      {...getOverrideProps(overrides, "CounterBadge")}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Notifications"
        {...getOverrideProps(overrides, "Notifications")}
      ></Text>
      <View
        width="20px"
        height="20px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Badge")}
      >
        <View
          width="20px"
          height="20px"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 309")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(52,58,64,1)"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="2px"
          left="5px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="2"
          {...getOverrideProps(overrides, "2")}
        ></Text>
      </View>
    </Flex>
  );
}
