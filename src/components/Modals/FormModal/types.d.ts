import { FieldErrors, FieldValues } from "react-hook-form";
import { AddUserFieldTypes } from "../../../constants/InputFields/user/types";

export interface FormModalTypes {
  submitFields: () => void;
  title: string;
  fields: AddUserFieldTypes[];
  errors: FieldErrors<FieldValues>;
  register: (rules?: RegisterOptions) => RefReturn;
}
