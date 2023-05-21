import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "../core/Button/Button";

const AlertPopup = ({
  message,
  type,
  btnTitle,
  onButtonClick,
}: {
  message: string;
  type?: string;
  btnTitle?: string;
  onButtonClick?: () => void;
}) => {
  return (
    <div
      style={{ height: 400 }}
      className="d-flex flex-column justify-content-center align-items-center gap-4"
    >
      {type === "success" ? (
        <CheckCircleIcon style={{ fontSize: "80px" }} color="primary" />
      ) : (
        <WarningAmberIcon style={{ fontSize: "80px" }} color="error" />
      )}{" "}
      <p className="fw-semibold">{message}</p>
      {btnTitle && <Button title={btnTitle} onClick={onButtonClick} />}
    </div>
  );
};

export default AlertPopup;
