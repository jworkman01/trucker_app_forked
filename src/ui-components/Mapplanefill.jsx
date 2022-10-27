/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Mapplanefill(props) {
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
          d: "M11 6.947L19 12L19 14L11 11.474L11 16.834L14 18.5L14 20L9.5 19L5 20L5 18.5L8 16.833L8 11.473L0 14L0 12L8 6.947L8 1.5C8 1.10218 8.15804 0.720644 8.43934 0.43934C8.72064 0.158035 9.10218 0 9.5 0C9.89782 4.44089e-16 10.2794 0.158035 10.5607 0.43934C10.842 0.720644 11 1.10218 11 1.5L11 6.947Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 8.33%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Mapplanefill")}
    ></Icon>
  );
}
