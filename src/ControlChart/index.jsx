import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { options } from "./options";

const ControlChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ControlChart;
