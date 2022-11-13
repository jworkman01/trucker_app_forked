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
export default function Help(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "This is a help text": {}, Help: {} },
      variantValues: { topSpace: "True", color: "Default" },
    },
    {
      overrides: {
        "This is a help text": { color: "rgba(0,209,178,1)" },
        Help: {},
      },
      variantValues: { topSpace: "True", color: "is-primary" },
    },
    {
      overrides: {
        "This is a help text": { color: "rgba(72,95,199,1)" },
        Help: {},
      },
      variantValues: { topSpace: "True", color: "is-link" },
    },
    {
      overrides: {
        "This is a help text": { color: "rgba(62,142,208,1)" },
        Help: {},
      },
      variantValues: { topSpace: "True", color: "is-info" },
    },
    {
      overrides: {
        "This is a help text": { color: "rgba(72,199,142,1)" },
        Help: {},
      },
      variantValues: { topSpace: "True", color: "is-success" },
    },
    {
      overrides: {
        "This is a help text": { color: "rgba(255,224,138,1)" },
        Help: {},
      },
      variantValues: { topSpace: "True", color: "is-warning" },
    },
    {
      overrides: {
        "This is a help text": { color: "rgba(241,70,104,1)" },
        Help: {},
      },
      variantValues: { topSpace: "True", color: "is-danger" },
    },
    {
      overrides: {
        "This is a help text": {},
        Help: { padding: "0px 0px 0px 0px" },
      },
      variantValues: { topSpace: "False", color: "Default" },
    },
    {
      overrides: {
        "This is a help text": { color: "rgba(0,209,178,1)" },
        Help: { padding: "0px 0px 0px 0px" },
      },
      variantValues: { topSpace: "False", color: "is-primary" },
    },
    {
      overrides: {
        "This is a help text": { color: "rgba(72,95,199,1)" },
        Help: { padding: "0px 0px 0px 0px" },
      },
      variantValues: { topSpace: "False", color: "is-link" },
    },
    {
      overrides: {
        "This is a help text": { color: "rgba(62,142,208,1)" },
        Help: { padding: "0px 0px 0px 0px" },
      },
      variantValues: { topSpace: "False", color: "is-info" },
    },
    {
      overrides: {
        "This is a help text": { color: "rgba(72,199,142,1)" },
        Help: { padding: "0px 0px 0px 0px" },
      },
      variantValues: { topSpace: "False", color: "is-success" },
    },
    {
      overrides: {
        "This is a help text": { color: "rgba(255,224,138,1)" },
        Help: { padding: "0px 0px 0px 0px" },
      },
      variantValues: { topSpace: "False", color: "is-warning" },
    },
    {
      overrides: {
        "This is a help text": { color: "rgba(241,70,104,1)" },
        Help: { padding: "0px 0px 0px 0px" },
      },
      variantValues: { topSpace: "False", color: "is-danger" },
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
      padding="4px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Help")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(74,74,74,1)"
        lineHeight="18px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="This is a help text"
        {...getOverrideProps(overrides, "This is a help text")}
      ></Text>
    </Flex>
  );
}
