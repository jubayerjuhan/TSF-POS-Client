import { useState } from "react";
import { Product } from "../../../types/Product/ProductTypes";
import ProductCard from "../../cards/ProductCard/ProductCard";
import "./branchProducts.scss";
import AppModal from "../../Modals/AppModal/AppModal";

interface BranchProductProps {
  products: { id: Product; quantity: number; _id: string }[];
}
const BranchProducts = ({ products }: BranchProductProps) => {
  const [deletingProductId, setDeletingProductId] = useState<string>("");
  const [deletingModelOpen, setDeletingModalOpen] = useState<boolean>("");
  const handleDeleteProductFromBranch = () => {
    console.log("object");
  };
  return (
    <div className="">
      <AppModal
        open={deletingModelOpen}
        setOpen={setDeletingModalOpen}
        title="Confirm Deletion"
        description="Are You Sure, You Want To Delete This Product From Store?"
        loading={false}
        handleConfirm={handleDeleteProductFromBranch}
      />
      <p className="fs-4 fw-bold text-muted mb-3">
        Products ({products?.length})
      </p>
      <div className="product__list">
        {products?.map((product, key) => {
          return (
            <>
              <ProductCard
                setDeletingProductId={setDeletingProductId}
                setDeletionModelOpen={setDeletingModalOpen}
                product={product.id}
                quantity={product.quantity}
                key={key}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default BranchProducts;
