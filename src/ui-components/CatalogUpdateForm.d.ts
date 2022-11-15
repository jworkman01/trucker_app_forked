/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Catalog } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CatalogUpdateFormInputValues = {};
export declare type CatalogUpdateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CatalogUpdateFormOverridesProps = {
    CatalogUpdateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type CatalogUpdateFormProps = React.PropsWithChildren<{
    overrides?: CatalogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    catalog?: Catalog;
    onSubmit?: (fields: CatalogUpdateFormInputValues) => CatalogUpdateFormInputValues;
    onSuccess?: (fields: CatalogUpdateFormInputValues) => void;
    onError?: (fields: CatalogUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CatalogUpdateFormInputValues) => CatalogUpdateFormInputValues;
    onValidate?: CatalogUpdateFormValidationValues;
}>;
export default function CatalogUpdateForm(props: CatalogUpdateFormProps): React.ReactElement;
