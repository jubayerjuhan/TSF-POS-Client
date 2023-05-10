import roles from "../../roles/roles";
import { AddUserFieldTypes } from "./types";

const ADD_USER_FIELDS: AddUserFieldTypes[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter First Name",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter Last Name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter Email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter Password",
  },
  {
    name: "role",
    label: "Role",
    type: "select",
    options: roles,
    placeholder: "Enter Role",
  },
];

const ADD_USER_FIELDS_WITH_BRANCH: AddUserFieldTypes[] = [
  ...ADD_USER_FIELDS,
  {
    name: "branch",
    label: "Branch",
    type: "select",
    options: [],
    placeholder: "Enter Branch",
  },
];
export { ADD_USER_FIELDS, ADD_USER_FIELDS_WITH_BRANCH };
