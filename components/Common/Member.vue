<template>
  <v-tooltip
    v-model="show"
    top
  >
    <template #activator="{ on, attrs }">
      <v-avatar
        :size="size ? size : 40"
        class="mr-1 mt-1"
        v-bind="attrs"
        v-on="on"
      >
        <v-img :src="member.src" />
      </v-avatar>
    </template>
    <span>{{ member.title }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      default: () => {},
      required: true,
    },
    size: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>