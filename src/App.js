import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {
  const [data, setData] = useState(null);
  console.log(data);
  const yearlyData = [];
  const calculateHandler = (userInput) => {
    let currentSavings = parseFloat(userInput["currectSavingValueKey"]);
    const yearlyContribution = parseFloat(userInput["yearlyContValueKey"]); // as mentioned: feel free to change the shape...
    const expectedReturn = parseFloat(userInput["exPercentageValueKey"] / 100);
    const duration = userInput["investDurationValueKey"];

    // The below code calculates yearly results (total savings, interest etc)

    for (let i = 0; i < duration; i++) {
      debugger;
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setData(yearlyData);
  };
  return (
    <div>
      <Header></Header>
      <Form setFormDetails={calculateHandler}></Form>
      {!data && (
        <h2 style={{ textAlign: "center" }}>Nothing for calculation</h2>
      )}
      {data && <Table formDeatiltoShow={data}></Table>}
    </div>
  );
}

export default App;
