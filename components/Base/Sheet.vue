<template>
  <v-sheet
    id="baseSheet"
    :color="!glassmorph ? 'base' : ''"
    :height="height"
    :class="[
      classNames ? classNames : 'px-6 py-4',
      outline ? 'sheets--outlined' : '',
      shadow ? 'elevation-5' : '',
      glassmorph ? 'glassmorph--layout' : '',
    ]"
  >
    <slot />
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    classNames: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: "auto",
    },
    color: {
      type: String,
      default: "base",
    },
  },
  computed: {
    ...mapGetters(["outline", "shadow", "glassmorph"]),
  },
};
</script>