import React from "react";

import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import MealItemForm from "./components/MealItemForm/MealItemForm";

function App() {
  return (
    <>
      <Header />
      <MealsSummary />
      <MealItemForm />
    </>
  );
}

export default App;
