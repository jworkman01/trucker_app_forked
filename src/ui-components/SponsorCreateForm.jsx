/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Sponsor } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function SponsorCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fName: undefined,
    lName: undefined,
    uName: undefined,
    passWd: undefined,
    email: undefined,
    phoneNumber: undefined,
    company: undefined,
  };
  const [fName, setFName] = React.useState(initialValues.fName);
  const [lName, setLName] = React.useState(initialValues.lName);
  const [uName, setUName] = React.useState(initialValues.uName);
  const [passWd, setPassWd] = React.useState(initialValues.passWd);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [company, setCompany] = React.useState(initialValues.company);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFName(initialValues.fName);
    setLName(initialValues.lName);
    setUName(initialValues.uName);
    setPassWd(initialValues.passWd);
    setEmail(initialValues.email);
    setPhoneNumber(initialValues.phoneNumber);
    setCompany(initialValues.company);
    setErrors({});
  };
  const validations = {
    fName: [{ type: "Required" }],
    lName: [{ type: "Required" }],
    uName: [{ type: "Required" }],
    passWd: [{ type: "Required" }],
    email: [{ type: "Required" }],
    phoneNumber: [],
    company: [{ type: "Required" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fName,
          lName,
          uName,
          passWd,
          email,
          phoneNumber,
          company,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Sponsor(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "SponsorCreateForm")}
    >
      <TextField
        label="First Name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName: value,
              lName,
              uName,
              passWd,
              email,
              phoneNumber,
              company,
            };
            const result = onChange(modelFields);
            value = result?.fName ?? value;
          }
          if (errors.fName?.hasError) {
            runValidationTasks("fName", value);
          }
          setFName(value);
        }}
        onBlur={() => runValidationTasks("fName", fName)}
        errorMessage={errors.fName?.errorMessage}
        hasError={errors.fName?.hasError}
        {...getOverrideProps(overrides, "fName")}
      ></TextField>
      <TextField
        label="Last Name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName: value,
              uName,
              passWd,
              email,
              phoneNumber,
              company,
            };
            const result = onChange(modelFields);
            value = result?.lName ?? value;
          }
          if (errors.lName?.hasError) {
            runValidationTasks("lName", value);
          }
          setLName(value);
        }}
        onBlur={() => runValidationTasks("lName", lName)}
        errorMessage={errors.lName?.errorMessage}
        hasError={errors.lName?.hasError}
        {...getOverrideProps(overrides, "lName")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              uName: value,
              passWd,
              email,
              phoneNumber,
              company,
            };
            const result = onChange(modelFields);
            value = result?.uName ?? value;
          }
          if (errors.uName?.hasError) {
            runValidationTasks("uName", value);
          }
          setUName(value);
        }}
        onBlur={() => runValidationTasks("uName", uName)}
        errorMessage={errors.uName?.errorMessage}
        hasError={errors.uName?.hasError}
        {...getOverrideProps(overrides, "uName")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              uName,
              passWd: value,
              email,
              phoneNumber,
              company,
            };
            const result = onChange(modelFields);
            value = result?.passWd ?? value;
          }
          if (errors.passWd?.hasError) {
            runValidationTasks("passWd", value);
          }
          setPassWd(value);
        }}
        onBlur={() => runValidationTasks("passWd", passWd)}
        errorMessage={errors.passWd?.errorMessage}
        hasError={errors.passWd?.hasError}
        {...getOverrideProps(overrides, "passWd")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              uName,
              passWd,
              email: value,
              phoneNumber,
              company,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              uName,
              passWd,
              email,
              phoneNumber: value,
              company,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="Company"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              uName,
              passWd,
              email,
              phoneNumber,
              company: value,
            };
            const result = onChange(modelFields);
            value = result?.company ?? value;
          }
          if (errors.company?.hasError) {
            runValidationTasks("company", value);
          }
          setCompany(value);
        }}
        onBlur={() => runValidationTasks("company", company)}
        errorMessage={errors.company?.errorMessage}
        hasError={errors.company?.hasError}
        {...getOverrideProps(overrides, "company")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
