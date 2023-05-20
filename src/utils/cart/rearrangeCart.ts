import { CartProduct } from "../../types/Product/ProductTypes";

export const rearrangeCart = (cart: CartProduct[]) => {
  const rearrangedCart: object[] = [];
  cart.forEach((pd) => {
    rearrangedCart.push({ ...pd, id: pd.productId, unitprice: pd.sellPrice });
  });
  return rearrangedCart;
};
