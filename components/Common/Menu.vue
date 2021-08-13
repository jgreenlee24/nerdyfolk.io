<template>
  <v-menu
    v-model="menu"
    offset-y
    open-on-hover
    left
  >
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "$vuetify.icons.mdiChevronDown",
    },
  },
  data() {
    return {
      menu: false,
      items: [
        { title: "Click Me 1" },
        { title: "Click Me 2" },
        { title: "Click Me 3" },
        { title: "Click Me 4" },
      ],
    };
  },
};
</script>