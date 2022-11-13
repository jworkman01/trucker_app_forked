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
export default function Containerisfluid(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Containerisfluid: {} }, variantValues: { guides: "False" } },
    { overrides: { Containerisfluid: {} }, variantValues: { guides: "True" } },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="500px"
      position="relative"
      padding="0px 32px 0px 32px"
      {...rest}
      {...getOverrideProps(overrides, "Containerisfluid")}
    ></Flex>
  );
}
