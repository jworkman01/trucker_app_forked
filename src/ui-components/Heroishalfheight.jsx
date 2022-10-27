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
import TitleSubtitle from "./TitleSubtitle";
import { Flex } from "@aws-amplify/ui-react";
export default function Heroishalfheight(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Heroishalfheight: {},
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "Default",
        color: "Default",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Heroishalfheight: { backgroundColor: "rgba(0,209,178,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "Default",
        color: "is-primary",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Heroishalfheight: { backgroundColor: "rgba(72,95,199,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "Default",
        color: "is-link",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Heroishalfheight: { backgroundColor: "rgba(62,142,208,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "Default",
        color: "is-info",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Heroishalfheight: { backgroundColor: "rgba(72,199,142,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "Default",
        color: "is-success",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Heroishalfheight: { backgroundColor: "rgba(255,224,138,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "Default",
        color: "is-warning",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Heroishalfheight: { backgroundColor: "rgba(241,70,104,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "Default",
        color: "is-danger",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Heroishalfheight: { width: "800px" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "Default",
        color: "Default",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Heroishalfheight: {
          width: "800px",
          backgroundColor: "rgba(0,209,178,1)",
        },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "Default",
        color: "is-primary",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Heroishalfheight: {
          width: "800px",
          backgroundColor: "rgba(72,95,199,1)",
        },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "Default",
        color: "is-link",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Heroishalfheight: {
          width: "800px",
          backgroundColor: "rgba(62,142,208,1)",
        },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "Default",
        color: "is-info",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Heroishalfheight: {
          width: "800px",
          backgroundColor: "rgba(72,199,142,1)",
        },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "Default",
        color: "is-success",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Heroishalfheight: {
          width: "800px",
          backgroundColor: "rgba(255,224,138,1)",
        },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "Default",
        color: "is-warning",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Heroishalfheight: {
          width: "800px",
          backgroundColor: "rgba(241,70,104,1)",
        },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "Default",
        color: "is-danger",
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
      height="512px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Heroishalfheight")}
    >
      <Flex
        gap="0"
        direction="column"
        height="512px"
        justifyContent="center"
        grow="1"
        basis="512px"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="48px 24px 48px 24px"
        {...getOverrideProps(overrides, "hero-body")}
      >
        <TitleSubtitle
          display="flex"
          gap="0"
          direction="column"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          is-Spaced="False"
          {...getOverrideProps(overrides, "Title + Subtitle")}
        ></TitleSubtitle>
      </Flex>
    </Flex>
  );
}
