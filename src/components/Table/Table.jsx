import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = ({ formDeatiltoShow }) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          {/* <th>Invested Capital</th> */}
        </tr>
      </thead>
      <tbody>
        {formDeatiltoShow.map((vl, id) => {
          return (
            <tr key={id}>
              <td>{vl?.year}</td>
              <td>{formatter.format(vl?.savingsEndOfYear)}</td>
              <td>{formatter.format(vl?.yearlyInterest)}</td>
              <td>{formatter.format(vl?.yearlyContribution)}</td>
              {/* <td>{ props.formDeatiltoShow.}</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
