import { useState } from "react";
import { Product } from "../../../../types/Product/ProductTypes";
import ProductCard from "../../../cards/ProductCard/ProductCard";
import AddProduct from "../AddProduct/AddProduct";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StateType } from "../../../../redux/redux";
import { deleteProduct } from "../../../../redux/actions/product/productAction";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import "./productList.scss";
import EditProduct from "../EditProduct/EditProduct";

const ProductList = ({ products }: { products: Product[] }) => {
  const { loading } = useSelector((state: StateType) => state.product);
  const [deletingProductId, setDeletingProductId] = useState<string>("");
  const [deletingProductModal, setDeletingProductModal] =
    useState<boolean>(false);
  const [editingModalOpen, setEditingModelOpen] = useState<boolean>(false);
  const [editingProductId, setEditingProductId] = useState<string>("");
  const [editingProduct, setEditingProduct] = useState<Product>();
  const dispatch: AppDispatch = useDispatch();

  const handleDeleteProduct = async () => {
    await dispatch(deleteProduct(deletingProductId));
    setDeletingProductModal(false);
  };

  console.log(editingProductId);

  return (
    <div>
      <AddProduct />
      <DeleteProduct
        deletingProductModal={deletingProductModal}
        loading={loading}
        handleDeleteProduct={handleDeleteProduct}
        setDeletingProductModal={setDeletingProductModal}
      />
      <EditProduct
        open={editingModalOpen}
        setOpen={setEditingModelOpen}
        editingProduct={editingProduct}
      />
      <div className="product__list">
        {products?.map((product, index) => (
          <ProductCard
            product={product}
            showTotalStock
            setDeletingProductId={setDeletingProductId}
            setDeletionModelOpen={setDeletingProductModal}
            setEditingModelOpen={setEditingModelOpen}
            setEditingProductId={setEditingProductId}
            setEditingProduct={setEditingProduct}
            key={index}
            hideQty
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
