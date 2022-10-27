/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Weathermoonfill(props) {
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
          d: "M9.38 0C8.64313 0.686621 8.05211 1.51462 7.64219 2.43462C7.23227 3.35461 7.01185 4.34775 6.99408 5.35477C6.97632 6.3618 7.16156 7.36209 7.53877 8.29598C7.91598 9.22986 8.47743 10.0782 9.18962 10.7904C9.9018 11.5026 10.7501 12.064 11.684 12.4412C12.6179 12.8184 13.6182 13.0037 14.6252 12.9859C15.6323 12.9681 16.6254 12.7477 17.5454 12.3378C18.4654 11.9279 19.2934 11.3369 19.98 10.6C19.662 15.835 15.316 19.981 10.001 19.981C4.477 19.981 0 15.504 0 9.981C0 4.666 4.146 0.32 9.38 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.41%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Weathermoonfill")}
    ></Icon>
  );
}
