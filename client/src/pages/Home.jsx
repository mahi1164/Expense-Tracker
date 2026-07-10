import { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";
import { getExpenses } from "../services/expenseService";
import ExpenseChart from "../components/ExpenseChart";
function Home() {

  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

  const fetchExpenses = async () => {
    try {
      const response = await getExpenses();
      console.log(response.data);
      setExpenses(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);
  const filteredExpenses = expenses.filter((expense) => {

  const matchesSearch =
    expense.description
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" ||
    expense.category === category;

  return matchesSearch && matchesCategory;

});

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">
        Expense Tracker
      </h2>

      <ExpenseForm fetchExpenses={fetchExpenses} />
      <div className="row mb-4">

  <div className="col-md-6">

    <input
      type="text"
      className="form-control"
      placeholder="Search description..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

  </div>

  <div className="col-md-6">

    <select
      className="form-select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >

      <option value="All">All Categories</option>
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Shopping">Shopping</option>

    </select>

  </div>

</div>
      <div className="row mb-4">

  <div className="col-md-6">

    <ExpenseSummary expenses={filteredExpenses} />

  </div>

  <div className="col-md-6">

    <ExpenseChart expenses={filteredExpenses} />

  </div>

</div>
      <ExpenseList
        expenses={filteredExpenses}
        fetchExpenses={fetchExpenses}
      />

    </div>
  );
}

export default Home;