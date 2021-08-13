<template>
  <v-app>
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      absolute
      top
      color="secondary"
    />

    <NavigationDrawer />
    <SettingsDrawer />

    <v-main
      :class="[background ? 'transparent' : 'background--color', { 'glassmorph--enabled' : glassmorph}]"
    >
      <SettingsMenu />
      
      <div
        v-if="glassmorph"
        class="shape-1"
      >
        <img :src="require(`~/assets/img/shape2.svg`)">
      </div>
      <div
        v-if="glassmorph"
        class="shape-2"
        style="position: fixed; top: 0; left: 0"
      >
        <img :src="require(`~/assets/img/shape.svg`)">
      </div>
      
      <v-container class="mt-3">
        <v-row>
          <v-col cols="12">
            <TopBar
              v-if="$route.name != 'dashboard'"
              :title="routeName"
            />
          </v-col>
        </v-row>
      </v-container>
      
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

    <IdentityDialog />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["glassmorph", "background"]),
    routeName() {
      if (!this.$nuxt.$route.name) return "404";
      if (this.$nuxt.$route.name == "index") return "Dashboard";

      return this.$nuxt.$route.name;
    },
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