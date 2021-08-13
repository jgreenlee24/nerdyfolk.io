<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradientSecond: null,
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 250);
    this.gradientSecond = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 250);

    this.gradient.addColorStop(0.5, "rgba(150, 0, 255, .15)");
    this.gradient.addColorStop(1, "rgba(102, 90, 255, 0.04)");

    this.gradientSecond.addColorStop(0.5, "rgba(0, 231, 255, 0.15)");
    this.gradientSecond.addColorStop(1, "rgba(0, 231, 255, 0)");

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
            borderColor: "#c022ff",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [7, 5, 7, 6, 5, 7, 5, 4, 7],
          },
          {
            label: "Wearables",
            borderColor: "#05CBE1",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: this.gradientSecond,
            data: [10, 8, 10, 9, 8, 9, 8, 7, 10],
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
                display: true,
                fontColor: "#ffffffbd",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: true,
                fontColor: "#ffffffbd",
              },
            },
          ],
        },
        animation: {
          duration: 1800,
        },
      }
    );
  },
};
</script>
