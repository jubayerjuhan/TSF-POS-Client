import { useParams } from "react-router-dom";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import OrderInformationContent from "../../components/sections/CustomOrder/OrderInformationContent/OrderInformationContent";
import "./orderInfo.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleOrder } from "../../redux/actions/customOrder/customOrderAction";
import { StateType } from "../../redux/redux";
import OrderStatusSelector from "../../components/sections/CustomOrder/OrderStatusSelector/OrderStatusSelector";

const OrderInformation = () => {
  const { order } = useSelector((state: StateType) => state.customOrder);
  const { id: orderId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleOrder(orderId));
  }, [dispatch, orderId]);

  return (
    <Pagewrapper>
      {order && <OrderInformationContent order={order} />}
      <OrderStatusSelector order={order} />
    </Pagewrapper>
  );
};

export default OrderInformation;
