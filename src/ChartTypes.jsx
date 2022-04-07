import { useState, Children, cloneElement } from "react";

const ChartTypes = ({ children }) => {
  const [type, setType] = useState("bubble");

  const changeDefChartType = (e) => setType(e.target.name);

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button name="bubble" onClick={changeDefChartType}>
          Bubble Chart
        </button>
        <button name="scatter" onClick={changeDefChartType}>
          Scatter Chart
        </button>
        <button name="control" onClick={changeDefChartType}>
          SPC Chart
        </button>
      </div>
      <div style={{ marginTop: "30px" }}>
        {Children.map(children, (item) => {
          return cloneElement(item, { type });
        })}
      </div>
    </div>
  );
};

export default ChartTypes;
