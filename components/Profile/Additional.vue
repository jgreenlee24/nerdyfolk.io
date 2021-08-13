<template>
  <BaseSheet>
    <h4 class="primary--text font-weight-bold ls px-3 py-1">
      Additional Information
    </h4>

    <v-list-item
      v-for="(item, index) in info"
      :key="index"
    >
      <v-list-item-avatar size="23">
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="caption font-weight-bold">
          {{ item.type }}
        </v-list-item-title>
        <v-list-item-subtitle class="text-caption">
          <span v-if="Array.isArray(item.text)">
            <span
              v-for="(value, ix) in item.text"
              :key="ix"
            >
              {{ `${value}${ix != item.text.length - 1 ? "," : ""}` }}
            </span>
          </span>
          <span v-else>
            {{ item.text }}
          </span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </BaseSheet>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          text: "Justin",
          type: "Nickname",
          icon: "$vuetify.icons.mdiAccount",
        },
        {
          text: "mert98.polat@gmail.com",
          type: "Email",
          icon: "$vuetify.icons.mdiEmail",
        },
        {
          text: ["English", "Dutch", "Turkish"],
          type: "Languages",
          icon: "$vuetify.icons.mdiTranslate",
        },
        {
          text: "25/6/2021",
          type: "Join Date",
          icon: "$vuetify.icons.mdiCalendar",
        },
        {
          text: "The Netherlands",
          type: "Country",
          icon: "$vuetify.icons.mdiEarth",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>