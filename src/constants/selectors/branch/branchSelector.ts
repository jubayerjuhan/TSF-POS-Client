import { FieldTypes } from "../../../types/FieldTypes/FieldTypes";

const BRANCH_SELECTOR_FIELDS: FieldTypes[] = [
  {
    label: "Branch",
    name: "branch",
    placeholder: "Select Branch!",
    type: "select",
    options: [{ label: "Select One Branch", value: 0 }],
  },
];

export default BRANCH_SELECTOR_FIELDS;
