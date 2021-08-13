<template>
  <apexchart
    :options="customChartOptions()"
    :series="customChartSeries()"
    height="80"
  />
</template>

<script>
export default {
  props: {
    lineColor: {
      type: String,
      default: null,
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      series: [
        {
          name: "",
        },
      ],
      chartOptions: {
        legend: {
          show: false,
        },
        chart: {
          group: "sparklines",
          type: "area",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          selection: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
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
        title: {
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
        yaxis: {
          tickAmount: 1,
          min: 0,
          max: 8,
          lines: {
            show: false,
          },
          labels: {
            show: false,
            minWidth: 1,
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
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: ["#00000033"],
            inverseColors: false,
            opacityFrom: 0.35,
            opacityTo: 0.35,
            stops: [100],
          },
        },
      },
    };
  },
  methods: {
    randomData() {
      return Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
    },
    customChartSeries() {
      const data = this.data.length > 0 ? this.data : this.randomData();
      const options = this.customChartOptions();

      this.series[0]["data"] = data;
      options.yaxis.max = Math.max(...data) * 1.1; // vertical offset

      return this.series;
    },
    customChartOptions() {
      if (this.lineColor) this.chartOptions.colors = [this.lineColor];

      return this.chartOptions;
    },
  },
};
</script>