/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function ControladdonsButtonleft(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ControladdonsButtonleft")}
    >
      <Button
        display="flex"
        gap="12px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(219,219,219,1)"
        borderRadius="6px 0px 0px 6px"
        padding="6px 15px 6px 15px"
        backgroundColor="rgba(255,255,255,1)"
        size="Default"
        state="Default"
        is-Rounded="False"
        is-Light="False"
        is-Outlined="False"
        is-Inverted="False"
        {...getOverrideProps(overrides, " Button")}
      ></Button>
    </Flex>
  );
}