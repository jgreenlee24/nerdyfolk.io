<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart(
      {
        labels: [
          "NERDYFOLK Ecommerce",
          "Vuetify Material Dashboard",
          "Zero Theme Pro",
          "Flairo Theme Pro",
        ],
        datasets: [
          {
            data: [55, 34, 15, 11],
            borderColor: ["#fff", "#fff", "#fff", "#fff"],
            backgroundColor: [
              "rgba(255, 249, 250, 0.8)",
              "rgba(233, 236, 239, 0.6)",
              "rgba(222, 226, 230, 0.55)",
              "rgba(206, 212, 218, 0.3)",
            ],
            borderWidth: 2,
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          displayColors: false,
        },
      }
    );
  },
};
</script>
