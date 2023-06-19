import { AppDispatch, RootThunk } from "../../redux";

export const getExpenses =
  (url: string): RootThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: SALES_PENDING });
      const { data }: { data: SalesResponse } = await client.get(`${url}`);
      if (data.success)
        dispatch({ type: SALES_SUCCESS, payload: data.saleInfo });
    } catch (error) {
      errorDispatcher(error, SALES_ERROR, dispatch);
    }
  };
