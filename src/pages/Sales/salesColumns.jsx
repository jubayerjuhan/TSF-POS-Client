import Button from "../../components/core/Button/Button";

export const saleColumns = [
  { field: "id", headerName: "Sale Id", width: 90 },
  {
    field: "customerName",
    headerName: "Customer name",
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },
  {
    field: "branch",
    headerName: "Branch",
    flex: 1,
  },
  {
    field: "partialPaymentAmount",
    headerName: "Partial Amount",
    flex: 1,
  },
  {
    field: "total",
    headerName: "Total",
    flex: 1,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    flex: 1,
  },
  {
    field: "Invoice",
    headerName: "Invoice",
    flex: 1,
    renderCell: (params) => {
      console.log(params);
      return (
        <>
          <Button
            title={"Invoice"}
            onClick={() => window.open(`/invoice/${params.row._id}`)}
          />
        </>
      );
    },
  },
];
