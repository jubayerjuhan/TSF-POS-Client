import { Expense } from "../../../types/Expense/ExpenseType";

export interface ExpensesResponse {
  success: boolean;
  expenses: Expense[];
}

export interface AddExpenseResponse {
  success: boolean;
  message: string;
}
