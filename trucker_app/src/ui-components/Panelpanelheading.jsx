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
export default function Panelpanelheading(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Heading: {}, Panelpanelheading: {} },
      variantValues: { color: "Default" },
    },
    {
      overrides: {
        Heading: { color: "rgba(255,255,255,1)" },
        Panelpanelheading: { backgroundColor: "rgba(0,209,178,1)" },
      },
      variantValues: { color: "is-primary" },
    },
    {
      overrides: {
        Heading: { color: "rgba(255,255,255,1)" },
        Panelpanelheading: { backgroundColor: "rgba(72,95,199,1)" },
      },
      variantValues: { color: "is-link" },
    },
    {
      overrides: {
        Heading: { color: "rgba(255,255,255,1)" },
        Panelpanelheading: { backgroundColor: "rgba(62,142,208,1)" },
      },
      variantValues: { color: "is-info" },
    },
    {
      overrides: {
        Heading: { color: "rgba(255,255,255,1)" },
        Panelpanelheading: { backgroundColor: "rgba(72,199,142,1)" },
      },
      variantValues: { color: "is-success" },
    },
    {
      overrides: {
        Heading: { color: "rgba(0,0,0,0.7)" },
        Panelpanelheading: { backgroundColor: "rgba(255,224,138,1)" },
      },
      variantValues: { color: "is-warning" },
    },
    {
      overrides: {
        Heading: { color: "rgba(255,255,255,1)" },
        Panelpanelheading: { backgroundColor: "rgba(241,70,104,1)" },
      },
      variantValues: { color: "is-danger" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      width="500px"
      alignItems="flex-start"
      position="relative"
      padding="15px 20px 15px 20px"
      backgroundColor="rgba(237,237,237,1)"
      {...rest}
      {...getOverrideProps(overrides, "Panelpanelheading")}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(54,54,54,1)"
        lineHeight="25px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="460px"
        grow="1"
        basis="460px"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Repositories"
        {...getOverrideProps(overrides, "Heading")}
      ></Text>
    </Flex>
  );
}
