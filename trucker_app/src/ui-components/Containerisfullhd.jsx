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
export default function Containerisfullhd(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Container (place content here)": {},
        Containerisfullhd: {},
      },
      variantValues: { breakpoint: "Mobile -> Widescreen", guides: "False" },
    },
    {
      overrides: {
        "Container (place content here)": {},
        Containerisfullhd: {},
      },
      variantValues: { breakpoint: "Mobile -> Widescreen", guides: "True" },
    },
    {
      overrides: {
        "Container (place content here)": { width: "1344px", shrink: "0" },
        Containerisfullhd: { width: "1408px" },
      },
      variantValues: { breakpoint: "FullHD", guides: "False" },
    },
    {
      overrides: {
        "Container (place content here)": { width: "1344px", shrink: "0" },
        Containerisfullhd: { width: "1408px" },
      },
      variantValues: { breakpoint: "FullHD", guides: "True" },
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
      {...getOverrideProps(overrides, "Containerisfullhd")}
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
