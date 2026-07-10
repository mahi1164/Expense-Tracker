function ExpenseSummary({ expenses }) {

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const food = expenses
    .filter(e => e.category === "Food")
    .reduce((sum, e) => sum + e.amount, 0);

  const travel = expenses
    .filter(e => e.category === "Travel")
    .reduce((sum, e) => sum + e.amount, 0);

  const shopping = expenses
    .filter(e => e.category === "Shopping")
    .reduce((sum, e) => sum + e.amount, 0);

  return (

    <div className="card shadow p-4 mb-4">

      <h4>Expense Summary</h4>
      <p>Total Records : {expenses.length}</p>
      <div className="mb-3"></div>

      <table className="table">

  <tbody>

    <tr>
      <th>Total</th>
      <td>₹ {total}</td>
    </tr>

    <tr>
      <th>Food</th>
      <td>₹ {food}</td>
    </tr>

    <tr>
      <th>Travel</th>
      <td>₹ {travel}</td>
    </tr>

    <tr>
      <th>Shopping</th>
      <td>₹ {shopping}</td>
    </tr>

  </tbody>

</table>

    </div>

  );

}

export default ExpenseSummary;