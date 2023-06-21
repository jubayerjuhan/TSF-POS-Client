import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCustomOrders } from "../../../../redux/actions/customOrder/customOrderAction";

const CustomOrderList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomOrders());
  }, [dispatch]);

  return <div>CustomOrderList</div>;
};

export default CustomOrderList;
