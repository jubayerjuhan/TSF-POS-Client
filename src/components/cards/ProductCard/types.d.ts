import { Product } from "../../../types/Product/ProductTypes";

interface ProductCardTypes {
  product: Product;
  quantity?: number;
  setEditingModelOpen: React.Dispatch<SetStateAction<boolean>>;
  setEditingProductId: React.Dispatch<SetStateAction<string>>;
  setDeletingProductId: React.Dispatch<SetStateAction<string>>;
  setDeletionModelOpen: React.Dispatch<SetStateAction<boolean>>;
  setEditingProduct?: React.Dispatch<SetStateAction<Product>>;
}
