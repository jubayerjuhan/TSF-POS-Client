import { FieldError, FieldErrorsImpl } from "react-hook-form";

export type InputFieldType = {
  register: (rules?: RegisterOptions) => RefReturn;
  type: string;
  name?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  placeholder: string;
};