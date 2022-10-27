/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Mapmapline(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M1.9795e-07 3L7 0L13 3L19.303 0.299C19.3791 0.266384 19.4621 0.253169 19.5445 0.260542C19.627 0.267916 19.7063 0.295646 19.7754 0.341245C19.8445 0.386844 19.9012 0.448884 19.9404 0.521798C19.9796 0.594712 20.0001 0.676217 20 0.759L20 17L13 20L7 17L0.697 19.701C0.620914 19.7336 0.537919 19.7468 0.455466 19.7395C0.373012 19.7321 0.293679 19.7044 0.224587 19.6588C0.155495 19.6132 0.0988058 19.5511 0.059607 19.4782C0.0204082 19.4053 -7.34563e-05 19.3238 1.9795e-07 19.241L1.9795e-07 3ZM14 17.395L18 15.681L18 3.033L14 4.747L14 17.395ZM12 17.264L12 4.736L8 2.736L8 15.264L12 17.264ZM6 15.253L6 2.605L2 4.319L2 16.967L6 15.253Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Mapmapline")}
    ></Icon>
  );
}
