import { useParams } from "react-router-dom";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import OrderInformationContent from "../../components/sections/CustomOrder/OrderInformationContent/OrderInformationContent";
import "./orderInfo.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleOrder } from "../../redux/actions/customOrder/customOrderAction";
import { StateType } from "../../redux/redux";
import { Form } from "react-bootstrap";
import Button from "../../components/core/Button/Button";

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
      <div className="orderStatus">
        <h5>Change Order Status</h5>
        <Form.Select className="mt-2" aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Button title="Change Status" />
      </div>
    </Pagewrapper>
  );
};

export default OrderInformation;
