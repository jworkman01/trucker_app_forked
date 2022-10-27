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
import Panelpaneltab from "./Panelpaneltab";
import { Flex } from "@aws-amplify/ui-react";
export default function Panelpaneltabs(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "panel-tab144153370": {},
        "panel-tab144153396": {},
        "panel-tab144153426": {},
        "panel-tab144153460": {},
        "panel-tab144153498": {},
        Panelpaneltabs: {},
      },
      variantValues: { color: "Default" },
    },
    {
      overrides: {
        "panel-tab144153370": { color: "is-primary" },
        "panel-tab144153396": { color: "is-primary" },
        "panel-tab144153426": { color: "is-primary" },
        "panel-tab144153460": { color: "is-primary" },
        "panel-tab144153498": { color: "is-primary" },
        Panelpaneltabs: {},
      },
      variantValues: { color: "is-primary" },
    },
    {
      overrides: {
        "panel-tab144153370": { color: "is-link" },
        "panel-tab144153396": { color: "is-link" },
        "panel-tab144153426": { color: "is-link" },
        "panel-tab144153460": { color: "is-link" },
        "panel-tab144153498": { color: "is-link" },
        Panelpaneltabs: {},
      },
      variantValues: { color: "is-link" },
    },
    {
      overrides: {
        "panel-tab144153370": { color: "is-info" },
        "panel-tab144153396": { color: "is-info" },
        "panel-tab144153426": { color: "is-info" },
        "panel-tab144153460": { color: "is-info" },
        "panel-tab144153498": { color: "is-info" },
        Panelpaneltabs: {},
      },
      variantValues: { color: "is-info" },
    },
    {
      overrides: {
        "panel-tab144153370": { color: "is-success" },
        "panel-tab144153396": { color: "is-success" },
        "panel-tab144153426": { color: "is-success" },
        "panel-tab144153460": { color: "is-success" },
        "panel-tab144153498": { color: "is-success" },
        Panelpaneltabs: {},
      },
      variantValues: { color: "is-success" },
    },
    {
      overrides: {
        "panel-tab144153370": { color: "is-warning" },
        "panel-tab144153396": { color: "is-warning" },
        "panel-tab144153426": { color: "is-warning" },
        "panel-tab144153460": { color: "is-warning" },
        "panel-tab144153498": { color: "is-warning" },
        Panelpaneltabs: {},
      },
      variantValues: { color: "is-warning" },
    },
    {
      overrides: {
        "panel-tab144153370": { color: "is-danger" },
        "panel-tab144153396": { color: "is-danger" },
        "panel-tab144153426": { color: "is-danger" },
        "panel-tab144153460": { color: "is-danger" },
        "panel-tab144153498": { color: "is-danger" },
        Panelpaneltabs: {},
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
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(237,237,237,1)"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Panelpaneltabs")}
    >
      <Panelpaneltab
        display="flex"
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="38px"
        position="relative"
        padding="6px 6px 6px 6px"
        color="Default"
        is-Active="True"
        {...getOverrideProps(overrides, "panel-tab144153370")}
      ></Panelpaneltab>
      <Panelpaneltab
        display="flex"
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="38px"
        position="relative"
        border="1px SOLID rgba(219,219,219,1)"
        padding="6px 6px 6px 6px"
        color="Default"
        is-Active="False"
        {...getOverrideProps(overrides, "panel-tab144153396")}
      ></Panelpaneltab>
      <Panelpaneltab
        display="flex"
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="38px"
        position="relative"
        border="1px SOLID rgba(219,219,219,1)"
        padding="6px 6px 6px 6px"
        color="Default"
        is-Active="False"
        {...getOverrideProps(overrides, "panel-tab144153426")}
      ></Panelpaneltab>
      <Panelpaneltab
        display="flex"
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="38px"
        position="relative"
        border="1px SOLID rgba(219,219,219,1)"
        padding="6px 6px 6px 6px"
        color="Default"
        is-Active="False"
        {...getOverrideProps(overrides, "panel-tab144153460")}
      ></Panelpaneltab>
      <Panelpaneltab
        display="flex"
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="38px"
        position="relative"
        border="1px SOLID rgba(219,219,219,1)"
        padding="6px 6px 6px 6px"
        color="Default"
        is-Active="False"
        {...getOverrideProps(overrides, "panel-tab144153498")}
      ></Panelpaneltab>
    </Flex>
  );
}
