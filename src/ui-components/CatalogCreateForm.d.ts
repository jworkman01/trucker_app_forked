/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CatalogCreateFormInputValues = {};
export declare type CatalogCreateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CatalogCreateFormOverridesProps = {
    CatalogCreateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type CatalogCreateFormProps = React.PropsWithChildren<{
    overrides?: CatalogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CatalogCreateFormInputValues) => CatalogCreateFormInputValues;
    onSuccess?: (fields: CatalogCreateFormInputValues) => void;
    onError?: (fields: CatalogCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CatalogCreateFormInputValues) => CatalogCreateFormInputValues;
    onValidate?: CatalogCreateFormValidationValues;
}>;
export default function CatalogCreateForm(props: CatalogCreateFormProps): React.ReactElement;
