import { useState } from "react";
import { Product } from "../../../../types/Product/ProductTypes";
import ProductCard from "../../../cards/ProductCard/ProductCard";
import AddProduct from "../AddProduct/AddProduct";
import "./productList.scss";
import AppModal from "../../../Modals/AppModal/AppModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StateType } from "../../../../redux/redux";
import { deleteProduct } from "../../../../redux/actions/product/productAction";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

const ProductList = ({ products }: { products: Product[] }) => {
  const { loading } = useSelector((state: StateType) => state.product);
  const [deletingProductId, setDeletingProductId] = useState<string>("");
  const [deletingProductModal, setDeletingProductModal] =
    useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  const handleDeleteProduct = async () => {
    await dispatch(deleteProduct(deletingProductId));
    setDeletingProductModal(false);
  };

  return (
    <div>
      <AddProduct />
      <DeleteProduct
        deletingProductModal={deletingProductModal}
        loading={loading}
        handleDeleteProduct={handleDeleteProduct}
        setDeletingProductModal={setDeletingProductModal}
      />
      <div className="product__list">
        {products?.map((product, index) => (
          <ProductCard
            product={product}
            setDeletingProductId={setDeletingProductId}
            setDeletionModelOpen={setDeletingProductModal}
            setEditingModelOpen={() => ""}
            setEditingProductId={() => ""}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
