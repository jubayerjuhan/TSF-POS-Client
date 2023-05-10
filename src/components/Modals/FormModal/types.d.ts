import { FieldErrors, FieldValues } from "react-hook-form";
import { AddUserFieldTypes } from "../../../constants/InputFields/user/types";

export interface FormModalTypes {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  submitFields: () => void;
  title: string;
  fields: AddUserFieldTypes[];
  errors: FieldErrors<FieldValues>;
  register: (rules?: RegisterOptions) => RefReturn;
  loading?: boolean;
}
