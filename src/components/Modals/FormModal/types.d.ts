import { FieldValues, UseFormHandleSubmit } from "react-hook-form";
import { AddUserFieldTypes } from "../../../constants/InputFields/AddUser/types";

export interface FormModalTypes {
  submitFields: () => void;
  title: string;
  fields: AddUserFieldTypes[];
  preselectOption?: string;
  register: (rules?: RegisterOptions) => RefReturn;
}
