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
export default function Delete(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Bar6936708: {},
        Bar6936709: {},
        "Delete icon": {},
        Delete: {},
      },
      variantValues: { size: "Default", state: "Default" },
    },
    {
      overrides: {
        Bar6936708: {},
        Bar6936709: {},
        "Delete icon": {},
        Delete: { backgroundColor: "rgba(10,10,10,0.3)" },
      },
      variantValues: { size: "Default", state: "Hover" },
    },
    {
      overrides: {
        Bar6936708: {},
        Bar6936709: {},
        "Delete icon": {},
        Delete: { backgroundColor: "rgba(10,10,10,0.4)" },
      },
      variantValues: { size: "Default", state: "Active" },
    },
    {
      overrides: {
        Bar6936708: {
          top: "0%",
          bottom: "71.72%",
          left: "20%",
          right: "-33.14%",
          transform: "rotate(45deg)",
        },
        Bar6936709: {
          top: "80%",
          bottom: "-8.28%",
          left: "0%",
          right: "-13.14%",
          transform: "rotate(-45deg)",
        },
        "Delete icon": {
          width: "7.07px",
          height: "7.07px",
          top: "4.5px",
          left: "4.5px",
        },
        Delete: { width: "16px", height: "16px", borderRadius: "8px" },
      },
      variantValues: { size: "Small", state: "Default" },
    },
    {
      overrides: {
        Bar6936708: {
          top: "0%",
          bottom: "71.72%",
          left: "20%",
          right: "-33.14%",
          transform: "rotate(45deg)",
        },
        Bar6936709: {
          top: "80%",
          bottom: "-8.28%",
          left: "0%",
          right: "-13.14%",
          transform: "rotate(-45deg)",
        },
        "Delete icon": {
          width: "7.07px",
          height: "7.07px",
          top: "4.5px",
          left: "4.5px",
        },
        Delete: {
          width: "16px",
          height: "16px",
          borderRadius: "8px",
          backgroundColor: "rgba(10,10,10,0.3)",
        },
      },
      variantValues: { size: "Small", state: "Hover" },
    },
    {
      overrides: {
        Bar6936708: {
          top: "0%",
          bottom: "71.72%",
          left: "20%",
          right: "-33.14%",
          transform: "rotate(45deg)",
        },
        Bar6936709: {
          top: "80%",
          bottom: "-8.28%",
          left: "0%",
          right: "-13.14%",
          transform: "rotate(-45deg)",
        },
        "Delete icon": {
          width: "7.07px",
          height: "7.07px",
          top: "4.5px",
          left: "4.5px",
        },
        Delete: {
          width: "16px",
          height: "16px",
          borderRadius: "8px",
          backgroundColor: "rgba(10,10,10,0.4)",
        },
      },
      variantValues: { size: "Small", state: "Active" },
    },
    {
      overrides: {
        Bar6936708: {
          top: "0%",
          bottom: "79.8%",
          left: "14.31%",
          right: "-35.49%",
          transform: "rotate(45deg)",
        },
        Bar6936709: {
          top: "85.71%",
          bottom: "-5.92%",
          left: "0%",
          right: "-21.18%",
          transform: "rotate(-45deg)",
        },
        "Delete icon": {
          width: "9.9px",
          height: "9.9px",
          top: "7px",
          left: "7px",
        },
        Delete: { width: "24px", height: "24px", borderRadius: "16px" },
      },
      variantValues: { size: "Medium", state: "Default" },
    },
    {
      overrides: {
        Bar6936708: {
          top: "0%",
          bottom: "79.8%",
          left: "14.31%",
          right: "-35.49%",
          transform: "rotate(45deg)",
        },
        Bar6936709: {
          top: "85.71%",
          bottom: "-5.92%",
          left: "0%",
          right: "-21.18%",
          transform: "rotate(-45deg)",
        },
        "Delete icon": {
          width: "9.9px",
          height: "9.9px",
          top: "7px",
          left: "7px",
        },
        Delete: {
          width: "24px",
          height: "24px",
          borderRadius: "16px",
          backgroundColor: "rgba(10,10,10,0.3)",
        },
      },
      variantValues: { size: "Medium", state: "Hover" },
    },
    {
      overrides: {
        Bar6936708: {
          top: "0%",
          bottom: "79.8%",
          left: "14.31%",
          right: "-35.49%",
          transform: "rotate(45deg)",
        },
        Bar6936709: {
          top: "85.71%",
          bottom: "-5.92%",
          left: "0%",
          right: "-21.18%",
          transform: "rotate(-45deg)",
        },
        "Delete icon": {
          width: "9.9px",
          height: "9.9px",
          top: "7px",
          left: "7px",
        },
        Delete: {
          width: "24px",
          height: "24px",
          borderRadius: "16px",
          backgroundColor: "rgba(10,10,10,0.4)",
        },
      },
      variantValues: { size: "Medium", state: "Active" },
    },
    {
      overrides: {
        Bar6936708: {
          top: "0%",
          bottom: "84.28%",
          left: "11.13%",
          right: "-36.81%",
          transform: "rotate(45deg)",
        },
        Bar6936709: {
          top: "88.89%",
          bottom: "-4.6%",
          left: "0%",
          right: "-25.69%",
          transform: "rotate(-45deg)",
        },
        "Delete icon": {
          width: "12.73px",
          height: "12.73px",
          top: "9.6px",
          left: "9.6px",
        },
        Delete: { width: "32px", height: "32px", borderRadius: "16px" },
      },
      variantValues: { size: "Large", state: "Default" },
    },
    {
      overrides: {
        Bar6936708: {
          top: "0%",
          bottom: "84.28%",
          left: "11.13%",
          right: "-36.81%",
          transform: "rotate(45deg)",
        },
        Bar6936709: {
          top: "88.89%",
          bottom: "-4.6%",
          left: "0%",
          right: "-25.69%",
          transform: "rotate(-45deg)",
        },
        "Delete icon": {
          width: "12.73px",
          height: "12.73px",
          top: "9.6px",
          left: "9.6px",
        },
        Delete: {
          width: "32px",
          height: "32px",
          borderRadius: "16px",
          backgroundColor: "rgba(10,10,10,0.3)",
        },
      },
      variantValues: { size: "Large", state: "Hover" },
    },
    {
      overrides: {
        Bar6936708: {
          top: "0%",
          bottom: "84.28%",
          left: "11.13%",
          right: "-36.81%",
          transform: "rotate(45deg)",
        },
        Bar6936709: {
          top: "88.89%",
          bottom: "-4.6%",
          left: "0%",
          right: "-25.69%",
          transform: "rotate(-45deg)",
        },
        "Delete icon": {
          width: "12.73px",
          height: "12.73px",
          top: "9.6px",
          left: "9.6px",
        },
        Delete: {
          width: "32px",
          height: "32px",
          borderRadius: "16px",
          backgroundColor: "rgba(10,10,10,0.4)",
        },
      },
      variantValues: { size: "Large", state: "Active" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="20px"
      height="20px"
      overflow="hidden"
      position="relative"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(10,10,10,0.2)"
      {...rest}
      {...getOverrideProps(overrides, "Delete")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="8.49px"
        height="8.49px"
        position="absolute"
        top="5.76px"
        left="5.76px"
        {...getOverrideProps(overrides, "Delete icon")}
      >
        <View
          position="absolute"
          top="83.33%"
          bottom="-6.9%"
          left="0.01%"
          right="-17.85%"
          transformOrigin="top left"
          transform="rotate(-45deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Bar6936708")}
        ></View>
        <View
          position="absolute"
          top="100%"
          bottom="-23.57%"
          left="83.33%"
          right="-101.17%"
          transformOrigin="top left"
          transform="rotate(-135deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Bar6936709")}
        ></View>
      </View>
    </View>
  );
}
