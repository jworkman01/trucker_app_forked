/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type TitleProps = React.PropsWithChildren<Partial<FlexProps> & {
    bottomSpace?: "False" | "True";
    size?: "is-1" | "is-2" | "is-3 (Default)" | "is-4" | "is-5" | "is-6";
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Title(props: TitleProps): React.ReactElement;
