import { useEffect } from "react";
import { ProductSectionProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { getBranch } from "../../../../redux/actions/branch/branchAction";
import { StateType } from "../../../../redux/redux";
import ProductSaleCard from "../../../cards/ProductSaleCard/ProductSaleCard";
import "./productSection.scss";

const ProductSection = ({ branchId }: ProductSectionProps) => {
  const dispatch = useDispatch();
  const { branch, loading } = useSelector((state: StateType) => state.branch);

  console.log(branch?.products?.length);
  useEffect(() => {
    if (branchId) dispatch(getBranch(branchId));
  }, [dispatch, branchId]);

  if (!branch?.products || loading) return <>loading...</>;
  return (
    <div>
      <div>{branchId}</div>
      <div className="sale-product__list">
        {branch.products.map((product, key) => (
          <ProductSaleCard product={product} key={key} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
