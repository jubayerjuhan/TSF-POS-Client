import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useCallback, useEffect, useState } from "react";
import client from "../../../client/axiosInstance";
import { Sale } from "../../../types/Sale/sale";
import { useSelector } from "react-redux";
import { StateType } from "../../../redux/redux";
import dayjs from "dayjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SaleChart = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const { fromDate, toDate, branch } = useSelector(
    (state: StateType) => state.dashboard
  );

  const fetchSales = useCallback(async () => {
    const sevenDaysBefore = dayjs().subtract(6, "days").format("MM-DD-YYYY");
    const today = dayjs().subtract(0, "days").format("MM-DD-YYYY");

    const { data } = await client.get(
      `/sale/all/list?startDate=${sevenDaysBefore}&endDate=${today}&branch=${branch}`
    );
    setSales(data.allSales);
  }, [branch]);

  useEffect(() => {
    fetchSales();
  }, [fetchSales]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Sales Graph",
      },
    },
  };

  const lastSevenDays = [];
  const dayNameLabels = [];

  for (let i = 7; i >= 0; i--) {
    lastSevenDays.push({ date: moment().subtract(i, "days"), amount: 0 });
    dayNameLabels.push(moment().subtract(i, "days").format("dddd"));
  }

  // here iterating last 7days
  lastSevenDays.forEach((day) => {
    // here iterating every sales
    sales?.forEach((sale) => {
      console.log(sale, "sale..sale..");
      // checking if there is any 2ndpartialAmountPaid today
      if (
        sale.partialAmountPayingDate &&
        moment(sale.partialAmountPayingDate)
          .startOf("day")
          .format("DD-MM-YY") ===
          moment(day.date).startOf("day").format("DD-MM-YY")
      ) {
        // if there is a 2nd partial payment add it with today
        console.log(sale, "sale,,,");
        day.amount += sale.total - sale.partialPaymentAmount;
      }
      // checking if there is any sale created on that day
      if (
        moment(sale.createdAt).startOf("day").format("DD-MM-YY") ===
        moment(day.date).startOf("day").format("DD-MM-YY")
      ) {
        // if not partial payment add full total
        if (!sale.partialPayment) return (day.amount += sale.total);
        // if partial payment add only partialPaymentAmount
        if (sale.partialPayment)
          return (day.amount += sale.partialPaymentAmount);
      }
    });
  });

  console.log(lastSevenDays, "last");

  const data = {
    labels: dayNameLabels,
    datasets: [
      {
        label: "Sales and Partial Payment",
        data: lastSevenDays.map((day) => day.amount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  console.log(lastSevenDays, "lastSevenDays...");

  return <Line options={options} data={data} />;
};

export default SaleChart;
