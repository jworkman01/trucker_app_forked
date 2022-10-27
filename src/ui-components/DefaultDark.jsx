/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function DefaultDark(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      alignItems="center"
      position="relative"
      borderRadius="2px"
      padding="4px 7px 4px 7px"
      backgroundColor="rgba(52,58,64,1)"
      {...rest}
      {...getOverrideProps(overrides, "DefaultDark")}
    >
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="10.546875px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Dark"
        {...getOverrideProps(overrides, "Dark")}
      ></Text>
    </Flex>
  );
}
