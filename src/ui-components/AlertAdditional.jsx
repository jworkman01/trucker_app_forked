/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function AlertAdditional(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="column"
      position="relative"
      border="1px SOLID rgba(163,207,187,1)"
      borderRadius="8px"
      padding="23px 23px 23px 23px"
      backgroundColor="rgba(209,231,221,1)"
      {...rest}
      {...getOverrideProps(overrides, "AlertAdditional")}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(15,81,50,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Well done!"
        {...getOverrideProps(overrides, "Well done!")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(15,81,50,1)"
        lineHeight="28px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="965px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        {...getOverrideProps(
          overrides,
          "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        )}
      ></Text>
      <Icon
        width="917px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 917, height: 1 }}
        paths={[
          {
            d: "M0 0L917 0L917 -1L0 -1L0 0Z",
            stroke: "rgba(163,207,187,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Line 21")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(15,81,50,1)"
        lineHeight="28px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="949px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
        {...getOverrideProps(
          overrides,
          "Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
        )}
      ></Text>
    </Flex>
  );
}
