import { SelectOptionType } from "../../constants/InputFields/user/types";

export interface FieldTypes {
  name: string;
  label: string;
  type: "text" | "select" | "number" | "phone" | "email" | "password";
  placeholder: string;
  options?: SelectOptionType[];
}
