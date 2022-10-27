/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Maprestaurantline(props) {
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
          d: "M18 0L18 20L16 20L16 13L12 13L12 6C12 4.4087 12.6321 2.88258 13.7574 1.75736C14.8826 0.632141 16.4087 1.33227e-15 18 0L18 0ZM16 2.53C15.17 3 14 4.17 14 6L14 11L16 11L16 2.53L16 2.53ZM6 11.9L6 20L4 20L4 11.9C2.87081 11.6691 1.85599 11.0554 1.12714 10.1625C0.398297 9.2697 0.000141065 8.15255 0 7L0 1L2 1L2 8L4 8L4 1L6 1L6 8L8 8L8 1L10 1L10 7C9.99986 8.15255 9.6017 9.2697 8.87286 10.1625C8.14401 11.0554 7.12919 11.6691 6 11.9L6 11.9Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 8.33%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Maprestaurantline")}
    ></Icon>
  );
}
