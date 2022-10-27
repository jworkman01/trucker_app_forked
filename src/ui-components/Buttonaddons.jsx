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
import { Button, Flex } from "@aws-amplify/ui-react";
export default function Buttonaddons(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        " Button83333024": {},
        " Button83333025": {},
        " Button83333029": {},
        Buttonaddons: {},
      },
      variantValues: { alignment: "is-left", size: "Default" },
    },
    {
      overrides: {
        " Button83333024": {},
        " Button83333025": {},
        " Button83333029": {},
        Buttonaddons: { justifyContent: "center" },
      },
      variantValues: { alignment: "is-centered", size: "Default" },
    },
    {
      overrides: {
        " Button83333024": {},
        " Button83333025": {},
        " Button83333029": {},
        Buttonaddons: { justifyContent: "flex-end" },
      },
      variantValues: { alignment: "is-right", size: "Default" },
    },
    {
      overrides: {
        " Button83333024": {
          height: "50px",
          borderRadius: "7.5px 0px 0px 7.5px",
          size: "is-medium",
        },
        " Button83333025": { height: "50px", size: "is-medium" },
        " Button83333029": {
          height: "50px",
          borderRadius: "0px 7.5px 7.5px 0px",
          size: "is-medium",
        },
        Buttonaddons: {},
      },
      variantValues: { alignment: "is-left", size: "Medium" },
    },
    {
      overrides: {
        " Button83333024": {
          height: "50px",
          borderRadius: "7.5px 0px 0px 7.5px",
          size: "is-medium",
        },
        " Button83333025": { height: "50px", size: "is-medium" },
        " Button83333029": {
          height: "50px",
          borderRadius: "0px 7.5px 7.5px 0px",
          size: "is-medium",
        },
        Buttonaddons: { justifyContent: "center" },
      },
      variantValues: { alignment: "is-centered", size: "Medium" },
    },
    {
      overrides: {
        " Button83333024": {
          height: "50px",
          borderRadius: "7.5px 0px 0px 7.5px",
          size: "is-medium",
        },
        " Button83333025": { height: "50px", size: "is-medium" },
        " Button83333029": {
          height: "50px",
          borderRadius: "0px 7.5px 7.5px 0px",
          size: "is-medium",
        },
        Buttonaddons: { justifyContent: "flex-end" },
      },
      variantValues: { alignment: "is-right", size: "Medium" },
    },
    {
      overrides: {
        " Button83333024": {
          height: "60px",
          borderRadius: "9px 0px 0px 9px",
          size: "is-large",
        },
        " Button83333025": { height: "60px", size: "is-large" },
        " Button83333029": {
          height: "60px",
          borderRadius: "0px 9px 9px 0px",
          size: "is-large",
        },
        Buttonaddons: {},
      },
      variantValues: { alignment: "is-left", size: "Large" },
    },
    {
      overrides: {
        " Button83333024": {
          height: "60px",
          borderRadius: "9px 0px 0px 9px",
          size: "is-large",
        },
        " Button83333025": { height: "60px", size: "is-large" },
        " Button83333029": {
          height: "60px",
          borderRadius: "0px 9px 9px 0px",
          size: "is-large",
        },
        Buttonaddons: { justifyContent: "center" },
      },
      variantValues: { alignment: "is-centered", size: "Large" },
    },
    {
      overrides: {
        " Button83333024": {
          height: "60px",
          borderRadius: "9px 0px 0px 9px",
          size: "is-large",
        },
        " Button83333025": { height: "60px", size: "is-large" },
        " Button83333029": {
          height: "60px",
          borderRadius: "0px 9px 9px 0px",
          size: "is-large",
        },
        Buttonaddons: { justifyContent: "flex-end" },
      },
      variantValues: { alignment: "is-right", size: "Large" },
    },
    {
      overrides: {
        " Button83333024": {
          height: "30px",
          borderRadius: "2px 0px 0px 2px",
          size: "is-small",
        },
        " Button83333025": { height: "30px", size: "is-small" },
        " Button83333029": {
          height: "30px",
          borderRadius: "0px 2px 2px 0px",
          size: "is-small",
        },
        Buttonaddons: {},
      },
      variantValues: { alignment: "is-left", size: "Small" },
    },
    {
      overrides: {
        " Button83333024": {
          height: "30px",
          borderRadius: "2px 0px 0px 2px",
          size: "is-small",
        },
        " Button83333025": { height: "30px", size: "is-small" },
        " Button83333029": {
          height: "30px",
          borderRadius: "0px 2px 2px 0px",
          size: "is-small",
        },
        Buttonaddons: { justifyContent: "center" },
      },
      variantValues: { alignment: "is-centered", size: "Small" },
    },
    {
      overrides: {
        " Button83333024": {
          height: "30px",
          borderRadius: "2px 0px 0px 2px",
          size: "is-small",
        },
        " Button83333025": { height: "30px", size: "is-small" },
        " Button83333029": {
          height: "30px",
          borderRadius: "0px 2px 2px 0px",
          size: "is-small",
        },
        Buttonaddons: { justifyContent: "flex-end" },
      },
      variantValues: { alignment: "is-right", size: "Small" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="-1px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Buttonaddons")}
    >
      <Button
        display="flex"
        gap="12px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        border="1px SOLID rgba(219,219,219,1)"
        borderRadius="6px 0px 0px 6px"
        padding="6px 15px 6px 15px"
        backgroundColor="rgba(255,255,255,1)"
        size="Default"
        state="Default"
        is-Rounded="False"
        is-Light="False"
        is-Outlined="False"
        is-Inverted="False"
        {...getOverrideProps(overrides, " Button83333024")}
      ></Button>
      <Button
        display="flex"
        gap="12px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        border="1px SOLID rgba(219,219,219,1)"
        padding="6px 15px 6px 15px"
        backgroundColor="rgba(255,255,255,1)"
        size="Default"
        state="Default"
        is-Rounded="False"
        is-Light="False"
        is-Outlined="False"
        is-Inverted="False"
        {...getOverrideProps(overrides, " Button83333025")}
      ></Button>
      <Button
        display="flex"
        gap="12px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        border="1px SOLID rgba(219,219,219,1)"
        borderRadius="0px 6px 6px 0px"
        padding="6px 15px 6px 15px"
        backgroundColor="rgba(255,255,255,1)"
        size="Default"
        state="Default"
        is-Rounded="False"
        is-Light="False"
        is-Outlined="False"
        is-Inverted="False"
        {...getOverrideProps(overrides, " Button83333029")}
      ></Button>
    </Flex>
  );
}
