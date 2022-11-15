/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import HomePageBox from "./HomePageBox";
export default function HomePage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(217,217,217,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomePage")}
    >
      <Text
        fontFamily="Playfair Display"
        fontSize="64px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="85.31199645996094px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="184px"
        left="328px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome back, userName!"
        {...getOverrideProps(overrides, "Welcome back, userName!")}
      ></Text>
      <HomePageBox
        width="391px"
        height="571px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="339px"
        left="74px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HomePageBox91120")}
      ></HomePageBox>
      <HomePageBox
        width="391px"
        height="571px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="339px"
        left="524px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HomePageBox1880")}
      ></HomePageBox>
      <HomePageBox
        width="391px"
        height="571px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="339px"
        left="974px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HomePageBox1881")}
      ></HomePageBox>
    </View>
  );
}
