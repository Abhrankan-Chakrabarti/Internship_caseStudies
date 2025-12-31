// src/components/AssetEditor.tsx
import React from "react";
import type { Asset } from "./PortfolioSummary";  // ✅ type-only import

interface AssetEditorProps {
  onUpdate: (asset: Asset) => void;
}

interface AssetEditorState {
  name: string;
  symbol: string;
  value: string;
  change: string;
}

class AssetEditor extends React.Component<AssetEditorProps, AssetEditorState> {
  state: AssetEditorState = {
    name: "",
    symbol: "",
    value: "",
    change: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as Pick<AssetEditorState, keyof AssetEditorState>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedAsset: Asset = {
      name: this.state.name,
      symbol: this.state.symbol,
      value: parseFloat(this.state.value),
      change: parseFloat(this.state.change),
    };
    this.props.onUpdate(updatedAsset);
    this.setState({ name: "", symbol: "", value: "", change: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Asset Name"
        />
        <input
          name="symbol"
          value={this.state.symbol}
          onChange={this.handleChange}
          placeholder="Symbol"
        />
        <input
          name="value"
          value={this.state.value}
          onChange={this.handleChange}
          type="number"
          placeholder="Value"
        />
        <input
          name="change"
          value={this.state.change}
          onChange={this.handleChange}
          type="number"
          placeholder="Change (%)"
        />
        <button type="submit">Add/Update Asset</button>
      </form>
    );
  }
}

export default AssetEditor;
