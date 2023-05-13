import { Product } from "../../../types/Product/ProductTypes";
import ProductCard from "../../cards/ProductCard/ProductCard";
import "./branchProducts.scss";

interface BranchProductProps {
  products: { id: Product; quantity: number; _id: string }[];
}
const BranchProducts = ({ products }: BranchProductProps) => {
  console.log(products, "pds");
  return (
    <div className="">
      <p className="fs-4 fw-bold text-muted">Products ({products?.length})</p>
      <div className="product__list">
        {products?.map((product, key) => {
          return (
            <ProductCard
              product={product.id}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
        {products?.map((product, key) => {
          return (
            <ProductCard
              product={product.id}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
        {products?.map((product, key) => {
          return (
            <ProductCard
              product={product.id}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
        {products?.map((product, key) => {
          return (
            <ProductCard
              product={product.id}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
        {products?.map((product, key) => {
          return (
            <ProductCard
              product={product.id}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
        {products?.map((product, key) => {
          return (
            <ProductCard
              product={product.id}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
        {products?.map((product, key) => {
          return (
            <ProductCard
              product={product.id}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
        {products?.map((product, key) => {
          return (
            <ProductCard
              product={product.id}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
        {products?.map((product, key) => {
          return (
            <ProductCard
              product={product.id}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
        {products?.map((product, key) => {
          return (
            <ProductCard
              product={product.id}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
        {products?.map((product, key) => {
          return (
            <ProductCard
              product={product.id}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BranchProducts;
