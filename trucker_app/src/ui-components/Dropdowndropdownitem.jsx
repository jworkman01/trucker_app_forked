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
export default function Dropdowndropdownitem(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Dropdown item": {}, Dropdowndropdownitem: {} },
      variantValues: { hover: "False", active: "False" },
    },
    {
      overrides: {
        "Dropdown item": { color: "rgba(10,10,10,1)" },
        Dropdowndropdownitem: { backgroundColor: "rgba(245,245,245,1)" },
      },
      variantValues: { hover: "True", active: "False" },
    },
    {
      overrides: {
        "Dropdown item": { color: "rgba(255,255,255,1)" },
        Dropdowndropdownitem: { backgroundColor: "rgba(72,95,199,1)" },
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
      gap="8px"
      width="fit-content"
      position="relative"
      padding="6px 16px 6px 16px"
      {...rest}
      {...getOverrideProps(overrides, "Dropdowndropdownitem")}
    >
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(74,74,74,1)"
        lineHeight="21px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Dropdown item"
        {...getOverrideProps(overrides, "Dropdown item")}
      ></Text>
    </Flex>
  );
}
