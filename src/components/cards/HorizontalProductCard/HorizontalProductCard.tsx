import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../../../constants/links/imageLink";
import { CartProduct } from "../../../types/Product/ProductTypes";
import Button from "../../core/Button/Button";
import "./horizontalProductCard.scss";
import { CHANGE_QUANTITY } from "../../../constants/reduxActionsNames/cart";
import { toast } from "react-hot-toast";

const HorizontalProductCard = ({ product }: { product: CartProduct }) => {
  const dispatch = useDispatch();

  const handleQuantity = (action: string) => {
    switch (action) {
      case "minus":
        if (product.quantity - 1 <= 0)
          return toast.error("The Minimum Quantity Is 1");
        return dispatch({
          type: CHANGE_QUANTITY,
          payload: { ...product, quantity: product.quantity - 1 },
        });

      case "plus":
        if (product.quantity >= product.availableQuantity)
          return toast.error(
            `The Maximum Quantity Is ${product.availableQuantity}`
          );
        return dispatch({
          type: CHANGE_QUANTITY,
          payload: { ...product, quantity: product.quantity + 1 },
        });
      default:
        return null;
    }
  };

  return (
    <div className="sale__list-product p-3 rounded-2 gap-3 ">
      <div className="product__image">
        <img src={`${IMAGE_URL + product?.photo}`} alt="" />
      </div>
      <div className="product__info w-100">
        <p className="product__name mb-3 fs-6 fw-semibold">{product?.name}</p>
        <div className="product__cart d-flex justify-content-between">
          <div className="product__price">
            <input type="number" defaultValue={product?.sellPrice} />
            <Button title="Edit" />
          </div>
          <div className="product__quantity d-flex align-items-center gap-2">
            <Button title="-" onClick={() => handleQuantity("minus")} />
            <p className="quantity">{product?.quantity}</p>
            <Button title="+" onClick={() => handleQuantity("plus")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProductCard;
