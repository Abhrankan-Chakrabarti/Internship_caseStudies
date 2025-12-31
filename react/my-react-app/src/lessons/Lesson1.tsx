// src/lessons/Lesson1.tsx
import React, { useState } from "react";
import PortfolioSummary from "../components/PortfolioSummary";
import AssetEditor from "../components/AssetEditor";
import type { Asset } from "../components/PortfolioSummary";

const Lesson1: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  const handleUpdate = (asset: Asset) => {
    setAssets((prev) => {
      const existing = prev.find((a) => a.symbol === asset.symbol);
      if (existing) {
        return prev.map((a) => (a.symbol === asset.symbol ? asset : a));
      }
      return [...prev, asset];
    });
  };

  return (
    <div>
      <h2>Lesson 1: Portfolio Dashboard</h2>
      <AssetEditor onUpdate={handleUpdate} />
      <PortfolioSummary assets={assets} />
    </div>
  );
};

export default Lesson1;
