<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    color: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      gradient: null,
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 250);

    this.gradient.addColorStop(0.5, this.getColor().bg);
    this.gradient.addColorStop(1, "rgba(102, 90, 255, 0.04)");

    this.renderChart(
      {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Themes",
            borderColor: this.getColor().border,
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [7, 5, 7, 6, 5, 7, 5, 4, 7],
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          displayColors: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
                beginAtZero: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
                beginAtZero: true,
              },
            },
          ],
        },
      }
    );
  },
  methods: {
    getColor() {
      switch (this.color) {
        case "primary":
          return { border: "#BA7FF6", bg: "rgba(186, 127, 246, 0.15)" };
        case "secondary":
          return { border: "#EC5EB7", bg: "rgba(236, 94, 183, .15)" };
        case "info":
          return { border: "#05CBE1", bg: "rgba(0, 231, 255, 0.15)" };
        case "indigo":
          return { border: "#5468ff", bg: "rgba(84, 104, 255, 0.15)" };
        default:
          break;
      }
    },
  },
};
</script>
