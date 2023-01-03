import React, { useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/ChartsContainer";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";

const ChartsContainer = () => {
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  const [barChart, setBarChart] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly Application</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
