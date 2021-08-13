<template>
  <apexchart
    :options="chartOptions"
    :series="series"
    height="400"
    type="area"
  />
</template>

<script>
import { apexLineCustom } from "~/data/charts";

export default {
  data() {
    return {
      series: [
        {
          name: "Total Revenue",
          data: apexLineCustom.data,
        },
      ],
      chartOptions: {
        colors: ["#ec5eb7"],
        chart: {
          type: "area",
          stacked: false,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        legend: {
          show: false,
        },
        xaxis: {
          lines: {
            show: false,
          },
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          crosshairs: {
            show: false,
          },
        },
        tooltip: {
          theme: "dark",
          x: {
            show: false,
          },
          onDatasetHover: {
            highlightDataSeries: true,
          },
          marker: {
            show: true,
          },
          shared: true,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
      },
    };
  },
};
</script>
