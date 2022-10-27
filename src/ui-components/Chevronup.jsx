/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Chevronup(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="16px"
      height="16px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
      paths={[
        {
          d: "M6.14645 0.146447C6.34171 -0.0488155 6.65829 -0.0488155 6.85355 0.146447L12.8536 6.14645C13.0488 6.34171 13.0488 6.65829 12.8536 6.85355C12.6583 7.04882 12.3417 7.04882 12.1464 6.85355L6.5 1.20711L0.853553 6.85355C0.658291 7.04882 0.341709 7.04882 0.146447 6.85355C-0.0488155 6.65829 -0.0488155 6.34171 0.146447 6.14645L6.14645 0.146447Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "evenodd",
          style: { transform: "translate(9.38%, 28.13%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Chevronup")}
    ></Icon>
  );
}
