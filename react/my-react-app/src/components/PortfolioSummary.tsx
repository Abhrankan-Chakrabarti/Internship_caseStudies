// src/components/PortfolioSummary.tsx
import React from "react";

export interface Asset {
  name: string;
  symbol: string;
  value: number;
  change: number;
}

interface PortfolioSummaryProps {
  assets: Asset[];
}

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({ assets }) => {
  const totalValue = assets.reduce((sum, a) => sum + a.value, 0);
  const avgChange =
    assets.length > 0
      ? assets.reduce((sum, a) => sum + a.change, 0) / assets.length
      : 0;

  return (
    <div>
      <h2>Portfolio Summary</h2>
      <p>Total Value: ${totalValue.toFixed(2)}</p>
      <p>Average Change: {avgChange.toFixed(2)}%</p>
    </div>
  );
};

export default PortfolioSummary;
