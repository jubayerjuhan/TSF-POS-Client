import { FieldError, FieldErrorsImpl } from "react-hook-form";
import { AddUserFieldTypes } from "../../../constants/InputFields/user/types";

interface SelectFieldTypes {
  register: (rules?: RegisterOptions) => RefReturn;
  field: AddUserFieldTypes;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<>>;
}
