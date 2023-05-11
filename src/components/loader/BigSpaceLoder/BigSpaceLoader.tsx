import { CircularProgress } from "@mui/material";

const BigSpaceLoader = ({ height = 300 }: { height?: number }) => {
  return (
    <div
      style={{ height: height }}
      className="d-flex justify-content-center align-items-center"
    >
      <CircularProgress color="error" />
    </div>
  );
};

export default BigSpaceLoader;
