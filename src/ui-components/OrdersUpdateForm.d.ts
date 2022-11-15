/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Orders } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrdersUpdateFormInputValues = {
    price?: number;
    quantity?: number;
};
export declare type OrdersUpdateFormValidationValues = {
    price?: ValidationFunction<number>;
    quantity?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrdersUpdateFormOverridesProps = {
    OrdersUpdateFormGrid?: FormProps<GridProps>;
    price?: FormProps<TextFieldProps>;
    quantity?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrdersUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrdersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    orders?: Orders;
    onSubmit?: (fields: OrdersUpdateFormInputValues) => OrdersUpdateFormInputValues;
    onSuccess?: (fields: OrdersUpdateFormInputValues) => void;
    onError?: (fields: OrdersUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: OrdersUpdateFormInputValues) => OrdersUpdateFormInputValues;
    onValidate?: OrdersUpdateFormValidationValues;
}>;
export default function OrdersUpdateForm(props: OrdersUpdateFormProps): React.ReactElement;
