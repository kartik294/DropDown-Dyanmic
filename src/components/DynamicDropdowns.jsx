// DynamicDropdowns.jsx

import "./DynamicDropdowns.css";
import { useState } from "react";

const data = {
  countries: {
    USA: {
      states: ["California", "Texas", "Florida"],
      capitals: {
        California: "Sacramento",
        Texas: "Austin",
        Florida: "Tallahassee",
      },
    },
    India: {
      states: ["Maharashtra", "Gujarat", "Karnataka"],
      capitals: {
        Maharashtra: "Mumbai",
        Gujarat: "Gandhinagar",
        Karnataka: "Bangalore",
      },
    },
    Australia: {
      states: ["New South Wales", "Victoria", "Queensland"],
      capitals: {
        "New South Wales": "Sydney",
        Victoria: "Melbourne",
        Queensland: "Brisbane",
      },
    },
  },
};

function DynamicDropdowns() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCapital, setSelectedCapital] = useState("");
  const [states, setStates] = useState([]);
  const [capitals, setCapitals] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setSelectedState("");
    setSelectedCapital("");
    setStates(data.countries[country]?.states || []);
    setCapitals([]);
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setSelectedCapital("");
    setCapitals(
      data.countries[selectedCountry]?.capitals[state]
        ? [data.countries[selectedCountry].capitals[state]]
        : []
    );
  };

  const handleCapitalChange = (event) => {
    setSelectedCapital(event.target.value);
  };

  return (
    <div className="container">
      <h2>Dynamic Dropdowns in React</h2>

      <div className="dropdown-container">
        <label>Country: </label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {Object.keys(data.countries).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown-container">
        <label>State: </label>
        <select
          value={selectedState}
          onChange={handleStateChange}
          disabled={!selectedCountry}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown-container">
        <label>Capital: </label>
        <select
          value={selectedCapital}
          onChange={handleCapitalChange}
          disabled={!selectedState}
        >
          <option value="">Select Capital</option>
          {capitals.map((capital) => (
            <option key={capital} value={capital}>
              {capital}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DynamicDropdowns;
