import { useEffect } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import DashCharts from "../../components/sections/Dashboard/DashChart/DashCharts";
import DashboardAmount from "../../components/sections/Dashboard/DashboardAmount/DashboardAmount";
import DashboardBranchAndDatePicker from "../../components/sections/Dashboard/DashboardBranchAndDatePicker";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../redux/redux";
import {
  getPartialPaymentInfo,
  getSales,
} from "../../redux/actions/sales/salesAction";
import { getCustomOrderAmount } from "../../redux/actions/customOrder/customOrderAction";
import { getExpenses } from "../../redux/actions/expenses/expenseAction";

const Dashboard = () => {
  const { branch, fromDate, toDate } = useSelector(
    (state: StateType) => state.dashboard
  );

  console.log(branch, "branch...");
  const dispatch = useDispatch();
  const url = `sale/list?startDate=${fromDate}&endDate=${toDate}&branch=${
    branch ? branch : ""
  }`;
  const customOrderAmountUrl = `custom-order/amount?fromDate=${fromDate}&endDate=${toDate}&branchId=${
    branch ? branch : ""
  }`;
  const partialPaymentUrl = `sale/partial-payment/list?startDate=${fromDate}&endDate=${toDate}&branch=${
    branch ? branch : ""
  }`;
  const expensesUrl = `/expense/list?startDate=${fromDate}&endDate=${toDate}&branch=${
    branch ? branch : ""
  }`;

  console.info(url, customOrderAmountUrl, "jubayerjuhanHello");

  useEffect(() => {
    dispatch(getSales(url));
    dispatch(getPartialPaymentInfo(partialPaymentUrl));
    dispatch(getCustomOrderAmount(customOrderAmountUrl));
    dispatch(getExpenses(expensesUrl));
  }, [dispatch, url, partialPaymentUrl, customOrderAmountUrl, expensesUrl]);

  return (
    <Pagewrapper>
      <DashboardBranchAndDatePicker />
      <div className="d-flex gap-4 flex-wrap">
        <DashboardAmount />
      </div>
      <DashCharts />
    </Pagewrapper>
  );
};

export default Dashboard;
