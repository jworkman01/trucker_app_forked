/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AdminCreateFormInputValues = {
    fName?: string;
    lName?: string;
    uName?: string;
    email?: string;
    passWd?: string;
    phoneNumber?: string;
};
export declare type AdminCreateFormValidationValues = {
    fName?: ValidationFunction<string>;
    lName?: ValidationFunction<string>;
    uName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    passWd?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdminCreateFormOverridesProps = {
    AdminCreateFormGrid?: FormProps<GridProps>;
    fName?: FormProps<TextFieldProps>;
    lName?: FormProps<TextFieldProps>;
    uName?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    passWd?: FormProps<TextFieldProps>;
    phoneNumber?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdminCreateFormProps = React.PropsWithChildren<{
    overrides?: AdminCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AdminCreateFormInputValues) => AdminCreateFormInputValues;
    onSuccess?: (fields: AdminCreateFormInputValues) => void;
    onError?: (fields: AdminCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AdminCreateFormInputValues) => AdminCreateFormInputValues;
    onValidate?: AdminCreateFormValidationValues;
}>;
export default function AdminCreateForm(props: AdminCreateFormProps): React.ReactElement;
