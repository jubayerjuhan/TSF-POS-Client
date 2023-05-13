import { Product } from "../../../types/Product/ProductTypes";

interface ProductCardTypes {
  product: Product;
  quantity: number;
  setDeletingProductId: React.Dispatch<SetStateAction<string>>;
  setDeletionModelOpen: React.Dispatch<SetStateAction<boolean>>;
}
