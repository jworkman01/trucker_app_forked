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
export default function Label(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Label106347727: {}, Label: {} },
      variantValues: {
        size: "is-small",
        bottomSpace: "True",
        topSpace: "False",
      },
    },
    {
      overrides: { Label106347727: {}, Label: { padding: "6px 0px 6px 0px" } },
      variantValues: {
        size: "is-small",
        bottomSpace: "True",
        topSpace: "True",
      },
    },
    {
      overrides: { Label106347727: {}, Label: { padding: "6px 0px 0px 0px" } },
      variantValues: {
        size: "is-small",
        bottomSpace: "False",
        topSpace: "True",
      },
    },
    {
      overrides: { Label106347727: {}, Label: { padding: "0px 0px 0px 0px" } },
      variantValues: {
        size: "is-small",
        bottomSpace: "False",
        topSpace: "False",
      },
    },
    {
      overrides: {
        Label106347727: { fontSize: "16px", lineHeight: "24px" },
        Label: { padding: "0px 0px 8px 0px" },
      },
      variantValues: {
        size: "Default",
        bottomSpace: "True",
        topSpace: "False",
      },
    },
    {
      overrides: {
        Label106347727: { fontSize: "16px", lineHeight: "24px" },
        Label: { padding: "8px 0px 8px 0px" },
      },
      variantValues: { size: "Default", bottomSpace: "True", topSpace: "True" },
    },
    {
      overrides: {
        Label106347727: { fontSize: "16px", lineHeight: "24px" },
        Label: { padding: "8px 0px 0px 0px" },
      },
      variantValues: {
        size: "Default",
        bottomSpace: "False",
        topSpace: "True",
      },
    },
    {
      overrides: {
        Label106347727: { fontSize: "16px", lineHeight: "24px" },
        Label: { padding: "0px 0px 0px 0px" },
      },
      variantValues: {
        size: "Default",
        bottomSpace: "False",
        topSpace: "False",
      },
    },
    {
      overrides: {
        Label106347727: { fontSize: "20px", lineHeight: "30px" },
        Label: { padding: "0px 0px 10px 0px" },
      },
      variantValues: {
        size: "is-medium",
        bottomSpace: "True",
        topSpace: "False",
      },
    },
    {
      overrides: {
        Label106347727: { fontSize: "20px", lineHeight: "30px" },
        Label: { padding: "10px 0px 10px 0px" },
      },
      variantValues: {
        size: "is-medium",
        bottomSpace: "True",
        topSpace: "True",
      },
    },
    {
      overrides: {
        Label106347727: { fontSize: "20px", lineHeight: "30px" },
        Label: { padding: "10px 0px 0px 0px" },
      },
      variantValues: {
        size: "is-medium",
        bottomSpace: "False",
        topSpace: "True",
      },
    },
    {
      overrides: {
        Label106347727: { fontSize: "20px", lineHeight: "30px" },
        Label: { padding: "0px 0px 0px 0px" },
      },
      variantValues: {
        size: "is-medium",
        bottomSpace: "False",
        topSpace: "False",
      },
    },
    {
      overrides: {
        Label106347727: { fontSize: "24px", lineHeight: "36px" },
        Label: { padding: "0px 0px 12px 0px" },
      },
      variantValues: {
        size: "is-large",
        bottomSpace: "True",
        topSpace: "False",
      },
    },
    {
      overrides: {
        Label106347727: { fontSize: "24px", lineHeight: "36px" },
        Label: { padding: "12px 0px 12px 0px" },
      },
      variantValues: {
        size: "is-large",
        bottomSpace: "True",
        topSpace: "True",
      },
    },
    {
      overrides: {
        Label106347727: { fontSize: "24px", lineHeight: "36px" },
        Label: { padding: "12px 0px 0px 0px" },
      },
      variantValues: {
        size: "is-large",
        bottomSpace: "False",
        topSpace: "True",
      },
    },
    {
      overrides: {
        Label106347727: { fontSize: "24px", lineHeight: "36px" },
        Label: { padding: "0px 0px 0px 0px" },
      },
      variantValues: {
        size: "is-large",
        bottomSpace: "False",
        topSpace: "False",
      },
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
      padding="0px 0px 6px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Label")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(54,54,54,1)"
        lineHeight="18px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Label"
        {...getOverrideProps(overrides, "Label106347727")}
      ></Text>
    </Flex>
  );
}
