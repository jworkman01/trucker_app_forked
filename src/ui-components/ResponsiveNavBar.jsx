/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, useBreakpointValue } from "@aws-amplify/ui-react";
import NavBar from "./NavBar";
export default function ResponsiveNavBar(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: { NavBar: {}, ResponsiveNavBar: {} },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: { NavBar: {}, ResponsiveNavBar: {} },
      variantValues: { breakpoint: "xl" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    xl: "xl",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "ResponsiveNavBar")}
    >
      <NavBar
        display="flex"
        gap="20px"
        direction="row"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
    </Flex>
  );
}
