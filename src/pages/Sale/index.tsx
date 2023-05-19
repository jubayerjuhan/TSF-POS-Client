import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import BranchSelector from "../../components/sections/Branch/BranchSelector/BranchSelector";
import { useEffect, useState } from "react";
import ProductSection from "../../components/sections/Sale/ProductSection/ProductSection";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../redux/redux";
import "./sale.scss";
import HorizontalProductCard from "../../components/cards/HorizontalProductCard/HorizontalProductCard";
import { getBranch } from "../../redux/actions/branch/branchAction";

const Sale = () => {
  // const { branch, loading } = useSelector((state: StateType) => state.branch);
  const { user } = useSelector((state: StateType) => state.user);
  const { cart } = useSelector((state: StateType) => state.cart);
  const [branchId, setBranchId] = useState<string | null>(
    user.branch ? user.branch : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (branchId) dispatch(getBranch(branchId));
  }, [dispatch, branchId]);

  return (
    <Pagewrapper hideBar>
      <div className="sale-page" style={{ height: "80vh" }}>
        <div className="selector-side">
          {!user.branch && <BranchSelector setBranchId={setBranchId} />}
          <ProductSection />
        </div>
        <div className="sale__info-side pt-3 p-4 ">
          <h6 className="fs-5 fw-semibold">Create Order</h6>
          <div className="sale__info my-3 d-flex flex-column gap-3">
            {cart.map((product, key) => (
              <HorizontalProductCard key={key} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Pagewrapper>
  );
};

export default Sale;
