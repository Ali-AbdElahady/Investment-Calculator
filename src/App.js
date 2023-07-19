import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [useInput, setUserInput] = useState(null);
  const yearlyData = []; // per-year results

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    setUserInput(userInput);
  };
  if(useInput){let currentSavings = +useInput["current-savings"]; // feel free to change the shape of this input object!
  const yearlyContribution = +useInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
  const expectedReturn = +useInput["expected-return"] / 100;
  const duration = +useInput["duration"];

  // The below code calculates yearly results (total savings, interest etc)
  if (useInput) {
    for (let i = 0; i < duration; i++) {
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
    console.log(yearlyData);
    // do something with yearlyData ...
  }}

  return (
    <div>
      <Header />
      <Form onSubmitHandler={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!useInput && (
        <p style={{ textAlign: "center" }}>No investment calculated yet</p>
      )}
      {useInput && (
        <Result
          data={yearlyData}
          initialInvestment={useInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
