/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function BasicButtonGroupLarge(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "BasicButtonGroupLarge")}
    >
      <Flex
        gap="10px"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="47px"
        position="relative"
        borderRadius="4px 0px 0px 4px"
        padding="14px 16px 14px 16px"
        backgroundColor="rgba(108,117,125,1)"
        {...getOverrideProps(overrides, "leftButtonLeft")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="18.75px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Left"
          {...getOverrideProps(overrides, "Left")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="47px"
        position="relative"
        padding="14px 16px 14px 16px"
        backgroundColor="rgba(108,117,125,1)"
        {...getOverrideProps(overrides, "leftButtonMiddle")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="18.75px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Middle "
          {...getOverrideProps(overrides, "Middle")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="47px"
        position="relative"
        borderRadius="0px 4px 4px 0px"
        padding="14px 16px 14px 16px"
        backgroundColor="rgba(108,117,125,1)"
        {...getOverrideProps(overrides, "leftButtonRight")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="18.75px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Right"
          {...getOverrideProps(overrides, "Right")}
        ></Text>
      </Flex>
    </Flex>
  );
}
