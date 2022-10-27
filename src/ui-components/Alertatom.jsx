/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Alertatom(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(222,226,230,1)"
      borderRadius="4px"
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(248,249,250,1)"
      {...rest}
      {...getOverrideProps(overrides, "Alertatom")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Alert-atom"
        {...getOverrideProps(overrides, "Alert-atom")}
      ></Text>
    </Flex>
  );
}
