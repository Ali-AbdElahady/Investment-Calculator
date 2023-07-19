const Result = ({ data, initialInvestment }) => {
    console.log(data);
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((yearData) => (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{yearData.savingsEndOfYear}</td>
              <td>{yearData.yearlyContribution}</td>
              <td>
                {yearData.savingsEndOfYear -
                  initialInvestment -
                  yearData.yearlyContribution * yearData.year}
              </td>
              <td>{initialInvestment + yearData.yearlyContribution * yearData.year}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default Result;
