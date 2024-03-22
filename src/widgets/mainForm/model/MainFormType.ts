import ImgType from "@/features/renovationForm/model/imgType";
import { FormikErrors, FormikTouched } from "formik";
import { FormValuesType } from "@/entities/form/model/valuesTypes.ts";

interface MainFormType {
  values: FormValuesType;
  errors: FormikErrors<FormValuesType>;
  touched: FormikTouched<FormValuesType>;
  setRenovationType: (text: string) => void;
  renovationType: string;
  deleteImg: (id: number) => void;
  imgs: ImgType[];
  addImg: (img: ImgType) => void;
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean,
  ) => Promise<void | FormikErrors<FormValuesType>>;
}

export default MainFormType;
