import { useEffect } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import ProductList from "../../components/sections/Product/ProductList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/actions/products/productsAction";
import { StateType } from "../../redux/redux";
import { toast } from "react-hot-toast";
import { CLEAR_BRANCH_MESSAGES } from "../../constants/reduxActionsNames/branch";

const Products = () => {
  const { products } = useSelector((state: StateType) => state.products);
  const { message, error } = useSelector((state: StateType) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) toast.error(error);
    if (message) toast.success(message);
    dispatch(fetchAllProducts());
    dispatch({ type: CLEAR_BRANCH_MESSAGES });
  }, [dispatch, message, error]);

  return (
    <Pagewrapper>
      <ProductList products={products} />
    </Pagewrapper>
  );
};

export default Products;
