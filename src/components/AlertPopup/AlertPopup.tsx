import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const AlertPopup = ({ message }: { message: string }) => {
  return (
    <div
      style={{ height: 400 }}
      className="d-flex flex-column justify-content-center align-items-center gap-4"
    >
      <WarningAmberIcon style={{ fontSize: "80px" }} color="error" />
      <p className="fw-semibold">{message}</p>
    </div>
  );
};

export default AlertPopup;
