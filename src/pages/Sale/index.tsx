import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import BranchSelector from "../../components/sections/Branch/BranchSelector/BranchSelector";
import { useState } from "react";
import "./sale.scss";

const Sale = () => {
  const [branchId, setBranchId] = useState<string | null>(null);

  console.log(branchId);
  return (
    <Pagewrapper>
      <div className="sale-page">
        <div className="selector-side">
          <BranchSelector setBranchId={setBranchId} />
        </div>
        <div className="sale__info-side">
          <h1>Sale</h1>
        </div>
      </div>
    </Pagewrapper>
  );
};

export default Sale;
