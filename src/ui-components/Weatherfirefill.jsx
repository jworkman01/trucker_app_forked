/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Weatherfirefill(props) {
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
          d: "M7.49936 21.5C5.99651 21.4999 4.52836 21.0483 3.28527 20.2037C2.04217 19.3592 1.08146 18.1606 0.527708 16.7635C-0.0260477 15.3664 -0.14731 13.8352 0.179644 12.3683C0.506598 10.9015 1.26669 9.56668 2.36136 8.537C3.70336 7.274 6.99936 5 6.49936 0C12.4994 4 15.4994 8 9.49936 14C10.4994 14 11.9994 14 14.4994 11.53C14.7694 12.303 14.9994 13.134 14.9994 14C14.9994 15.9891 14.2092 17.8968 12.8027 19.3033C11.3961 20.7098 9.48849 21.5 7.49936 21.5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(18.75%, 6.25%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Weatherfirefill")}
    ></Icon>
  );
}
