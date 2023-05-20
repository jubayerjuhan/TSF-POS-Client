import { FieldTypes } from "../../../types/FieldTypes/FieldTypes";

const ADD_SALE_FIELDS: FieldTypes[] = [
  {
    name: "customerName",
    label: "Customer Name",
    type: "text",
    placeholder: "Enter Customer Name",
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    placeholder: "Enter Phone Number",
  },
  {
    name: "paymentMethod",
    label: "Payment Method",
    type: "text",
    placeholder: "Enter Payment Method",
  },
  {
    name: "partialPayment",
    label: "Partial Payment",
    type: "checkbox",
    placeholder: "Enter Partial Payment",
  },
  {
    name: "note",
    label: "Note",
    type: "text",
    placeholder: "Enter Note",
  },
];

export { ADD_SALE_FIELDS };
