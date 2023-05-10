import Spinner from "react-bootstrap/Spinner";
import "./button.scss";

const Button = ({
  title,
  onClick,
  loading,
  type = "button",
  className,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn btn-primary  ${className} core__button`}
      onClick={onClick}
      {...otherProps}
      // style={{ fontSize: "14px" }}
    >
      {loading ? <Spinner animation="border" role="status" size="sm" /> : title}
    </button>
  );
};

export default Button;
