import { FormikErrors, FormikTouched } from "formik";

export interface FormikState<Values> {
    values: Values;
    errors: FormikErrors<Values>;
    touched: FormikTouched<Values>;
    className: string;
    setFieldValue: (
        field: string,
        value: string,
        shouldValidate?: boolean
    ) => Promise<void | FormikErrors<Values>>;
}
