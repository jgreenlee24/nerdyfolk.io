<template>
  <div>
    <v-container>
      <!-- Default Line Charts -->
      <v-row>
        <v-col
          v-for="(chart, index) in charts.lineCharts"
          :key="`line-${index}`"
          cols="12"
          md="6"
        >
          <BaseSheet height="100%">
            <CommonTitle
              :text="`Line Chart #${index + 1}`"
              spacing-title="mb-8"
              :reverse-subtitle="true"
            />
            <ChartsDefaultLine
              v-if="chart.chartdata"
              :chartdata="chart.chartdata"
              :options="chart.options"
              :height="280"
            />
          </BaseSheet>
        </v-col>
      </v-row>

      <!-- Default Bar Charts -->
      <v-row>
        <v-col
          v-for="(chart, index) in charts.barCharts"
          :key="`bar-${index}`"
          cols="12"
          md="6"
        >
          <BaseSheet height="100%">
            <CommonTitle
              :text="`Bar Chart #${index + 1}`"
              spacing-title="mb-8"
              :reverse-subtitle="true"
            />
            <ChartsDefaultBar
              v-if="chart.chartdata"
              :chartdata="chart.chartdata"
              :options="chart.options ? chart.options : null"
              :height="300"
            />
          </BaseSheet>
        </v-col>
        <v-col
          v-for="(chart, index) in charts.hbarCharts"
          :key="`hbar-${index}`"
        >
          <BaseSheet height="100%">
            <CommonTitle
              :text="`Horizontal Bar Chart #${index + 1}`"
              spacing-title="mb-8"
              :reverse-subtitle="true"
            />
            <ChartsDefaultHBar
              v-if="chart.chartdata"
              :chartdata="chart.chartdata"
              :options="chart.options ? chart.options : null"
              :height="150"
            />
          </BaseSheet>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="(chart, index) in charts.otherCharts"
          :key="`bar-${index}`"
          cols="12"
          md="6"
        >
          <BaseSheet height="100%">
            <CommonTitle
              :text="`${chart.type} Chart`"
              spacing-title="mb-8"
              :reverse-subtitle="true"
            />

            <ChartsDefaultDoughnut
              v-if="chart.type == 'Doughnut'"
              :chartdata="chart.chartdata"
              :options="chart.options ? chart.options : null"
              :height="225"
            />

            <ChartsDefaultBubble
              v-if="chart.type == 'Bubble'"
              :chartdata="chart.chartdata"
              :options="chart.options ? chart.options : null"
              :height="225"
            />

            <ChartsDefaultRadar
              v-if="chart.type == 'Radar'"
              :chartdata="chart.chartdata"
              :options="chart.options ? chart.options : null"
              :height="225"
            />
          </BaseSheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { lineCharts, barCharts, hbarCharts, otherCharts } from "~/data/charts";

export default {
  data() {
    return {
      charts: {},
    };
  },

  mounted() {
    this.charts = {
      lineCharts: lineCharts,
      barCharts: barCharts,
      hbarCharts: hbarCharts,
      otherCharts: otherCharts,
    };
  },
};
</script>
