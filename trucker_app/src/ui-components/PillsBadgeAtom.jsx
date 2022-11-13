/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function PillsBadgeAtom(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      alignItems="center"
      position="relative"
      borderRadius="16px"
      padding="3px 8px 3px 8px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "PillsBadgeAtom")}
    >
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="11.71875px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="atom"
        {...getOverrideProps(overrides, "atom")}
      ></Text>
    </Flex>
  );
}
