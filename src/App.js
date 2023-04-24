import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurence",
      amount: "260",
      date: new Date(2023, 2, 28),
    },
    {
      id: "e2",
      title: "TV",
      amount: "11",
      date: new Date(2023, 3, 18),
    },
    {
      id: "e3",
      title: "Paper",
      amount: "123",
      date: new Date(2023, 4, 22),
    },
    {
      id: "e3",
      title: "Cooking",
      amount: "421",
      date: new Date(2023, 5, 4),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
