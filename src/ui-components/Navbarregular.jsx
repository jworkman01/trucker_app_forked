/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Navbarregular(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1110px"
      height="48px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Navbarregular")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(248,249,250,1)"
        {...getOverrideProps(overrides, "navbar-bg")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="22.92%"
        bottom="27.08%"
        left="1.26%"
        right="92.34%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Navbar"
        {...getOverrideProps(overrides, "Navbar")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="329.59px"
        height="16px"
        position="absolute"
        top="16px"
        left="748px"
        {...getOverrideProps(overrides, "navigaltion-item")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(21,37,54,1)"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="87.86%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(108,117,125,1)"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0%"
          bottom="0%"
          left="19.72%"
          right="62.68%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Features"
          {...getOverrideProps(overrides, "Features")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(108,117,125,1)"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0%"
          bottom="0%"
          left="44.9%"
          right="41.14%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Pricing"
          {...getOverrideProps(overrides, "Pricing")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(104,113,122,1)"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0%"
          bottom="0%"
          left="66.45%"
          right="3.21%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Dropdown Link"
          {...getOverrideProps(overrides, "Dropdown Link")}
        ></Text>
        <Icon
          width="6.5927734375px"
          height="6.59185791015625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 6.5927734375,
            height: 6.59185791015625,
          }}
          paths={[
            {
              d: "M0.0440506 0.0516645L4.60656 0L2.30464 2.36008L0 4.71763L0.0440506 0.0516645Z",
              fill: "rgba(104,113,122,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="72.45%"
          bottom="-1.93%"
          left="98.98%"
          right="-0.37%"
          transformOrigin="top left"
          transform="rotate(-134.35deg)"
          {...getOverrideProps(overrides, "Rectangle 49")}
        ></Icon>
      </View>
    </View>
  );
}
