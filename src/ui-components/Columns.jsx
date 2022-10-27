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
export default function Columns(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Columns: {} }, variantValues: { variableGap: "is-3" } },
    {
      overrides: { Columns: { gap: "0" } },
      variantValues: { variableGap: "is-0" },
    },
    {
      overrides: { Columns: { gap: "4px" } },
      variantValues: { variableGap: "is-1" },
    },
    {
      overrides: { Columns: { gap: "8px" } },
      variantValues: { variableGap: "is-2" },
    },
    {
      overrides: { Columns: { gap: "16px" } },
      variantValues: { variableGap: "is-4" },
    },
    {
      overrides: { Columns: { gap: "20px" } },
      variantValues: { variableGap: "is-5" },
    },
    {
      overrides: { Columns: { gap: "24px" } },
      variantValues: { variableGap: "is-6" },
    },
    {
      overrides: { Columns: { gap: "28px" } },
      variantValues: { variableGap: "is-7" },
    },
    {
      overrides: { Columns: { gap: "32px" } },
      variantValues: { variableGap: "is-8" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="12px"
      width="fit-content"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Columns")}
    ></Flex>
  );
}
