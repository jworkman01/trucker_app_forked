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
import { Flex } from "@aws-amplify/ui-react";
export default function Containerismaxwidescreen(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Container (place content here)": {},
        Containerismaxwidescreen: {},
      },
      variantValues: { breakpoint: "Mobile -> Tablet", guides: "False" },
    },
    {
      overrides: {
        "Container (place content here)": {},
        Containerismaxwidescreen: {},
      },
      variantValues: { breakpoint: "Mobile -> Tablet", guides: "True" },
    },
    {
      overrides: {
        "Container (place content here)": { width: "960px", shrink: "0" },
        Containerismaxwidescreen: { width: "1024px" },
      },
      variantValues: { breakpoint: "Desktop", guides: "False" },
    },
    {
      overrides: {
        "Container (place content here)": { width: "960px", shrink: "0" },
        Containerismaxwidescreen: { width: "1024px" },
      },
      variantValues: { breakpoint: "Desktop", guides: "True" },
    },
    {
      overrides: {
        "Container (place content here)": { width: "1152px", shrink: "0" },
        Containerismaxwidescreen: { width: "1216px" },
      },
      variantValues: { breakpoint: "Widescreen -> FullHD", guides: "False" },
    },
    {
      overrides: {
        "Container (place content here)": { width: "1152px", shrink: "0" },
        Containerismaxwidescreen: { width: "1216px" },
      },
      variantValues: { breakpoint: "Widescreen -> FullHD", guides: "True" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      width="500px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Containerismaxwidescreen")}
    >
      <Flex
        gap="0"
        direction="column"
        width="500px"
        grow="1"
        basis="500px"
        height="184px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Container (place content here)")}
      ></Flex>
    </Flex>
  );
}
