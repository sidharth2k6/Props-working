import React from "react";
import { travelData } from "./components/travel_data";
import TravelCard from "./components/TravelCard";

import "./App.css"

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My travel journal.</h1>
      </header>

      <div className="cards">
        {travelData.map((item) => (
          <TravelCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
