import React from "react";

import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import AvailableMeals from "./components/AvailableMeals/AvailableMeals";

function App() {
  return (
    <>
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </>
  );
}

export default App;
