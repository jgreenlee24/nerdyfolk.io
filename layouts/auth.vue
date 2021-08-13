<template>
  <v-app>
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      absolute
      top
      color="secondary"
    />

    <v-main class="gradient-purple-blue">
      <div v-if="loading">
        <div
          class="d-flex align-center justify-center w-100 full-height mt-n100"
        >
          <CustomLoader />
        </div>
      </div>
      <v-fade-transition v-else>
        <nuxt />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  watch: {
    $route() {
      this.load();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.load();
    });
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 400);
    },
  },
};
</script>

<style scoped>
.mt-n100 {
  margin-top: -100px !important;
}
</style>
