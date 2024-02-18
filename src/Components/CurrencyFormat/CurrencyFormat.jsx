import React from "react";
import numeral from "numeral";
// React Number Format
const CurrencyFormat = ({ amount }) => {
  const formattedAmount = numeral(amount).format("$0,0.00");
  return <div>{formattedAmount}</div>;
};
export default CurrencyFormat;
