/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Othersleafline(props) {
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
          d: "M18 0L18 2C18 11.627 12.627 16 6 16L2.243 16C2.08 16.912 2 17.907 2 19L0 19C0 17.637 0.116 16.4 0.346 15.268C0.116 13.974 0 12.218 0 10C0 4.477 4.477 0 10 0C12 0 14 1 18 0ZM10 2C5.582 2 2 5.582 2 10C2 10.362 2.003 10.711 2.01 11.046C3.264 9.068 5.101 7.505 7.504 6.132L8.496 7.868C5.641 9.5 3.747 11.354 2.776 14L6 14C12.015 14 15.871 10.027 15.997 2.388C14.625 2.521 13.35 2.436 11.777 2.2C10.627 2.027 10.401 2 10 2Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Othersleafline")}
    ></Icon>
  );
}
