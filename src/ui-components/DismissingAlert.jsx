/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function DismissingAlert(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      width="488px"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(255,230,156,1)"
      borderRadius="8px"
      padding="9px 9px 9px 9px"
      backgroundColor="rgba(255,243,205,1)"
      {...rest}
      {...getOverrideProps(overrides, "DismissingAlert")}
    >
      <Flex
        gap="10px"
        width="423.5px"
        alignItems="flex-start"
        grow="1"
        basis="423.5px"
        height="35px"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "DismissingContent")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(102,77,3,1)"
          lineHeight="14.0625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="403.5px"
          grow="1"
          basis="403.5px"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Holy guacamole! You should check in on some of those fields below."
          {...getOverrideProps(
            overrides,
            "Holy guacamole! You should check in on some of those fields below."
          )}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="34.5px"
        position="relative"
        padding="12px 12px 12px 12px"
        {...getOverrideProps(overrides, "x")}
      >
        <Icon
          width="10.5px"
          height="10.5px"
          viewBox={{ minX: 0, minY: 0, width: 10.5, height: 10.5 }}
          paths={[
            {
              d: "M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.25 4.18934L9.21967 0.21967C9.51256 -0.0732233 9.98744 -0.0732233 10.2803 0.21967C10.5732 0.512563 10.5732 0.987437 10.2803 1.28033L6.31066 5.25L10.2803 9.21967C10.5732 9.51256 10.5732 9.98744 10.2803 10.2803C9.98744 10.5732 9.51256 10.5732 9.21967 10.2803L5.25 6.31066L1.28033 10.2803C0.987437 10.5732 0.512563 10.5732 0.21967 10.2803C-0.0732233 9.98744 -0.0732233 9.51256 0.21967 9.21967L4.18934 5.25L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z",
              fill: "rgba(102,77,3,1)",
              fillRule: "nonzero",
            },
          ]}
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "x (Stroke)")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
