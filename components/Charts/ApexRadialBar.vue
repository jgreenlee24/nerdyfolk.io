<template>
  <apexchart
    :options="chartOptions"
    :series="series"
    type="radialBar"
    :width="$vuetify.breakpoint.mobile ? 250 : 500"
  />
</template>

<script>
export default {
  data() {
    return {
      series: [76],
      chartOptions: {
        colors: ["#BA7FF6"],
        stroke: {
          dashArray: 4,
        },
        labels: [""],
        legend: {
          show: false,
        },
        chart: {
          type: "radialBar",
          offsetY: -10,
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
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#161b4a",
              strokeWidth: "97%",
              margin: 5,
            },
          },
        },
      },
    };
  },
};
</script>
