import { Product } from "../../../../types/Product/ProductTypes";
import ProductCard from "../../../cards/ProductCard/ProductCard";
import AddProduct from "../AddProduct/AddProduct";
import "./productList.scss";
const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <AddProduct />
      <div className="product__list">
        {products?.map((product, index) => (
          <ProductCard
            product={product}
            setDeletingProductId={() => ""}
            setDeletionModelOpen={() => ""}
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
