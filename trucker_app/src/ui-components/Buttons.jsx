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
export default function Buttons(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { " Button5395797": {}, " Button5395798": {}, Buttons: {} },
      variantValues: { alignment: "is-left" },
    },
    {
      overrides: {
        " Button5395797": {},
        " Button5395798": {},
        Buttons: { justifyContent: "center" },
      },
      variantValues: { alignment: "is-centered" },
    },
    {
      overrides: {
        " Button5395797": {},
        " Button5395798": {},
        Buttons: { justifyContent: "flex-end" },
      },
      variantValues: { alignment: "is-right" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="12px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Buttons")}
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
        borderRadius="6px"
        padding="6px 15px 6px 15px"
        backgroundColor="rgba(255,255,255,1)"
        size="Default"
        state="Default"
        is-Rounded="False"
        is-Light="False"
        is-Outlined="False"
        is-Inverted="False"
        {...getOverrideProps(overrides, " Button5395797")}
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
        borderRadius="6px"
        padding="6px 15px 6px 15px"
        backgroundColor="rgba(255,255,255,1)"
        size="Default"
        state="Default"
        is-Rounded="False"
        is-Light="False"
        is-Outlined="False"
        is-Inverted="False"
        {...getOverrideProps(overrides, " Button5395798")}
      ></Button>
    </Flex>
  );
}
