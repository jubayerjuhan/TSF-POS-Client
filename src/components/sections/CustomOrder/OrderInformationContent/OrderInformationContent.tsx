import { CustomOrderFromServer } from "../../../../types/CustomOrder/CustomOrderTypes";

const OrderInformationContent = ({
  order,
}: {
  order: CustomOrderFromServer;
}) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Order Information</h1>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header text-white">
              <h4 className="mb-0">Customer Details</h4>
            </div>
            <div className="card-body">
              <p className="mb-2">
                <strong>Name:</strong> {order.customerName}
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> {order.customerPhone}
              </p>
              <p className="mb-2">
                <strong>Branch:</strong> {order.branch.name}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header text-white">
              <h4 className="mb-0">Order Details</h4>
            </div>
            <div className="card-body">
              <p className="mb-2">
                <strong>Description:</strong> {order.description}
              </p>
              <p className="mb-2">
                <strong>Color:</strong> {order.color}
              </p>
              <p className="mb-2">
                <strong>Wood:</strong> {order.wood}
              </p>
              <p className="mb-2">
                <strong>Total Price:</strong> {order.totalPrice}
              </p>
              <p className="mb-2">
                <strong>Status:</strong> {order.status}
              </p>
              <p className="mb-2">
                <strong>Advance Payment:</strong> {order.advancePayment}
              </p>
              <p className="mb-0">
                <strong>Order ID:</strong> {order.orderId}
              </p>
            </div>
          </div>
        </div>
      </div>

      {order.products.length > 0 && (
        <div className="card-body">
          <table className="table table-bordered mb-0">
            <thead className="card-header">
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.products.map((product, index) => (
                <tr>
                  <td>Product 1</td>
                  <td>10</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderInformationContent;
