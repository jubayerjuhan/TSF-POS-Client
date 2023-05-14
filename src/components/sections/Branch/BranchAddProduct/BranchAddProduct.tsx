import { useEffect } from "react";
import Button from "../../../core/Button/Button";
import { AppDispatch, StateType } from "../../../../redux/redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../../redux/actions/products/productsAction";

const BranchAddProduct = () => {
  const { loading, products } = useSelector(
    (state: StateType) => state.products
  );
  const dispatch: AppDispatch = useDispatch();

  console.log(products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <Button title="Add Product" className="btn-warning" />
    </div>
  );
};

export default BranchAddProduct;
