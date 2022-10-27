/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function Block(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      width="360px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 24px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Block")}
    ></Flex>
  );
}
