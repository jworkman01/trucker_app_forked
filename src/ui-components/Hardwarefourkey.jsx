/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Hardwarefourkey(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="48px"
      height="48px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Hardwarefourkey")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="36px"
        height="36px"
        position="absolute"
        top="6px"
        left="6px"
        {...getOverrideProps(overrides, "Group 4070")}
      >
        <View
          width="40px"
          height="40px"
          position="absolute"
          top="-2px"
          left="-2px"
          border="4px SOLID rgba(0,0,0,1)"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Rectangle 370")}
        ></View>
        <Icon
          width="12px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 12, height: 20 }}
          paths={[
            {
              d: "M6.9767 20C6.9767 21.1046 7.87213 22 8.9767 22C10.0813 22 10.9767 21.1046 10.9767 20L6.9767 20ZM8.9767 0L10.9767 0C10.9767 -0.875257 10.4076 -1.64884 9.57199 -1.90935C8.7364 -2.16987 7.82849 -1.85679 7.33107 -1.13662L8.9767 0ZM0 12.9967L-1.64563 11.8601C-1.8764 12.1942 -2 12.5906 -2 12.9967L0 12.9967ZM0 15.0199L-2 15.0199C-2 16.1245 -1.10457 17.0199 4.44089e-16 17.0199L0 15.0199ZM12 17.0199C13.1046 17.0199 14 16.1245 14 15.0199C14 13.9153 13.1046 13.0199 12 13.0199L12 17.0199ZM10.9767 20L10.9767 0L6.9767 0L6.9767 20L10.9767 20ZM7.33107 -1.13662L-1.64563 11.8601L1.64563 14.1333L10.6223 1.13662L7.33107 -1.13662ZM-2 12.9967L-2 15.0199L2 15.0199L2 12.9967L-2 12.9967ZM0 17.0199L12 17.0199L12 13.0199L0 13.0199L0 17.0199Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 4,
            },
          ]}
          position="absolute"
          top="22.22%"
          bottom="22.22%"
          left="33.33%"
          right="33.33%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}
