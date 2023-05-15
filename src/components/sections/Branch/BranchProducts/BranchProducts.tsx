import ProductCard from "../../../cards/ProductCard/ProductCard";
import AppModal from "../../../Modals/AppModal/AppModal";
import "./branchProducts.scss";
import { useEffect, useState } from "react";
import { Product } from "../../../../types/Product/ProductTypes";
import { deleteProductFromBranch } from "../../../../redux/actions/product/branch/branchProductAction";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StateType } from "../../../../redux/redux";
import { toast } from "react-hot-toast";
import EditBranchProduct from "../EditBranchProduct/EditBranchProduct";
import BranchAddProduct from "../BranchAddProduct/BranchAddProduct";
import { CLEAR_PRODUCT } from "../../../../constants/reduxActionsNames/product";
import { getBranch } from "../../../../redux/actions/branch/branchAction";

interface BranchProductProps {
  products: { id: Product; quantity: number; _id: string }[];
}
const BranchProducts = ({ products }: BranchProductProps) => {
  const { branch } = useSelector((state: StateType) => state.branch);
  const { loading, error, message } = useSelector(
    (state: StateType) => state.product
  );
  const [deletingProductId, setDeletingProductId] = useState<string>("");
  const [deletingModelOpen, setDeletingModalOpen] = useState<boolean>(false);

  const [editingProductId, setEditingProductId] = useState<string>("");
  const [editingModelOpen, setEditingModalOpen] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();

  const handleDeleteProductFromBranch = async () => {
    await dispatch(deleteProductFromBranch(branch._id, deletingProductId));
    setDeletingModalOpen(false);
    dispatch(getBranch(branch._id));
  };

  useEffect(() => {
    if (error) toast.error(error);
    if (message) toast.success(message);
    dispatch({ type: CLEAR_PRODUCT });
  }, [dispatch, error, message]);

  return (
    <div className="">
      <EditBranchProduct
        branchId={branch?._id}
        open={editingModelOpen}
        setOpen={setEditingModalOpen}
        productId={editingProductId}
      />
      <AppModal
        open={deletingModelOpen}
        setOpen={setDeletingModalOpen}
        title="Confirm Deletion"
        description="Are You Sure, You Want To Delete This Product From Store?"
        loading={loading}
        handleConfirm={handleDeleteProductFromBranch}
      />
      <div className="d-flex justify-content-between align-items-center">
        <p className="fs-4 fw-bold text-muted mb-3">
          Products ({products?.length})
        </p>
        <BranchAddProduct />
      </div>

      <div className="product__list">
        {products?.map((product, key) => {
          if (!product.id) return <p>This Product Has Removed</p>;
          return (
            <>
              <ProductCard
                setEditingProductId={setEditingProductId}
                setEditingModelOpen={setEditingModalOpen}
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
