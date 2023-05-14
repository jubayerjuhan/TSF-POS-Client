import { useEffect } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import ProductList from "../../components/sections/Product/ProductList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/actions/products/productsAction";
import { StateType } from "../../redux/redux";

const Products = () => {
  const { products } = useSelector((state: StateType) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <Pagewrapper>
      <ProductList products={products} />
    </Pagewrapper>
  );
};

export default Products;
