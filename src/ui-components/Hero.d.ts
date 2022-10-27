/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type HeroProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "Mobile" | "Tablet -> FullHD";
    color?: "Default" | "is-danger" | "is-info" | "is-link" | "is-primary" | "is-success" | "is-warning";
    size?: "Default" | "is-large" | "is-medium" | "is-small";
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Hero(props: HeroProps): React.ReactElement;
