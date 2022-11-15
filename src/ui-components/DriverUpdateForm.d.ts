/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Driver } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DriverUpdateFormInputValues = {
    fName?: string;
    lName?: string;
    uName?: string;
    email?: string;
    passWd?: string;
    points?: number;
    phoneNumber?: string;
};
export declare type DriverUpdateFormValidationValues = {
    fName?: ValidationFunction<string>;
    lName?: ValidationFunction<string>;
    uName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    passWd?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
    phoneNumber?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DriverUpdateFormOverridesProps = {
    DriverUpdateFormGrid?: FormProps<GridProps>;
    fName?: FormProps<TextFieldProps>;
    lName?: FormProps<TextFieldProps>;
    uName?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    passWd?: FormProps<TextFieldProps>;
    points?: FormProps<TextFieldProps>;
    phoneNumber?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DriverUpdateFormProps = React.PropsWithChildren<{
    overrides?: DriverUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    driver?: Driver;
    onSubmit?: (fields: DriverUpdateFormInputValues) => DriverUpdateFormInputValues;
    onSuccess?: (fields: DriverUpdateFormInputValues) => void;
    onError?: (fields: DriverUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DriverUpdateFormInputValues) => DriverUpdateFormInputValues;
    onValidate?: DriverUpdateFormValidationValues;
}>;
export default function DriverUpdateForm(props: DriverUpdateFormProps): React.ReactElement;
