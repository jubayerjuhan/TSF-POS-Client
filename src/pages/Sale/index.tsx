import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import BranchSelector from "../../components/sections/Branch/BranchSelector/BranchSelector";
import { useState } from "react";
import ProductSection from "../../components/sections/Sale/ProductSection/ProductSection";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/redux";
import "./sale.scss";
import Button from "../../components/core/Button/Button";
import HorizontalProductCard from "../../components/cards/HorizontalProductCard/HorizontalProductCard";

const Sale = () => {
  const { user } = useSelector((state: StateType) => state.user);
  const [branchId, setBranchId] = useState<string | null>(
    user.branch ? user.branch : null
  );

  return (
    <Pagewrapper hideBar>
      <div className="sale-page" style={{ height: "80vh" }}>
        <div className="selector-side">
          {!user.branch && <BranchSelector setBranchId={setBranchId} />}
          <ProductSection branchId={branchId} />
        </div>
        <div className="sale__info-side pt-3 p-4 ">
          <h6 className="fs-5 fw-semibold">Create Order</h6>
          <div className="sale__info my-3">
            <HorizontalProductCard />
          </div>
        </div>
      </div>
    </Pagewrapper>
  );
};

export default Sale;
