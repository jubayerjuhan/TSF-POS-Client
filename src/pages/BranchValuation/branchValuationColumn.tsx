import Button from "../../components/core/Button/Button";

export const branchValuationColumns = [
  { field: "id", headerName: "Id", width: 90 },
  {
    field: "name",
    headerName: "Name",
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
    field: "amount",
    headerName: "Amount",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "createdAt",
    headerName: "Added On",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "actions",
    headerName: "Actions",
    minWidth: 160,
    renderCell: (params: any) => {
      return (
        <div style={{ display: "flex", gap: 10 }}>
          <Button
            title={"Delete"}
            className="btn-danger"
            onClick={() => window.open(`/order/${params.row._id}`)}
          />
        </div>
      );
    },
  },
];
