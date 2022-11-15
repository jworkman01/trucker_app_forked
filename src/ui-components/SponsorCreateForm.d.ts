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
export declare type SponsorCreateFormInputValues = {
    fName?: string;
    lName?: string;
    uName?: string;
    passWd?: string;
    email?: string;
    phoneNumber?: string;
    company?: string;
};
export declare type SponsorCreateFormValidationValues = {
    fName?: ValidationFunction<string>;
    lName?: ValidationFunction<string>;
    uName?: ValidationFunction<string>;
    passWd?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    company?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SponsorCreateFormOverridesProps = {
    SponsorCreateFormGrid?: FormProps<GridProps>;
    fName?: FormProps<TextFieldProps>;
    lName?: FormProps<TextFieldProps>;
    uName?: FormProps<TextFieldProps>;
    passWd?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    phoneNumber?: FormProps<TextFieldProps>;
    company?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SponsorCreateFormProps = React.PropsWithChildren<{
    overrides?: SponsorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SponsorCreateFormInputValues) => SponsorCreateFormInputValues;
    onSuccess?: (fields: SponsorCreateFormInputValues) => void;
    onError?: (fields: SponsorCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SponsorCreateFormInputValues) => SponsorCreateFormInputValues;
    onValidate?: SponsorCreateFormValidationValues;
}>;
export default function SponsorCreateForm(props: SponsorCreateFormProps): React.ReactElement;
