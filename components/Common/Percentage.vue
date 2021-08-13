<template>
  <div class="d-flex flex-column">
    <span
      v-if="title"
      class="text-overline text-truncate"
    >{{ title }}</span>

    <div class="d-flex align-center justify-center">
      <v-icon
        :color="Number(percentage) > 0 ? (color ? color : 'success') : 'error'"
        small
        left
      >
        {{
          Number(percentage) > 0
            ? "$vuetify.icons.mdiArrowUp"
            : "$vuetify.icons.mdiArrowDown"
        }}
      </v-icon>

      <span>{{ Math.abs(percentage) }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    percentage: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: null,
    },
  },
  computed: {
    name() {
      return this.data;
    },
  },
};
</script>