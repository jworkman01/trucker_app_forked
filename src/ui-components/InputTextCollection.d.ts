/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { InputTextProps } from "./InputText";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type InputTextCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => InputTextProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function InputTextCollection(props: InputTextCollectionProps): React.ReactElement;
