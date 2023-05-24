import { Branch } from "../Branch/branchTypes";

interface SaleItem {
  name: string;
  photo: string;
  id: number;
  quantity: number;
  unitPrice: number;
  _id: string;
}

export interface Sale {
  _id: string;
  customerName: string;
  phone: string;
  total: number;
  discount: number;
  items: SaleItem[];
  paymentMethod: string;
  partialPayment: boolean;
  partialPaymentAmount: number;
  tax: number;
  note: string;
  branch: Branch[];
  createdAt: string;
  updatedAt: string;
  saleId: number;
  __v: number;
}
