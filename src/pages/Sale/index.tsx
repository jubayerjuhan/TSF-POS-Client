import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import BranchSelector from "../../components/sections/Branch/BranchSelector/BranchSelector";
import { useState } from "react";
import "./sale.scss";
import ProductSection from "../../components/sections/Sale/ProductSection/ProductSection";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/redux";

const Sale = () => {
  const { user } = useSelector((state: StateType) => state.user);
  const [branchId, setBranchId] = useState<string | null>(
    user.branch ? user.branch : null
  );

  return (
    <Pagewrapper>
      <div className="sale-page">
        <div className="selector-side">
          {!user.branch && <BranchSelector setBranchId={setBranchId} />}
          <ProductSection branchId={branchId} />
        </div>
        <div className="sale__info-side">
          <h1>Sale</h1>
        </div>
      </div>
    </Pagewrapper>
  );
};

export default Sale;
