import React, { useState } from "react";

export default function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    const conversionRate = 0.011; // Example rate: 1 INR = 0.011 EUR
    setEuro((rupees * conversionRate).toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter (INR → EUR)</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Rupees (₹):{" "}
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
          />
        </label>
        &nbsp;
        <button type="submit">Convert</button>
      </form>

      {euro && (
        <h3>
          {rupees} INR = {euro} EUR
        </h3>
      )}
    </div>
  );
}
