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
export default function ButtonShowonmap(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Show on map": {},
        "Rectangle 140": {},
        ButtonShowonmap: {},
      },
      variantValues: { status: "Off" },
    },
    {
      overrides: {
        "Show on map": {},
        "Rectangle 140": { backgroundColor: "rgba(0,0,0,1)" },
        ButtonShowonmap: {},
      },
      variantValues: { status: "On" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="79px"
      height="12px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ButtonShowonmap")}
    >
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="11.71875px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="17.72%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Show on map"
        {...getOverrideProps(overrides, "Show on map")}
      ></Text>
      <View
        position="absolute"
        top="16.67%"
        bottom="0%"
        left="87.34%"
        right="0%"
        border="1.5px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 140")}
      ></View>
    </View>
  );
}
