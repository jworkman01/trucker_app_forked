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
export declare type OrdersCreateFormInputValues = {
    price?: number;
    quantity?: number;
};
export declare type OrdersCreateFormValidationValues = {
    price?: ValidationFunction<number>;
    quantity?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrdersCreateFormOverridesProps = {
    OrdersCreateFormGrid?: FormProps<GridProps>;
    price?: FormProps<TextFieldProps>;
    quantity?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrdersCreateFormProps = React.PropsWithChildren<{
    overrides?: OrdersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrdersCreateFormInputValues) => OrdersCreateFormInputValues;
    onSuccess?: (fields: OrdersCreateFormInputValues) => void;
    onError?: (fields: OrdersCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: OrdersCreateFormInputValues) => OrdersCreateFormInputValues;
    onValidate?: OrdersCreateFormValidationValues;
}>;
export default function OrdersCreateForm(props: OrdersCreateFormProps): React.ReactElement;
