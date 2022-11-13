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
import Ghostbutton from "./Ghostbutton";
import { Flex } from "@aws-amplify/ui-react";
import LevelLogo from "./LevelLogo";
export default function Centeredlevel(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Ghost button140944547": {},
        "level-item140944546": {},
        "Ghost button140944693": {},
        "level-item140944566": {},
        ".level/Logo": {},
        "level-item140944596": {},
        "Ghost button140944719": {},
        "level-item140944569": {},
        "Ghost button140944737": {},
        "level-item140944572": {},
        Centeredlevel: {},
      },
      variantValues: { breakpoint: "Tablet -> FullHD" },
    },
    {
      overrides: {
        "Ghost button140944547": {},
        "level-item140944546": {
          shrink: "0",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        "Ghost button140944693": {},
        "level-item140944566": {
          shrink: "0",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        ".level/Logo": {},
        "level-item140944596": {
          shrink: "0",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        "Ghost button140944719": {},
        "level-item140944569": {
          shrink: "0",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        "Ghost button140944737": {},
        "level-item140944572": {
          shrink: "0",
          alignSelf: "stretch",
          objectFit: "cover",
        },
        Centeredlevel: { gap: "12px", width: "360px", direction: "column" },
      },
      variantValues: { breakpoint: "Mobile" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      width="800px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Centeredlevel")}
    >
      <Flex
        gap="0"
        direction="column"
        width="160px"
        alignItems="center"
        grow="1"
        basis="160px"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "level-item140944546")}
      >
        <Ghostbutton
          display="flex"
          gap="12px"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="6px"
          padding="7px 16px 7px 16px"
          size="Default"
          state="Default"
          is-Rounded="False"
          is-Light="False"
          is-Outlined="False"
          is-Inverted="False"
          {...getOverrideProps(overrides, "Ghost button140944547")}
        ></Ghostbutton>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="160px"
        alignItems="center"
        grow="1"
        basis="160px"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "level-item140944566")}
      >
        <Ghostbutton
          display="flex"
          gap="12px"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="6px"
          padding="7px 16px 7px 16px"
          size="Default"
          state="Default"
          is-Rounded="False"
          is-Light="False"
          is-Outlined="False"
          is-Inverted="False"
          {...getOverrideProps(overrides, "Ghost button140944693")}
        ></Ghostbutton>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="160px"
        alignItems="center"
        grow="1"
        basis="160px"
        height="28px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "level-item140944596")}
      >
        <LevelLogo
          display="flex"
          gap="10px"
          direction="column"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, ".level/Logo")}
        ></LevelLogo>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="160px"
        alignItems="center"
        grow="1"
        basis="160px"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "level-item140944569")}
      >
        <Ghostbutton
          display="flex"
          gap="12px"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="6px"
          padding="7px 16px 7px 16px"
          size="Default"
          state="Default"
          is-Rounded="False"
          is-Light="False"
          is-Outlined="False"
          is-Inverted="False"
          {...getOverrideProps(overrides, "Ghost button140944719")}
        ></Ghostbutton>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="160px"
        alignItems="center"
        grow="1"
        basis="160px"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "level-item140944572")}
      >
        <Ghostbutton
          display="flex"
          gap="12px"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="6px"
          padding="7px 16px 7px 16px"
          size="Default"
          state="Default"
          is-Rounded="False"
          is-Light="False"
          is-Outlined="False"
          is-Inverted="False"
          {...getOverrideProps(overrides, "Ghost button140944737")}
        ></Ghostbutton>
      </Flex>
    </Flex>
  );
}
