import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handlePortfolio }) {
  const stockList = portfolio.map((stock) => (
    <Stock
      {...stock}
      onClick={handlePortfolio}
      key={stock.id}
      actionNumber={0}
    />
  ));

  return (
    <div>
      <h2>My Portfolio</h2>
      {stockList}
    </div>
  );
}

export default PortfolioContainer;
