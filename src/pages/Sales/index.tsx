import { DataGrid } from "@mui/x-data-grid";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import { saleColumns } from "./salesColumns.js";

const Sales = () => {
  return (
    <Pagewrapper title="Sales">
      {/* <DataGrid columns={saleColumns} /> */}
    </Pagewrapper>
  );
};

export default Sales;
