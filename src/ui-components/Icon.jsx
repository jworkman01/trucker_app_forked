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
import { Text, View } from "@aws-amplify/ui-react";
export default function Icon(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { glyph: {}, Icon: { width: "16px", height: "16px" } },
      variantValues: { containerSize: "Small", iconSize: "Default" },
    },
    {
      overrides: { glyph: {}, Icon: {} },
      variantValues: { containerSize: "Default", iconSize: "Default" },
    },
    {
      overrides: {
        glyph: {
          fontSize: "21.280000686645508px",
          lineHeight: "21.280000686645508px",
          width: "21.28px",
          height: "21.28px",
          top: "calc(50% - 10.64px - 0.36px)",
          left: "calc(50% - 10.64px - 0.36px)",
        },
        Icon: {},
      },
      variantValues: { containerSize: "Default", iconSize: "Large" },
    },
    {
      overrides: { glyph: {}, Icon: { width: "32px", height: "32px" } },
      variantValues: { containerSize: "Medium", iconSize: "Default" },
    },
    {
      overrides: {
        glyph: {
          fontSize: "21.280000686645508px",
          lineHeight: "21.280000686645508px",
          width: "21.28px",
          height: "21.28px",
          top: "calc(50% - 10.64px - 0.36px)",
          left: "calc(50% - 10.64px - 0.36px)",
        },
        Icon: { width: "32px", height: "32px" },
      },
      variantValues: { containerSize: "Medium", iconSize: "Large" },
    },
    {
      overrides: {
        glyph: {
          fontSize: "32px",
          lineHeight: "32px",
          width: "32px",
          height: "32px",
          top: "calc(50% - 16px - 0px)",
          left: "calc(50% - 16px - 0px)",
        },
        Icon: { width: "32px", height: "32px" },
      },
      variantValues: { containerSize: "Medium", iconSize: "2x" },
    },
    {
      overrides: { glyph: {}, Icon: { width: "48px", height: "48px" } },
      variantValues: { containerSize: "Large", iconSize: "Default" },
    },
    {
      overrides: {
        glyph: {
          fontSize: "21.280000686645508px",
          lineHeight: "21.280000686645508px",
          width: "21.28px",
          height: "21.28px",
          top: "calc(50% - 10.64px - 0.36px)",
          left: "calc(50% - 10.64px - 0.36px)",
        },
        Icon: { width: "48px", height: "48px" },
      },
      variantValues: { containerSize: "Large", iconSize: "Large" },
    },
    {
      overrides: {
        glyph: {
          fontSize: "32px",
          lineHeight: "32px",
          width: "32px",
          height: "32px",
          top: "calc(50% - 16px - 0px)",
          left: "calc(50% - 16px - 0px)",
        },
        Icon: { width: "48px", height: "48px" },
      },
      variantValues: { containerSize: "Large", iconSize: "2x" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="24px"
      height="24px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Icon")}
    >
      <Text
        fontFamily="Font Awesome 6 Free"
        fontSize="16px"
        fontWeight="400"
        color="rgba(74,74,74,1)"
        lineHeight="16px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="16px"
        height="16px"
        position="absolute"
        top="calc(50% - 8px - 0px)"
        left="calc(50% - 8px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="star"
        {...getOverrideProps(overrides, "glyph")}
      ></Text>
    </View>
  );
}
