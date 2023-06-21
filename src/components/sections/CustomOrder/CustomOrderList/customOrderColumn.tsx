import Button from "../../../core/Button/Button";

export const customOrderColumns = [
  { field: "id", headerName: "Order Id", width: 90 },
  {
    field: "customerName",
    headerName: "Customer name",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "branch",
    headerName: "Branch",
    flex: 1,
    minWidth: 250,
  },
  {
    field: "advancePayment",
    headerName: "Advance Payment",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "totalPrice",
    headerName: "Total Price",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "status",
    headerName: "Order Status",
    flex: 1,
    minWidth: 150,
  },

  {
    field: "actions",
    headerName: "Actions",
    minWidth: 300,
    renderCell: (params: any) => {
      return (
        <div style={{ display: "flex", gap: 10 }}>
          <Button
            title={"Change Status"}
            className="btn-success"
            onClick={() => window.open(`/order/${params.row._id}`)}
          />
          <Button
            title={"Invoice"}
            className="btn-warning"
            onClick={() => window.open(`/order/${params.row._id}`)}
          />
        </div>
      );
    },
  },
];

export const customOrderColumnsForMods = [
  { field: "id", headerName: "Order Id", width: 90 },
  {
    field: "customerName",
    headerName: "Customer name",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "customerPhone",
    headerName: "Customer Phone",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "branch",
    headerName: "Branch",
    flex: 1,
    minWidth: 250,
  },
  {
    field: "advancePayment",
    headerName: "Advance Payment",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "totalPrice",
    headerName: "Total Price",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "status",
    headerName: "Order Status",
    flex: 1,
    minWidth: 150,
  },

  {
    field: "changeStatus",
    headerName: "Order",
    minWidth: 150,
    renderCell: (params: any) => {
      return (
        <div style={{ display: "flex", gap: 10 }}>
          <Button
            title={"Invoice"}
            className="btn-warning"
            onClick={() => window.open(`/order/${params.row._id}`)}
          />
        </div>
      );
    },
  },
];
