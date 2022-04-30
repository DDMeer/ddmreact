import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const month = props.date.toLocalString('en-us', { month: 'long' });
  const day = props.date.toLocalString('en-us', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <ExpenseDate />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;