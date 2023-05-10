import roles from "../../roles/roles";
import { AddUserFieldTypes } from "./types";

const ADD_USER_FIELDS: AddUserFieldTypes[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter user firstName",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter user lastName",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter user email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter user password",
  },
  {
    name: "role",
    label: "Role",
    type: "select",
    options: roles,
    placeholder: "Enter user role",
  },
];

const ADD_USER_FIELDS_WITH_BRANCH: AddUserFieldTypes[] = [
  ...ADD_USER_FIELDS,
  {
    name: "branch",
    label: "branch",
    type: "select",
    options: [],
    placeholder: "Enter user role",
  },
];
export { ADD_USER_FIELDS, ADD_USER_FIELDS_WITH_BRANCH };
