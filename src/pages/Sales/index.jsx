import { DataGrid } from "@mui/x-data-grid";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import { saleColumns } from "./salesColumns.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../../redux/actions/sales/salesAction.ts";
import BranchSelector from "../../components/sections/Branch/BranchSelector/BranchSelector";
import useAdminPermission from "../../hooks/permission/useAdminPermission";

const Sales = () => {
  const { sales } = useSelector((state) => state.sales);
  const { user } = useSelector((state) => state.user);
  const [branchId, setBranchId] = useState(user?.branch ? user.branch : "");
  const dispatch = useDispatch();
  const adminPermission = useAdminPermission();

  useEffect(() => {
    dispatch(getSales(`/sale/list?branch=${branchId}`));
  }, [dispatch, branchId]);

  const row = [];

  sales?.sales?.map((sale) => {
    row.push({ ...sale, branch: sale.branch[0].name, id: sale.saleId });
  });

  return (
    <Pagewrapper title="Sales">
      {adminPermission && <BranchSelector setBranchId={setBranchId} />}
      <DataGrid
        columns={saleColumns}
        rows={row}
        sx={{ height: "80vh", mt: 3 }}
      />
    </Pagewrapper>
  );
};

export default Sales;
