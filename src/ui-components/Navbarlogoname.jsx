/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Navbarlogoname(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1110px"
      height="48px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Navbarlogoname")}
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
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="25%"
        bottom="25%"
        left="5.23%"
        right="88.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Navbar"
        {...getOverrideProps(overrides, "Navbar")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="32px"
        height="32px"
        position="absolute"
        top="8px"
        left="16px"
        {...getOverrideProps(overrides, "logo")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(119,73,248,1)"
          {...getOverrideProps(overrides, "Rectangle 47")}
        ></View>
        <Text
          fontFamily="Mulish"
          fontSize="18px"
          fontWeight="900"
          color="rgba(248,249,250,1)"
          lineHeight="17px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="21.88%"
          bottom="25%"
          left="28.13%"
          right="31.25%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="B"
          {...getOverrideProps(overrides, "B")}
        ></Text>
      </View>
    </View>
  );
}
