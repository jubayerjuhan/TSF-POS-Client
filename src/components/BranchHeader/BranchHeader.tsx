import { Branch } from "../../types/Branch/branchTypes";
import Button from "../core/Button/Button";
import "./branchHeader.scss";

const BranchHeader = ({ branch }: { branch: Branch }) => {
  return (
    <div className="mb-4">
      <div className="my-4">
        <p className="fs-3 fw-bold mb-2">{branch?.name}</p>
        <p className="fs-6 ">{branch?.address}</p>
      </div>
      <div className="d-flex gap-2">
        <Button title="Edit Branch" className="btn-warning text-black" />
        <Button title="Delete Branch" className="btn-danger text-white" />
      </div>
    </div>
  );
};

export default BranchHeader;
