import { FieldErrors, FieldValues } from "react-hook-form";
import { FieldTypes } from "../../../types/FieldTypes/FieldTypes";

export interface FormModalTypes {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  submitFields: () => void;
  title: string;
  fields: FieldTypes[];
  errors: FieldErrors<FieldValues>;
  register: (rules?: RegisterOptions) => RefReturn;
  loading?: boolean;
}
