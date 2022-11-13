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
import Subtitle from "./Subtitle";
import { Flex } from "@aws-amplify/ui-react";
import Successbutton from "./Successbutton";
export default function Levellevelright(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Subtitle140943962: {},
        "level-item140943961": {},
        Subtitle140943964: {},
        "level-item140943963": {},
        Subtitle140943966: {},
        "level-item140943965": {},
        Subtitle140943968: {},
        "level-item140943967": {},
        "Success button": {},
        "level-item140943969": {},
        Levellevelright: {},
      },
      variantValues: { breakpoint: "Tablet -> FullHD" },
    },
    {
      overrides: {
        Subtitle140943962: {},
        "level-item140943961": {},
        Subtitle140943964: {},
        "level-item140943963": {},
        Subtitle140943966: {},
        "level-item140943965": {},
        Subtitle140943968: {},
        "level-item140943967": {},
        "Success button": {},
        "level-item140943969": {},
        Levellevelright: { direction: "column" },
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
      gap="12px"
      width="fit-content"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Levellevelright")}
    >
      <Flex
        gap="0"
        direction="column"
        shrink="0"
        height="18px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "level-item140943961")}
      >
        <Subtitle
          display="flex"
          gap="10px"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          size="is-6"
          is-Strong="False"
          bottomSpace="False"
          {...getOverrideProps(overrides, "Subtitle140943962")}
        ></Subtitle>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        shrink="0"
        height="20px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "level-item140943963")}
      >
        <Subtitle
          display="flex"
          gap="10px"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          size="is-6"
          is-Strong="False"
          bottomSpace="False"
          {...getOverrideProps(overrides, "Subtitle140943964")}
        ></Subtitle>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        shrink="0"
        height="20px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "level-item140943965")}
      >
        <Subtitle
          display="flex"
          gap="10px"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          size="is-6"
          is-Strong="False"
          bottomSpace="False"
          {...getOverrideProps(overrides, "Subtitle140943966")}
        ></Subtitle>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        shrink="0"
        height="20px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "level-item140943967")}
      >
        <Subtitle
          display="flex"
          gap="10px"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          size="is-6"
          is-Strong="False"
          bottomSpace="False"
          {...getOverrideProps(overrides, "Subtitle140943968")}
        ></Subtitle>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        shrink="0"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "level-item140943969")}
      >
        <Successbutton
          display="flex"
          gap="12px"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(72,199,142,1)"
          borderRadius="6px"
          padding="6px 15px 6px 15px"
          backgroundColor="rgba(72,199,142,1)"
          size="Default"
          state="Default"
          is-Rounded="False"
          is-Light="False"
          is-Outlined="False"
          is-Inverted="False"
          {...getOverrideProps(overrides, "Success button")}
        ></Successbutton>
      </Flex>
    </Flex>
  );
}
