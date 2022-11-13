/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Squareimage from "./Squareimage";
import { Flex, View } from "@aws-amplify/ui-react";
import Paragraph from "./Paragraph";
export default function NestableMedia(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      width="360px"
      alignItems="flex-start"
      position="relative"
      padding="12px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "NestableMedia")}
    >
      <Flex
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="64px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "media-left")}
      >
        <Squareimage
          display="flex"
          gap="0"
          direction="column"
          shrink="0"
          height="64px"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          size="is-64x64"
          is-Rounded="False"
          {...getOverrideProps(overrides, "Square image")}
        ></Squareimage>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="280px"
        grow="1"
        basis="279.9997253417969px"
        height="237px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "media-content")}
      >
        <Paragraph
          display="flex"
          gap="0"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 16px 0px"
          {...getOverrideProps(overrides, "Element 1")}
        ></Paragraph>
      </Flex>
      <View
        width="360px"
        height="1px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(219,219,219,1)"
        {...getOverrideProps(overrides, "Border")}
      ></View>
    </Flex>
  );
}
