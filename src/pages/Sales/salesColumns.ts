export const saleColumns = [
  { field: "id", headerName: "Sale Id", width: 90 },
  {
    field: "customerName",
    headerName: "Customer name",
    width: 150,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "branch",
    headerName: "Branch",
    width: 110,
    editable: true,
  },
  {
    field: "partialPaymentAmount",
    headerName: "Partial Payment Amount",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "total",
    headerName: "Total",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    width: 110,
    editable: true,
  },
];
