import { CustomOrderFromServer } from "../../../types/CustomOrder/CustomOrderTypes";

export interface AddCustomOrderSuccess {
  message: string;
}

export interface FetchCustomOrdersSuccess {
  success: boolean;
  orders: CustomOrderFromServer[];
}
