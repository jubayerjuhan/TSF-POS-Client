import Product from "../../pages/Product";
import { Product } from "./ProductTypes";

export type SearchedProduct = Product & {
  branch: {
    name: string;
    quantity: number;
  }[];
};
