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
export default function Title(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Title7736202: { fontSize: "48px", lineHeight: "54px" },
        Title: {},
      },
      variantValues: { size: "is-1", bottomSpace: "True" },
    },
    {
      overrides: {
        Title7736202: { fontSize: "48px", lineHeight: "54px" },
        Title: { padding: "0px 0px 0px 0px" },
      },
      variantValues: { size: "is-1", bottomSpace: "False" },
    },
    {
      overrides: {
        Title7736202: { fontSize: "40px", lineHeight: "45px" },
        Title: {},
      },
      variantValues: { size: "is-2", bottomSpace: "True" },
    },
    {
      overrides: {
        Title7736202: { fontSize: "40px", lineHeight: "45px" },
        Title: { padding: "0px 0px 0px 0px" },
      },
      variantValues: { size: "is-2", bottomSpace: "False" },
    },
    {
      overrides: { Title7736202: {}, Title: {} },
      variantValues: { size: "is-3 (Default)", bottomSpace: "True" },
    },
    {
      overrides: { Title7736202: {}, Title: { padding: "0px 0px 0px 0px" } },
      variantValues: { size: "is-3 (Default)", bottomSpace: "False" },
    },
    {
      overrides: {
        Title7736202: { fontSize: "24px", lineHeight: "27px" },
        Title: {},
      },
      variantValues: { size: "is-4", bottomSpace: "True" },
    },
    {
      overrides: {
        Title7736202: { fontSize: "24px", lineHeight: "27px" },
        Title: { padding: "0px 0px 0px 0px" },
      },
      variantValues: { size: "is-4", bottomSpace: "False" },
    },
    {
      overrides: {
        Title7736202: { fontSize: "20px", lineHeight: "22.5px" },
        Title: {},
      },
      variantValues: { size: "is-5", bottomSpace: "True" },
    },
    {
      overrides: {
        Title7736202: { fontSize: "20px", lineHeight: "22.5px" },
        Title: { padding: "0px 0px 0px 0px" },
      },
      variantValues: { size: "is-5", bottomSpace: "False" },
    },
    {
      overrides: {
        Title7736202: { fontSize: "16px", lineHeight: "18px" },
        Title: {},
      },
      variantValues: { size: "is-6", bottomSpace: "True" },
    },
    {
      overrides: {
        Title7736202: { fontSize: "16px", lineHeight: "18px" },
        Title: { padding: "0px 0px 0px 0px" },
      },
      variantValues: { size: "is-6", bottomSpace: "False" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 24px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Title")}
    >
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="100"
        color="rgba(54,54,54,1)"
        lineHeight="36px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Title"
        {...getOverrideProps(overrides, "Title7736202")}
      ></Text>
    </Flex>
  );
}
