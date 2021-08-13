import
randomData
  from './common';

export const lineCharts = [{
  chartdata: {
    labels: randomData().labels,
    datasets: [{
      label: "Dataset",
      backgroundColor: "#0b0b65",
      borderColor: "coral",
      pointBackgroundColor: "coral",
      data: randomData().data,
    },],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
  },
},
{
  chartdata: {
    labels: randomData().labels,
    datasets: [{
      label: "Dataset",
      backgroundColor: "transparent",
      borderColor: "#0174bc",
      pointBackgroundColor: "#0174bc",
      data: randomData().data,
    },
    {
      label: "Dataset 2",
      backgroundColor: "transparent",
      borderColor: "#bc0060",
      pointBackgroundColor: "#bc0060",
      data: randomData().data,
    },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
  },
},
{
  chartdata: {
    labels: randomData(7).labels,
    datasets: [{
      axis: "x",
      label: "Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 205, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(201, 203, 207, 1)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 10,
    },],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
  },
},
{
  chartdata: {
    labels: [
      1800, 1850, 1900, 1950,
      1999, 2050,
    ],
    datasets: [{
      data: [
        107, 111, 133, 221, 783,
        2478,
      ],
      label: "Africa",
      borderColor: "#3e95cd",
      fill: false,
    },
    {
      data: [
        635, 809, 947, 1402,
        3700, 5267,
      ],
      label: "Asia",
      borderColor: "#8e5ea2",
      fill: false,
    },
    {
      data: [
        203, 276, 408, 547, 675,
        734,
      ],
      label: "Europe",
      borderColor: "#3cba9f",
      fill: false,
    },
    {
      data: [
        24, 38, 74, 167, 508, 784,
      ],
      label: "Latin America",
      borderColor: "#e8c3b9",
      fill: false,
    },
    {
      data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
      label: "North America",
      borderColor: "#c45850",
      fill: false,
    },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
  },
},
];

export const barCharts = [{
  chartdata: {
    labels: [
      "Africa",
      "Asia",
      "Europe",
      "Latin America",
      "North America",
    ],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: [
        "#0174bc",
        "#EC5EB7",
        "#40ED93",
        "#FC9748",
        "#f87979",
      ],
      data: [2478, 5267, 734, 784, 433],
    },],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
  },
},
{
  chartdata: {
    labels: randomData(7).labels,
    datasets: [{
      label: "Dataset",
      data: randomData(7).data,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      display: false
    },
  },
},
];

export const hbarCharts = [{
  chartdata: {
    labels: randomData(6).labels,
    datasets: [{
      axis: "y",
      label: "Dataset",
      data: randomData(6).data,
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 205, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(201, 203, 207, 1)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },],
  },
  options: {
    responsive: true,
    legend: {
      display: false
    },
  },
},
{
  chartdata: {
    labels: randomData(6).labels,
    datasets: [{
      axis: "y",
      label: "Dataset",
      data: randomData(6).data,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },],
  },
  options: {
    responsive: true,
    legend: {
      display: false
    },
  },
},
];

export const otherCharts = [{
  type: "Doughnut",
  chartdata: {
    labels: [
      "Africa",
      "Asia",
      "Europe",
      "Latin America",
      "North America",
    ],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: [
        "#0174bc",
        "#f87979",
        "#40ED93",
        "#EC5EB7",
        "#FC9748",
      ],
      data: [1400, 467, 734, 784, 433],
    },],
  },
  options: {
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
    responsive: true,
    legend: {
      display: false
    },
  },
},
{
  type: "Doughnut",
  chartdata: {
    labels: [
      "Africa",
      "Asia",
      "Europe",
      "Latin America",
      "North America",
    ],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
      data: [1400, 467, 734, 784, 433],
    },],
  },
  options: {
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
    responsive: true,
    legend: {
      display: false
    },
  },
},

{
  type: "Bubble",
  chartdata: {
    labels: "Africa",
    datasets: [{
      label: ["China"],
      backgroundColor: "rgba(255, 99, 132, 0.25)",
      borderColor: "rgba(255, 99, 132, 1)",
      data: [{
        x: 21269017,
        y: 5.245,
        r: 15,
      },],
    },
    {
      label: ["Denmark"],
      backgroundColor: "rgba(75, 192, 192, 0.25)",
      borderColor: "rgb(75, 192, 192)",
      data: [{
        x: 258702,
        y: 7.526,
        r: 10,
      },],
    },
    {
      label: ["Germany"],
      backgroundColor: "rgba(255, 159, 64, 0.25)",
      borderColor: "rgba(255, 159, 64, 1)",
      data: [{
        x: 3979083,
        y: 6.994,
        r: 15,
      },],
    },
    {
      label: ["Japan"],
      backgroundColor: "rgba(153, 102, 255, 0.25)",
      borderColor: "rgb(153, 102, 255)",
      data: [{
        x: 4931877,
        y: 5.921,
        r: 15,
      },],
    },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Happiness",
        },
      },],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "GDP (PPP)",
        },
      },],
    },
    responsive: true,
    legend: {
      display: false
    },
  },
},
{
  type: "Radar",
  chartdata: {
    labels: randomData(6).labels,
    datasets: [{
      label: "1950",
      fill: true,
      backgroundColor: "rgba(153, 102, 255, 0.25)",
      borderColor: "rgb(153, 102, 255)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgb(153, 102, 255)",
      data: [0.77, 55.61, 21.69, 6.62, 6.82],
    },
    {
      label: "1950",
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.25)",
      borderColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgb(255, 99, 132)",
      data: [12.48, 34.16, 4.61, 6.06, 8.45],
    },
    {
      label: "2050",
      fill: true,
      backgroundColor: "rgba(255, 159, 64, 0.25)",
      borderColor: "rgb(255, 159, 64)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgb(255, 159, 64)",
      data: [25.48, 54.16, 7.61, 8.06, 4.45],
    },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Distribution in % of world population",
    },
    responsive: true,
    legend: {
      display: false
    },
  },
},
];

export const apexLineCustom = {
  data: [
    15000,
    16037,
    17049,
    16078,
    16739,
    16157,
    16141,
    15217,
    14076,
    14438,
    15435,
    16553,
    17574,
    18706,
    19752,
    21017,
    19612,
    20733,
    20025,
    18682,
    19245,
    20429,
    19275,
    20359,
    20810,
    19635,
  ],
};
