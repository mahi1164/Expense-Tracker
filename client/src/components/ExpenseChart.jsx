import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function ExpenseChart({ expenses }) {

  const food = expenses
    .filter((e) => e.category === "Food")
    .reduce((sum, e) => sum + e.amount, 0);

  const travel = expenses
    .filter((e) => e.category === "Travel")
    .reduce((sum, e) => sum + e.amount, 0);

  const shopping = expenses
    .filter((e) => e.category === "Shopping")
    .reduce((sum, e) => sum + e.amount, 0);

  const data = {
    labels: [
      "Food",
      "Travel",
      "Shopping",
    ],

    datasets: [
      {
        label: "Expenses",

        data: [
          food,
          travel,
          shopping,
        ],

        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FF9800",
        ],
      },
    ],
  };

  return (

    <div className="card shadow p-4 mb-4">

      <h4 className="mb-4">
        Expense Chart
      </h4>

      <div
  style={{
    width: "320px",
    height: "320px",
    margin: "0 auto",
  }}
>

  <Pie
    data={data}
    options={{
      responsive: true,
      maintainAspectRatio: false,
    }}
  />

</div>

    </div>

  );

}

export default ExpenseChart;