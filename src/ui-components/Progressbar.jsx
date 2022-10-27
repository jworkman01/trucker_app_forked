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
import { View } from "@aws-amplify/ui-react";
export default function Progressbar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Bar segment7336589": {},
        "Bar segment80943178": {},
        Progressbar: {},
      },
      variantValues: { color: "Default", size: "Default" },
    },
    {
      overrides: {
        "Bar segment7336589": {},
        "Bar segment80943178": {},
        Progressbar: { height: "12px" },
      },
      variantValues: { color: "Default", size: "is-small" },
    },
    {
      overrides: {
        "Bar segment7336589": {},
        "Bar segment80943178": {},
        Progressbar: { height: "20px" },
      },
      variantValues: { color: "Default", size: "is-medium" },
    },
    {
      overrides: {
        "Bar segment7336589": {},
        "Bar segment80943178": {},
        Progressbar: { height: "24px" },
      },
      variantValues: { color: "Default", size: "is-large" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(0,209,178,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(0,209,178,1)" },
        Progressbar: {},
      },
      variantValues: { color: "is-primary", size: "Default" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(0,209,178,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(0,209,178,1)" },
        Progressbar: { height: "12px" },
      },
      variantValues: { color: "is-primary", size: "is-small" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(0,209,178,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(0,209,178,1)" },
        Progressbar: { height: "20px" },
      },
      variantValues: { color: "is-primary", size: "is-medium" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(0,209,178,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(0,209,178,1)" },
        Progressbar: { height: "24px" },
      },
      variantValues: { color: "is-primary", size: "is-large" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(72,95,199,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(72,95,199,1)" },
        Progressbar: {},
      },
      variantValues: { color: "is-link", size: "Default" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(72,95,199,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(72,95,199,1)" },
        Progressbar: { height: "12px" },
      },
      variantValues: { color: "is-link", size: "is-small" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(72,95,199,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(72,95,199,1)" },
        Progressbar: { height: "20px" },
      },
      variantValues: { color: "is-link", size: "is-medium" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(72,95,199,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(72,95,199,1)" },
        Progressbar: { height: "24px" },
      },
      variantValues: { color: "is-link", size: "is-large" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(62,142,208,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(62,142,208,1)" },
        Progressbar: {},
      },
      variantValues: { color: "is-info", size: "Default" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(62,142,208,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(62,142,208,1)" },
        Progressbar: { height: "12px" },
      },
      variantValues: { color: "is-info", size: "is-small" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(62,142,208,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(62,142,208,1)" },
        Progressbar: { height: "20px" },
      },
      variantValues: { color: "is-info", size: "is-medium" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(62,142,208,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(62,142,208,1)" },
        Progressbar: { height: "24px" },
      },
      variantValues: { color: "is-info", size: "is-large" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(72,199,142,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(72,199,142,1)" },
        Progressbar: {},
      },
      variantValues: { color: "is-success", size: "Default" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(72,199,142,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(72,199,142,1)" },
        Progressbar: { height: "12px" },
      },
      variantValues: { color: "is-success", size: "is-small" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(72,199,142,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(72,199,142,1)" },
        Progressbar: { height: "20px" },
      },
      variantValues: { color: "is-success", size: "is-medium" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(72,199,142,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(72,199,142,1)" },
        Progressbar: { height: "24px" },
      },
      variantValues: { color: "is-success", size: "is-large" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(255,224,138,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(255,224,138,1)" },
        Progressbar: {},
      },
      variantValues: { color: "is-warning", size: "Default" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(255,224,138,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(255,224,138,1)" },
        Progressbar: { height: "12px" },
      },
      variantValues: { color: "is-warning", size: "is-small" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(255,224,138,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(255,224,138,1)" },
        Progressbar: { height: "20px" },
      },
      variantValues: { color: "is-warning", size: "is-medium" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(255,224,138,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(255,224,138,1)" },
        Progressbar: { height: "24px" },
      },
      variantValues: { color: "is-warning", size: "is-large" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(241,70,104,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(241,70,104,1)" },
        Progressbar: {},
      },
      variantValues: { color: "is-danger", size: "Default" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(241,70,104,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(241,70,104,1)" },
        Progressbar: { height: "12px" },
      },
      variantValues: { color: "is-danger", size: "is-small" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(241,70,104,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(241,70,104,1)" },
        Progressbar: { height: "20px" },
      },
      variantValues: { color: "is-danger", size: "is-medium" },
    },
    {
      overrides: {
        "Bar segment7336589": { backgroundColor: "rgba(241,70,104,1)" },
        "Bar segment80943178": { backgroundColor: "rgba(241,70,104,1)" },
        Progressbar: { height: "24px" },
      },
      variantValues: { color: "is-danger", size: "is-large" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="360px"
      height="16px"
      overflow="hidden"
      position="relative"
      borderRadius="9999px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(237,237,237,1)"
      {...rest}
      {...getOverrideProps(overrides, "Progressbar")}
    >
      <View
        position="absolute"
        top="0px"
        bottom="0px"
        left="0%"
        right="80%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(74,74,74,1)"
        {...getOverrideProps(overrides, "Bar segment7336589")}
      ></View>
      <View
        position="absolute"
        top="0px"
        bottom="0px"
        left="20%"
        right="60%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(74,74,74,1)"
        {...getOverrideProps(overrides, "Bar segment80943178")}
      ></View>
    </View>
  );
}
