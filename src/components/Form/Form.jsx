import React, { useState } from "react";

const Form = (props) => {
  const [currectSavingValue, setCurrectSavingValue] = useState("");
  const [yearlyContValue, setYearlyContValue] = useState("");
  const [exPercentageValue, setExPercentageValue] = useState("");
  const [investDurationValue, setInvestDurationValue] = useState("");
  const currentSavingHandlerFun = (evnt) => {
    setCurrectSavingValue(evnt.target.value);
  };
  const yearlyContHandlerFun = (evnt) => {
    setYearlyContValue(evnt.target.value);
  };
  const exPercentageHandlerFun = (evnt) => {
    setExPercentageValue(evnt.target.value);
  };
  const investDurationHandlerFun = (evnt) => {
    setInvestDurationValue(evnt.target.value);
  };
  const resetBtnHandler = (evnt) => {
    evnt.preventDefault();
    setCurrectSavingValue("");
    setYearlyContValue("");
    setExPercentageValue("");
    setInvestDurationValue("");
  };
  const calculateBtnHandler = (evnt) => {
    evnt.preventDefault();
    props.setFormDetails({
      currectSavingValueKey: currectSavingValue,
      yearlyContValueKey: yearlyContValue,
      exPercentageValueKey: exPercentageValue,
      investDurationValueKey: investDurationValue,
    });
  };
  return (
    <form className="form" onSubmit={calculateBtnHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currectSavingValue}
            onChange={currentSavingHandlerFun}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContValue}
            onChange={yearlyContHandlerFun}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={exPercentageValue}
            onChange={exPercentageHandlerFun}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={investDurationValue}
            onChange={investDurationHandlerFun}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetBtnHandler}>
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
