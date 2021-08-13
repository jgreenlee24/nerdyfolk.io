<template>
  <div class="btn-wrapper">
    <v-btn
      color="white"
      icon
      class="icon-spin px-4"
      @click="toggleSettingsDrawer"
    >
      <v-icon>$vuetify.icons.mdiCog</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations([
      "toggleSettingsDrawer"
    ]),
  },
};
</script>

<style lang="scss" scoped>
.btn-wrapper {
  position: fixed;
  right: 0px;
  top: 11.25%;
  background: var(--v-secondary-base);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 2px 10px;
  z-index: 1;
}
</style>