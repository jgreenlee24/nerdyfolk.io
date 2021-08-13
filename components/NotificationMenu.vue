<template>
  <div>
    <v-menu
      offset-y
      left
    >
      <template #activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template #activator="{ on: tooltip }">
            <v-badge
              color="secondary"
              dot
              offset-x="8"
              offset-y="8"
            >
              <v-btn
                color="primary"
                icon
                v-bind="attrs"
                v-on="{ ...tooltip, ...menu }"
              >
                <v-icon> $vuetify.icons.mdiBellRingOutline </v-icon>
              </v-btn>
            </v-badge>
          </template>
          <span>📩 5 new Messages!</span>
        </v-tooltip>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Click Me1" },
        { title: "Click Me2" },
        { title: "Click Me3" },
        { title: "Click Me4" },
      ],
    };
  },
};
</script>