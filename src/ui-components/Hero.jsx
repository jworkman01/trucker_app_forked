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
export default function Hero(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Title + Subtitle": {}, "hero-body": {}, Hero: {} },
      variantValues: {
        breakpoint: "Mobile",
        size: "Default",
        color: "Default",
      },
    },
    {
      overrides: { "Title + Subtitle": {}, "hero-body": {}, Hero: {} },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-medium",
        color: "Default",
      },
    },
    {
      overrides: { "Title + Subtitle": {}, "hero-body": {}, Hero: {} },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-large",
        color: "Default",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: {},
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-small",
        color: "Default",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Hero: { backgroundColor: "rgba(0,209,178,1)" },
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
        Hero: { backgroundColor: "rgba(0,209,178,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-medium",
        color: "is-primary",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Hero: { backgroundColor: "rgba(0,209,178,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-large",
        color: "is-primary",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { backgroundColor: "rgba(0,209,178,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-small",
        color: "is-primary",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Hero: { backgroundColor: "rgba(72,95,199,1)" },
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
        Hero: { backgroundColor: "rgba(72,95,199,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-medium",
        color: "is-link",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Hero: { backgroundColor: "rgba(72,95,199,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-large",
        color: "is-link",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { backgroundColor: "rgba(72,95,199,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-small",
        color: "is-link",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Hero: { backgroundColor: "rgba(62,142,208,1)" },
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
        Hero: { backgroundColor: "rgba(62,142,208,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-medium",
        color: "is-info",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Hero: { backgroundColor: "rgba(62,142,208,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-large",
        color: "is-info",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { backgroundColor: "rgba(62,142,208,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-small",
        color: "is-info",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Hero: { backgroundColor: "rgba(72,199,142,1)" },
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
        Hero: { backgroundColor: "rgba(72,199,142,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-medium",
        color: "is-success",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Hero: { backgroundColor: "rgba(72,199,142,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-large",
        color: "is-success",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { backgroundColor: "rgba(72,199,142,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-small",
        color: "is-success",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Hero: { backgroundColor: "rgba(255,224,138,1)" },
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
        Hero: { backgroundColor: "rgba(255,224,138,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-medium",
        color: "is-warning",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Hero: { backgroundColor: "rgba(255,224,138,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-large",
        color: "is-warning",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { backgroundColor: "rgba(255,224,138,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-small",
        color: "is-warning",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Hero: { backgroundColor: "rgba(241,70,104,1)" },
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
        "hero-body": {},
        Hero: { backgroundColor: "rgba(241,70,104,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-medium",
        color: "is-danger",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": {},
        Hero: { backgroundColor: "rgba(241,70,104,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-large",
        color: "is-danger",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { backgroundColor: "rgba(241,70,104,1)" },
      },
      variantValues: {
        breakpoint: "Mobile",
        size: "is-small",
        color: "is-danger",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Hero: { width: "800px" },
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
        "hero-body": { padding: "144px 72px 144px 72px" },
        Hero: { width: "800px" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-medium",
        color: "Default",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "288px 96px 288px 96px" },
        Hero: { width: "800px" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-large",
        color: "Default",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { width: "800px" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-small",
        color: "Default",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Hero: { width: "800px", backgroundColor: "rgba(0,209,178,1)" },
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
        "hero-body": { padding: "144px 72px 144px 72px" },
        Hero: { width: "800px", backgroundColor: "rgba(0,209,178,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-medium",
        color: "is-primary",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "288px 96px 288px 96px" },
        Hero: { width: "800px", backgroundColor: "rgba(0,209,178,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-large",
        color: "is-primary",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { width: "800px", backgroundColor: "rgba(0,209,178,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-small",
        color: "is-primary",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Hero: { width: "800px", backgroundColor: "rgba(72,95,199,1)" },
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
        "hero-body": { padding: "144px 72px 144px 72px" },
        Hero: { width: "800px", backgroundColor: "rgba(72,95,199,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-medium",
        color: "is-link",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "288px 96px 288px 96px" },
        Hero: { width: "800px", backgroundColor: "rgba(72,95,199,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-large",
        color: "is-link",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { width: "800px", backgroundColor: "rgba(72,95,199,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-small",
        color: "is-link",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Hero: { width: "800px", backgroundColor: "rgba(62,142,208,1)" },
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
        "hero-body": { padding: "144px 72px 144px 72px" },
        Hero: { width: "800px", backgroundColor: "rgba(62,142,208,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-medium",
        color: "is-info",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "288px 96px 288px 96px" },
        Hero: { width: "800px", backgroundColor: "rgba(62,142,208,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-large",
        color: "is-info",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { width: "800px", backgroundColor: "rgba(62,142,208,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-small",
        color: "is-info",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Hero: { width: "800px", backgroundColor: "rgba(72,199,142,1)" },
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
        "hero-body": { padding: "144px 72px 144px 72px" },
        Hero: { width: "800px", backgroundColor: "rgba(72,199,142,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-medium",
        color: "is-success",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "288px 96px 288px 96px" },
        Hero: { width: "800px", backgroundColor: "rgba(72,199,142,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-large",
        color: "is-success",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { width: "800px", backgroundColor: "rgba(72,199,142,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-small",
        color: "is-success",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Hero: { width: "800px", backgroundColor: "rgba(255,224,138,1)" },
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
        "hero-body": { padding: "144px 72px 144px 72px" },
        Hero: { width: "800px", backgroundColor: "rgba(255,224,138,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-medium",
        color: "is-warning",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "288px 96px 288px 96px" },
        Hero: { width: "800px", backgroundColor: "rgba(255,224,138,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-large",
        color: "is-warning",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { width: "800px", backgroundColor: "rgba(255,224,138,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-small",
        color: "is-warning",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "48px 48px 48px 48px" },
        Hero: { width: "800px", backgroundColor: "rgba(241,70,104,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "Default",
        color: "is-danger",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "144px 72px 144px 72px" },
        Hero: { width: "800px", backgroundColor: "rgba(241,70,104,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-medium",
        color: "is-danger",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "288px 96px 288px 96px" },
        Hero: { width: "800px", backgroundColor: "rgba(241,70,104,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-large",
        color: "is-danger",
      },
    },
    {
      overrides: {
        "Title + Subtitle": {},
        "hero-body": { padding: "24px 24px 24px 24px" },
        Hero: { width: "800px", backgroundColor: "rgba(241,70,104,1)" },
      },
      variantValues: {
        breakpoint: "Tablet -> FullHD",
        size: "is-small",
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
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Hero")}
    >
      <Flex
        gap="0"
        direction="column"
        justifyContent="center"
        shrink="0"
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
