/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Weathertempfill(props) {
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
          d: "M3 9.255L3 4C3 2.93913 3.42143 1.92172 4.17157 1.17157C4.92172 0.421427 5.93913 1.11022e-15 7 0C8.06087 6.66134e-16 9.07828 0.421427 9.82843 1.17157C10.5786 1.92172 11 2.93913 11 4L11 9.255C12.223 10.1066 13.1423 11.3262 13.6241 12.7365C14.1059 14.1467 14.125 15.6739 13.6788 17.0958C13.2325 18.5176 12.3441 19.76 11.1429 20.642C9.94163 21.524 8.49026 21.9996 7 21.9996C5.50974 21.9996 4.05837 21.524 2.85714 20.642C1.6559 19.76 0.767498 18.5176 0.32123 17.0958C-0.125038 15.6739 -0.105877 14.1467 0.375923 12.7365C0.857723 11.3262 1.77702 10.1066 3 9.255L3 9.255ZM3 15C3 16.0609 3.42143 17.0783 4.17157 17.8284C4.92172 18.5786 5.93913 19 7 19C8.06087 19 9.07828 18.5786 9.82843 17.8284C10.5786 17.0783 11 16.0609 11 15L3 15Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(20.83%, 4.17%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Weathertempfill")}
    ></Icon>
  );
}
