<template>
  <div>
    <v-sparkline
      :value="value"
      color="rgba(255, 255, 255, .7)"
      height="100"
      padding="24"
      stroke-linecap="round"
      smooth
    >
      <template #label="item">
        ${{ item.value }}
      </template>
    </v-sparkline>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
};
</script>