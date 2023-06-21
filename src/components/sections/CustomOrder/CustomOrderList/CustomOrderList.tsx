import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomOrders } from "../../../../redux/actions/customOrder/customOrderAction";
import { customOrderColumns } from "./customOrderColumn";
import { DataGrid } from "@mui/x-data-grid";
import { StateType } from "../../../../redux/redux";
import { CustomOrderFromServer } from "../../../../types/CustomOrder/CustomOrderTypes";

const CustomOrderList = () => {
  const { user } = useSelector((state: StateType) => state.user);
  const { orders } = useSelector((state: StateType) => state.customOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomOrders(user.branch));
  }, [dispatch, user]);

  const row: any = [];

  orders?.map((order: CustomOrderFromServer) => {
    row.push({ ...order, id: order.orderId, branch: order.branch.name });
  });

  return (
    <DataGrid
      columns={customOrderColumns}
      rows={row}
      sx={{ height: "80vh", mt: 3 }}
    />
  );
};

export default CustomOrderList;
