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
export default function Section(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Section: {} },
      variantValues: {
        breakpoint: "Mobile -> Tablet",
        size: "Default",
        guides: "False",
      },
    },
    {
      overrides: { Section: {} },
      variantValues: {
        breakpoint: "Mobile -> Tablet",
        size: "Default",
        guides: "True",
      },
    },
    {
      overrides: { Section: { padding: "48px 48px 48px 48px" } },
      variantValues: {
        breakpoint: "Desktop -> FullHD",
        size: "Default",
        guides: "False",
      },
    },
    {
      overrides: { Section: { padding: "48px 48px 48px 48px" } },
      variantValues: {
        breakpoint: "Desktop -> FullHD",
        size: "Default",
        guides: "True",
      },
    },
    {
      overrides: { Section: {} },
      variantValues: {
        breakpoint: "Mobile -> Tablet",
        size: "is-medium",
        guides: "False",
      },
    },
    {
      overrides: { Section: {} },
      variantValues: {
        breakpoint: "Mobile -> Tablet",
        size: "is-medium",
        guides: "True",
      },
    },
    {
      overrides: { Section: { padding: "144px 72px 144px 72px" } },
      variantValues: {
        breakpoint: "Desktop -> FullHD",
        size: "is-medium",
        guides: "False",
      },
    },
    {
      overrides: { Section: { padding: "144px 72px 144px 72px" } },
      variantValues: {
        breakpoint: "Desktop -> FullHD",
        size: "is-medium",
        guides: "True",
      },
    },
    {
      overrides: { Section: {} },
      variantValues: {
        breakpoint: "Mobile -> Tablet",
        size: "is-large",
        guides: "False",
      },
    },
    {
      overrides: { Section: {} },
      variantValues: {
        breakpoint: "Mobile -> Tablet",
        size: "is-large",
        guides: "True",
      },
    },
    {
      overrides: { Section: { padding: "288px 96px 288px 96px" } },
      variantValues: {
        breakpoint: "Desktop -> FullHD",
        size: "is-large",
        guides: "False",
      },
    },
    {
      overrides: { Section: { padding: "288px 96px 288px 96px" } },
      variantValues: {
        breakpoint: "Desktop -> FullHD",
        size: "is-large",
        guides: "True",
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="360px"
      position="relative"
      padding="48px 24px 48px 24px"
      {...rest}
      {...getOverrideProps(overrides, "Section")}
    ></Flex>
  );
}
