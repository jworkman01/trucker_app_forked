/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function SizesMediumh2(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 20px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SizesMediumh2")}
    >
      <Text
        fontFamily="Inter"
        fontSize="35px"
        fontWeight="100"
        color="rgba(54,54,54,1)"
        lineHeight="39.375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Heading 2"
        {...getOverrideProps(overrides, "Heading")}
      ></Text>
    </Flex>
  );
}