import Spinner from "react-bootstrap/Spinner";
import "./button.scss";

const Button = ({ title, onClick, loading, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      className="btn btn-primary core__button"
      onClick={onClick}
    >
      {loading ? <Spinner animation="border" role="status" size="sm" /> : title}
    </button>
  );
};

export default Button;
