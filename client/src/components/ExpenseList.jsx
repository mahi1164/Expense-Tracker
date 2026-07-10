import { deleteExpense } from "../services/expenseService";
function ExpenseList({ expenses, fetchExpenses }) {

  
  const handleDelete = async (id) => {

  if (!window.confirm("Delete this expense?"))
    return;

  try {

    await deleteExpense(id);

    fetchExpenses();

  } catch (error) {

    console.log(error);

  }

};


  return (
    <div className="card shadow p-4">

      <h4 className="mb-4">Expense List</h4>

      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        expenses.map((expense) => (
          <div
            key={expense._id}
            className="border rounded p-3 mb-3"
          >
            <h5>{expense.category}</h5>

            <p>
              <strong>Amount:</strong> ₹ {expense.amount}
            </p>

            <p>{expense.description}</p>

            <small>
              {new Date(expense.date).toLocaleDateString()}
            </small>
            <br />

  <button
    className="btn btn-danger btn-sm mt-3"
    onClick={() => handleDelete(expense._id)}
  >
    Delete
  </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;