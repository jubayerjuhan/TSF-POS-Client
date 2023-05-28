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
  // const { sales } = useSelector((state: StateType) => state.sales);

  const fetchSales = useCallback(async () => {
    const { data } = await client.get(
      "/sale/all/list?startDate=05-27-2023&endDate=05-27-2023"
    );
    setSales(data.allSales);
  }, []);

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
        moment(sale.partialAmountPayingDate)
          .startOf("day")
          .format("DD-MM-YY") ===
        moment(day.date).startOf("day").format("DD-MM-YY")
      ) {
        console.log(day, sale, "daySale");
        // if there is a 2nd partial payment add it with today
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
        label: "Dataset 1",
        data: lastSevenDays.map((day) => day.amount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default SaleChart;
