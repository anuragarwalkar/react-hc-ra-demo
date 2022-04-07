function getStdDevAndMean(arr) {
  var i,
    j,
    total = 0,
    mean = 0,
    len = arr.length,
    diffSqredArr = [];
  for (i = 0; i < len; i += 1) {
    total += arr[i];
  }
  mean = total / len;
  for (j = 0; j < len; j += 1) {
    diffSqredArr.push(Math.pow(arr[j] - mean, 2));
  }

  return [
    Math.sqrt(
      diffSqredArr.reduce(function (firstEl, nextEl) {
        return firstEl + nextEl;
      }) / len
    ),
    mean
  ];
}

let dataset = [20, 23, 20, 21, 17, 15, 10, 15, 17, 45, 21, 20];
let stdDevAndMean = getStdDevAndMean(dataset);
let stdDev = stdDevAndMean[0];
let mean = stdDevAndMean[1];
let tickPositions = [
  -4 * stdDev + mean,
  -3 * stdDev + mean,
  -2 * stdDev + mean,
  -stdDev + mean,
  mean,
  stdDev + mean,
  2 * stdDev + mean,
  3 * stdDev + mean,
  4 * stdDev + mean
].map(Math.round);

dataset = dataset.map(function (value) {
  var point = {
    y: value
  };

  // Rule 1:
  if (value > 3 * stdDev + mean || value < -3 * stdDev + mean) {
    point.dataLabels = {
      enabled: true,
      format: "Rule 1"
    };
    point.color = "red";
  }

  return point;
});

export const options = {
  title: {
    text: "Control Chart"
  },

  yAxis: [
    {
      min: 0,
      max: 40,
      title: {
        text: "Number of occurences"
      },
      tickPositions: tickPositions,
      plotLines: [
        {
          value: 20,
          color: "black",
          dashStyle: "dash",
          width: 2,
          label: {
            text: "CL"
          }
        },
        {
          value: 3 * stdDev + mean,
          color: "black",
          dashStyle: "dash",
          width: 2,
          label: {
            text: "UCL"
          }
        },
        {
          value: -3 * stdDev + mean,
          color: "black",
          dashStyle: "dash",
          width: 2,
          label: {
            text: "LCL"
          }
        }
      ]
    },
    {
      opposite: true,
      tickPositions: tickPositions,
      labels: {
        formatter: function () {
          var labels = [
            "-4σ",
            "-3σ",
            "-2σ",
            "-σ",
            "mean",
            "σ",
            "2σ",
            "3σ",
            "4σ"
          ];

          return labels[tickPositions.indexOf(this.value)];
        }
      },
      linkedTo: 0
    }
  ],

  xAxis: {
    title: {
      text: "Sample number"
    }
  },

  series: [
    {
      name: "Product name",
      data: dataset
    }
  ]
};
