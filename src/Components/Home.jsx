import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import FilterComponent from "./Filters";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log("changed");
  }, [searchParams]);
  return (
    <div className="relative">
      <div> hello </div>
    </div>
  );
};

export default Home;
