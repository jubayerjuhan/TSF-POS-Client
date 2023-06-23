import { useEffect, useState } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import { useDispatch, useSelector } from "react-redux";
import { getBranchValuation } from "../../redux/actions/branchValuation/branchValuationAction";
import { StateType } from "../../redux/redux";
import { branchValuationColumns } from "./branchValuationColumn";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import BranchSelector from "../../components/sections/Branch/BranchSelector/BranchSelector";

const BranchValuation = () => {
  const { loading, valuationList, totalAmount } = useSelector(
    (state: StateType) => state.branchValuation
  );
  const [branchId, setBranchId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBranchValuation(branchId));
  }, [dispatch, branchId]);

  const row: any = [];

  valuationList?.map((valuation, index) => {
    row.push({
      ...valuation,
      id: index + 1,
      branch: valuation.branch.name,
      createdAt: moment(valuation.createdAt).format("DD-MM-YYYY hh:mm a"),
    });
  });

  return (
    <Pagewrapper>
      <BranchSelector setBranchId={setBranchId} />
      <h4 className="mt-4 font-weight-bold">Total : {totalAmount}</h4>
      <DataGrid
        columns={branchValuationColumns}
        rows={row}
        sx={{ height: "80vh", mt: 3 }}
      />
    </Pagewrapper>
  );
};

export default BranchValuation;
