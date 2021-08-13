<template>
  <div>
    <div class="d-flex align-center justify-space-between">
      <v-row align="end">
        <v-col
          cols="12"
          md="8"
        >
          <CommonSparkline :value="value" />
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <div class="font-weight-black text-right display-1">
            640
          </div>
          <div class="body-1 text-right font-weight-medium">
            Revenue Today
          </div>
        </v-col>
        <div class="w-100">
          <v-col cols="12">
            <RevenueTable />
          </v-col>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [523, 446, 675, 510, 590, 460, 640],
    };
  },
};
</script>