import { Form } from "react-bootstrap";
import { CustomOrderFromServer } from "../../../../types/CustomOrder/CustomOrderTypes";
import Button from "../../../core/Button/Button";

const OrderStatusSelector = ({ order }: { order: CustomOrderFromServer }) => {
  const orderStatuses = ["Order Taken", "Shipped", "Delivered"];

  return (
    <div className="orderStatus">
      <h5>Change Order Status</h5>
      <Form.Select className="mt-2" aria-label="Default select example">
        {orderStatuses.map((orderStatus, index) => {
          return (
            <option
              value={orderStatus}
              key={index}
              disabled={
                ((order?.status === "Shipped" ||
                  order?.status === "Delivered") &&
                  orderStatus === "Order Taken") ||
                order?.status === "Delivered"
              }
              selected={order?.status === orderStatus}
            >
              {orderStatus}
            </option>
          );
        })}
      </Form.Select>
      <Button title="Change Status" />
    </div>
  );
};

export default OrderStatusSelector;
