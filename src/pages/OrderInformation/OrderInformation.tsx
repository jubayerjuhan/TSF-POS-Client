import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import "./orderInfo.scss";

const OrderInformation = () => {
  return (
    <Pagewrapper>
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
                  <strong>Name:</strong> Jubayer Juhan
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> 01620692839
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
                  <strong>Description:</strong> asjdhuashdkjh
                </p>
                <p className="mb-2">
                  <strong>Color:</strong> Tetul Bichi
                </p>
                <p className="mb-2">
                  <strong>Wood:</strong> Oak
                </p>
                <p className="mb-2">
                  <strong>Total Price:</strong> $20,000
                </p>
                <p className="mb-2">
                  <strong>Status:</strong> Order Taken
                </p>
                <p className="mb-2">
                  <strong>Advance Payment:</strong> $10,000
                </p>
                <p className="mb-0">
                  <strong>Order ID:</strong> 1
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <table className="table table-bordered mb-0">
            <thead className="card-header">
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product 1</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Pagewrapper>
  );
};

export default OrderInformation;
