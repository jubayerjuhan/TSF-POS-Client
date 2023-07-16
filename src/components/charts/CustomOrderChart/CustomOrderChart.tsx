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
import { useSelector } from "react-redux";
import { StateType } from "../../../redux/redux";
import dayjs from "dayjs";
import { CustomOrderFromServer } from "../../../types/CustomOrder/CustomOrderTypes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CustomOrderChart = () => {
  const [sales, setSales] = useState<CustomOrderFromServer[]>([]);
  const { branch } = useSelector((state: StateType) => state.dashboard);

  const fetchSales = useCallback(async () => {
    const sevenDaysBefore = dayjs().subtract(6, "days").format("MM-DD-YYYY");
    const today = dayjs().subtract(0, "days").format("MM-DD-YYYY");

    const { data } = await client.get(
      `/custom-order/list?branchId=${branch}&startDate=${sevenDaysBefore}&endDate=${today}`
    );

    console.log(data, "data");
    setSales(data.orders);
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
        text: "Custom Order Graph (This Week)",
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
      // checking if the sale is delivered or not
      if (
        sale.status === "Delivered" &&
        moment(day.date).format("DD-MM-YYYY") ===
          moment(sale.deliveredAt).format("DD-MM-YYYY")
      ) {
        day.amount += sale.totalPrice - sale.advancePayment;
      }

      if (
        sale.status === "Delivered" &&
        moment(day.date).format("DD-MM-YYYY") ===
          moment(sale.createdAt).format("DD-MM-YYYY")
      ) {
        day.amount += sale.advancePayment;
      }
      if (
        sale.status !== "Delivered" &&
        moment(day.date).format("DD-MM-YYYY") ===
          moment(sale.createdAt).format("DD-MM-YYYY")
      ) {
        day.amount += sale.advancePayment;
      }
    });
  });

  const data = {
    labels: dayNameLabels,
    datasets: [
      {
        label: "Advance Payment and Full Payment",
        data: lastSevenDays.map((day) => day.amount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default CustomOrderChart;
