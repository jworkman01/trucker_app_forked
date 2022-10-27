/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SelectOption(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="420px"
      height="38px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SelectOption")}
    >
      <View
        height="38px"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        border="1px SOLID rgba(206,212,218,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "selectBg")}
      ></View>
      <View
        width="16px"
        height="16px"
        position="absolute"
        top="11px"
        right="12px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "chevron-down")}
      >
        <Icon
          width="8px"
          height="4px"
          viewBox={{ minX: 0, minY: 0, width: 8, height: 4 }}
          paths={[
            {
              d: "M0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM4 4L3.29289 4.70711C3.68342 5.09763 4.31658 5.09763 4.70711 4.70711L4 4ZM8.70711 0.707107C9.09763 0.316583 9.09763 -0.316583 8.70711 -0.707107C8.31658 -1.09763 7.68342 -1.09763 7.29289 -0.707107L8.70711 0.707107ZM-0.707107 0.707107L3.29289 4.70711L4.70711 3.29289L0.707107 -0.707107L-0.707107 0.707107ZM4.70711 4.70711L8.70711 0.707107L7.29289 -0.707107L3.29289 3.29289L4.70711 4.70711Z",
              stroke: "rgba(171,181,190,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 2,
            },
          ]}
          position="absolute"
          top="37.5%"
          bottom="37.5%"
          left="25%"
          right="25%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(108,117,125,1)"
        lineHeight="21px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="8px"
        left="15px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Select Menu"
        {...getOverrideProps(overrides, "Select Menu")}
      ></Text>
    </View>
  );
}
