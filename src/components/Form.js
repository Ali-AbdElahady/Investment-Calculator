import { useEffect, useState } from "react";

const Form = ({ onSubmitHandler }) => {
  const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    onSubmitHandler(userInput);
  };

  const formResetHandler = (event) => {
    console.log("reset");
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor={"current-savings"}>{"Current Savings ($)"}</label>
          <input
            type={"number"}
            required
            id={"current-savings"}
            value={userInput["current-savings"]}
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor={"yearly-contribution"}>{"Yearly Savings ($)"}</label>
          <input
            type={"number"}
            required
            id={"yearly-contribution"}
            value={userInput["yearly-contribution"]}
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor={"expected-return"}>
            {"Expected Interest (%, per year)"}
          </label>
          <input
            type={"number"}
            required
            id={"expected-return"}
            value={userInput["expected-return"]}
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor={"duration"}>{"Investment Duration (years)"}</label>
          <input
            type={"number"}
            required
            id={"duration"}
            value={userInput["duration"]}
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={formResetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};
export default Form;
