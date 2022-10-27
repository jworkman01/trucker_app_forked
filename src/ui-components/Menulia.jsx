/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Menulia(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { a86332245: {}, a86332244: {}, Menulia: {} },
      variantValues: { hover: "False", active: "False" },
    },
    {
      overrides: {
        a86332245: { color: "rgba(54,54,54,1)" },
        a86332244: { backgroundColor: "rgba(245,245,245,1)" },
        Menulia: {},
      },
      variantValues: { hover: "True", active: "False" },
    },
    {
      overrides: {
        a86332245: { color: "rgba(255,255,255,1)" },
        a86332244: { backgroundColor: "rgba(72,95,199,1)" },
        Menulia: {},
      },
      variantValues: { hover: "False", active: "True" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      width="360px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Menulia")}
    >
      <Flex
        gap="0"
        width="360px"
        alignItems="flex-start"
        grow="1"
        basis="360px"
        height="36px"
        position="relative"
        borderRadius="2px"
        padding="8px 12px 8px 12px"
        {...getOverrideProps(overrides, "a86332244")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(74,74,74,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="336px"
          grow="1"
          basis="336px"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="List item"
          {...getOverrideProps(overrides, "a86332245")}
        ></Text>
      </Flex>
    </Flex>
  );
}
