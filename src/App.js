import React from "react";

import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import AvailableMeals from "./components/AvailableMeals/AvailableMeals";

function App() {
  return (
    <>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default App;
