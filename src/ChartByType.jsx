import BubbleChart from "./BubbleChart";
import ScatterChart from "./ScatterChart";
import ControlChart from "./ControlChart";

const ChartByType = ({ type }) => {
  switch (type) {
    case "scatter":
      return <ScatterChart />;
    case "bubble":
      return <BubbleChart />;
    case "control":
      return <ControlChart />;
    default:
      return (
        <div
          style={{ color: "red", textAlign: "center", cursor: "not-allowed" }}
        >
          Selected Chart Type is Invalid
        </div>
      );
  }
};

export default ChartByType;
