import { Product } from "../Product/ProductTypes";

export interface CustomOrderType {
  advancePayment: number;
  color: string;
  customerName: string;
  customerPhone: string;
  description: string;
  totalPrice: number;
  wood: string;
  branch: string;
}

export interface CustomOrderFromServer {
  _id: string;
  customerName: string;
  customerPhone: number;
  description: string;
  totalPrice: number;
  advancePayment: number;
  orderId: number;
  color: string;
  wood: string;
  deliveredAt?: string;
  branch: {
    _id: string;
    name: string;
  };
  products: {
    product: Product;
    quantity: number;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  status: "Order Taken" | "Shipped" | "Delivered";
}
