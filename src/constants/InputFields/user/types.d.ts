export interface AddUserFieldTypes {
  name: string;
  label: string;
  type: "text" | "select" | "number" | "phone" | "email" | "password";
  placeholder: string;
  options?: SelectOptionType[];
}

export interface SelectOptionType {
  label: string;
  value: string;
}
