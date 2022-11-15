/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Sponsor } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SponsorUpdateFormInputValues = {
    fName?: string;
    lName?: string;
    uName?: string;
    passWd?: string;
    email?: string;
    phoneNumber?: string;
    accessLevel?: string;
    company?: string;
};
export declare type SponsorUpdateFormValidationValues = {
    fName?: ValidationFunction<string>;
    lName?: ValidationFunction<string>;
    uName?: ValidationFunction<string>;
    passWd?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    accessLevel?: ValidationFunction<string>;
    company?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SponsorUpdateFormOverridesProps = {
    SponsorUpdateFormGrid?: FormProps<GridProps>;
    fName?: FormProps<TextFieldProps>;
    lName?: FormProps<TextFieldProps>;
    uName?: FormProps<TextFieldProps>;
    passWd?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    phoneNumber?: FormProps<TextFieldProps>;
    accessLevel?: FormProps<TextFieldProps>;
    company?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SponsorUpdateFormProps = React.PropsWithChildren<{
    overrides?: SponsorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sponsor?: Sponsor;
    onSubmit?: (fields: SponsorUpdateFormInputValues) => SponsorUpdateFormInputValues;
    onSuccess?: (fields: SponsorUpdateFormInputValues) => void;
    onError?: (fields: SponsorUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SponsorUpdateFormInputValues) => SponsorUpdateFormInputValues;
    onValidate?: SponsorUpdateFormValidationValues;
}>;
export default function SponsorUpdateForm(props: SponsorUpdateFormProps): React.ReactElement;
