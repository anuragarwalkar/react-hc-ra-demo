import Highcharts from "highcharts";

export const options = {
  chart: {
    type: "scatter",
    zoomType: "xy"
  },
  title: {
    text: "Height Versus Weight of 507 Individuals by Gender"
  },
  subtitle: {
    text: "Source: Heinz  2003"
  },
  xAxis: {
    title: {
      enabled: true,
      text: "Height (cm)"
    },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true
  },
  yAxis: {
    title: {
      text: "Weight (kg)"
    }
  },
  legend: {
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    x: 100,
    y: 70,
    floating: true,
    backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
    borderWidth: 1
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 5,
        states: {
          hover: {
            enabled: true,
            lineColor: "rgb(100,100,100)"
          }
        }
      },
      states: {
        hover: {
          marker: {
            enabled: false
          }
        }
      },
      tooltip: {
        headerFormat: "<b>{series.name}</b><br>",
        pointFormat: "{point.x} cm, {point.y} kg"
      }
    }
  },
  series: [
    {
      name: "Female",
      color: "rgba(223, 83, 83, .5)",
      data: [
        [161.2, 51.6],
        [167.5, 59.0],
        [159.5, 49.2],
        [157.0, 63.0],
        [155.8, 53.6],
        [170.0, 59.0]
      ]
    },
    {
      name: "Male",
      color: "rgba(119, 152, 191, .5)",
      data: [
        [174.0, 65.6],
        [175.3, 71.8],
        [193.5, 80.7],
        [186.5, 72.6],
        [187.2, 78.8],
        [181.5, 74.8],
        [184.0, 86.4],
        [184.5, 78.4],
        [175.0, 62.0]
      ]
    }
  ]
};
