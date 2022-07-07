import React from "react";
import Coutnries from "../components/countries/Countries";
import Filter from "../components/Filter/Filter";

function Home() {
  return (
    <div>
      <Filter />
      <Coutnries />
    </div>
  );
}

export default Home;
