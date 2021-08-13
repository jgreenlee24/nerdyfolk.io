<template>
  <BaseSheet class-names="px-6 py-4 elevation-cs body-2">
    <v-sheet
      class="d-flex justify-space-between align-center"
      color="transparent"
    >
      <v-app-bar-nav-icon
        class="mr-4"
        @click="toggleNavbar"
      />

      <div class="hidden-xs-only">
        <h2
          v-if="title"
          class="font-weight-black primary--text text-capitalize"
        >
          {{ routeTitle }}
        </h2>
        <span class="grey--text text--lighten-3"> 11:00 AM • {{ date }} </span>
      </div>

      <v-spacer />

      <v-btn
        class="mr-2"
        color="primary"
        icon
      >
        <v-icon>$vuetify.icons.mdiViewDashboardOutline</v-icon>
      </v-btn>
      <NotificationMenu class="mr-2" />
      <v-divider
        vertical
        class="mx-2"
      />
      <ProfileMenu />
    </v-sheet>
  </BaseSheet>
</template>

<script>
import { getDate } from "~/data/common";
import { mapMutations } from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      date: null,
    };
  },
  computed: {
    routeTitle() {
      if (this.title.includes("-")) {
        return this.title.split("-").join(" ");
      }

      return this.title 
    }
  },
  mounted() {
    this.date = getDate();
  },
  methods: {
    ...mapMutations(["toggleNavbar"]),
  },
};
</script>