/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function GroupgroupPaginationItem(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(222,226,230,1)"
      padding="11px 13px 11px 13px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "GroupgroupPaginationItem")}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(119,73,248,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="1"
        {...getOverrideProps(overrides, "1")}
      ></Text>
    </Flex>
  );
}