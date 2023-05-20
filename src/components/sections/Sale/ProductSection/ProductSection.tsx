import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../../redux/redux";
import ProductSaleCard from "../../../cards/ProductSaleCard/ProductSaleCard";
import { ADD_TO_CART } from "../../../../constants/reduxActionsNames/cart";
import { toast } from "react-hot-toast";
import { BranchProduct } from "../../Branch/BranchProducts/BranchProducts";
import "./productSection.scss";
import AlertPopup from "../../../AlertPopup/AlertPopup";

const ProductSection = () => {
  const dispatch = useDispatch();
  const { branch, loading } = useSelector((state: StateType) => state.branch);
  const { cart } = useSelector((state: StateType) => state.cart);

  const handleAddToCart = (product: BranchProduct) => {
    // checking if there is any duplicate product
    const duplicate = cart.find((pd) => pd._id === product._id);
    if (duplicate) return toast.error("Product already on cart");
    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...product.id,
        quantity: 1,
        availableQuantity: product.quantity,
      },
    });
  };

  if (!branch?.products && loading) return <>loading...</>;
  if (!branch?.products)
    return <AlertPopup message="Please Select a Branch First" />;
  if (branch?.products.length === 0)
    return <AlertPopup message="No Products Available on This Branch" />;

  return (
    <div className="product__section my-4 px-2">
      <div className="sale-product__list">
        {branch.products.map((product, key) => (
          <ProductSaleCard
            product={product}
            key={key}
            onClick={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
