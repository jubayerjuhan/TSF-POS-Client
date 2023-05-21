import "./invoice.scss";
import logo from "../../assets/sisters_furniture_logo.jpeg";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const InvoicePage = () => {
  const { id } = useParams();

  // useEffect(() => {}, []);

  return (
    <div className="invoice">
      <div className="invoice-header">
        <div className="company-logo">
          {/* Your company logo */}
          <img src={logo} alt="The Sisters Furniture Logo" />
        </div>
        <div className="company-details d-flex flex-column gap-2">
          <h2 className="fs-5 fw-semibold">The Sisters Furniture</h2>
          <p>123 Main Street, City, State</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@company.com</p>
        </div>
      </div>

      <div className="invoice-content">
        <h1>Invoice</h1>
        <div className="invoice-info mt-3">
          <div className="info-block">
            <span className="info-label">Invoice Number:</span>
            <span className="info-value">#12345</span>
          </div>
          <div className="info-block">
            <span className="info-label">Date:</span>
            <span className="info-value">
              {moment().format("MMMM D, YYYY")}
            </span>
          </div>
          {/* Add more invoice details as needed */}
        </div>
        <div className="info-block my-3">
          <span className="info-label">Billed To:</span>
          <span className="info-value">Jubayer Hossain</span>
        </div>

        <table className="invoice-items">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product A</td>
              <td>2</td>
              <td>$10.00</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Product B</td>
              <td>1</td>
              <td>$15.00</td>
              <td>$15.00</td>
            </tr>
            {/* Add more invoice items as needed */}
          </tbody>
        </table>

        <div className="invoice-total">
          {/* Invoice totals (e.g., subtotal, tax, total) */}
          <div className="total-block">
            <span className="total-label">Total : </span>
            <span className="total-value">$35.00</span>
          </div>
          {/* Add more total blocks as needed */}
        </div>
      </div>

      <div className="invoice-footer">
        {/* Invoice footer content */}
        <p>Thank you for choosing us!</p>
      </div>

      <button onClick={() => window.print()} className="print__button">
        Print Invoice
      </button>
    </div>
  );
};

export default InvoicePage;
