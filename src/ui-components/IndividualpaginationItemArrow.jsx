/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function IndividualpaginationItemArrow(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(222,226,230,1)"
      borderRadius="4px"
      padding="11px 13px 11px 13px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "IndividualpaginationItemArrow")}
    >
      <View
        width="16px"
        height="16px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "chevrons-right")}
      >
        <Icon
          width="3.333984375px"
          height="6.6669921875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 3.333984375,
            height: 6.6669921875,
          }}
          paths={[
            {
              d: "M-0.707107 5.95956C-1.09763 6.35008 -1.09763 6.98325 -0.707107 7.37377C-0.316583 7.7643 0.316583 7.7643 0.707107 7.37377L-0.707107 5.95956ZM3.33333 3.33333L4.04044 4.04044C4.43096 3.64992 4.43096 3.01675 4.04044 2.62623L3.33333 3.33333ZM0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM0.707107 7.37377L4.04044 4.04044L2.62623 2.62623L-0.707107 5.95956L0.707107 7.37377ZM4.04044 2.62623L0.707107 -0.707107L-0.707107 0.707107L2.62623 4.04044L4.04044 2.62623Z",
              stroke: "rgba(119,73,248,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 2,
            },
          ]}
          position="absolute"
          top="29.17%"
          bottom="29.17%"
          left="54.17%"
          right="25%"
          {...getOverrideProps(overrides, "Vector12612895")}
        ></Icon>
        <Icon
          width="3.333984375px"
          height="6.6669921875px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 3.333984375,
            height: 6.6669921875,
          }}
          paths={[
            {
              d: "M-0.707107 5.95956C-1.09763 6.35008 -1.09763 6.98325 -0.707107 7.37377C-0.316583 7.7643 0.316582 7.7643 0.707107 7.37377L-0.707107 5.95956ZM3.33333 3.33333L4.04044 4.04044C4.22798 3.8529 4.33333 3.59855 4.33333 3.33333C4.33333 3.06812 4.22798 2.81376 4.04044 2.62623L3.33333 3.33333ZM0.707107 -0.707107C0.316582 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316582 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM0.707107 7.37377L4.04044 4.04044L2.62623 2.62623L-0.707107 5.95956L0.707107 7.37377ZM4.04044 2.62623L0.707107 -0.707107L-0.707107 0.707107L2.62623 4.04044L4.04044 2.62623Z",
              stroke: "rgba(119,73,248,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 2,
            },
          ]}
          position="absolute"
          top="29.17%"
          bottom="29.17%"
          left="25%"
          right="54.17%"
          {...getOverrideProps(overrides, "Vector12612896")}
        ></Icon>
      </View>
    </Flex>
  );
}
