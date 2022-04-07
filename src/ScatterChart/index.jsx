import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more"; //module
import { options } from "./options";
HC_more(Highcharts); //Need to configure highchars for bubble chart

const ScatterChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ScatterChart;
