import { useState } from "react";
import { addExpense } from "../services/expenseService";

function ExpenseForm({ fetchExpenses }) {
  const [expense, setExpense] = useState({
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addExpense(expense);

      console.log(response.data);

      alert("Expense Added Successfully");
      await fetchExpenses();

      setExpense({
        amount: "",
        category: "",
        description: "",
        date: "",
      });

    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div className="card shadow p-4 mb-4">

      <h4 className="mb-4">Add Expense</h4>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Amount</label>

          <input
            type="number"
            name="amount"
            className="form-control"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>

          <select
            className="form-select"
            name="category"
            value={expense.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Entertainment</option>
            <option>Others</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>

          <input
            type="text"
            name="description"
            className="form-control"
            value={expense.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Date</label>

          <input
            type="date"
            name="date"
            className="form-control"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="btn btn-primary w-100"
          type="submit"
        >
          Add Expense
        </button>

      </form>

    </div>
  );
}

export default ExpenseForm;