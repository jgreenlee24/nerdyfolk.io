<template>
  <BaseSheet>
    <h4 class="primary--text font-weight-bold ls px-3 py-1">
      Team Members
    </h4>

    <NewCustomers :height="240" />
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
      members: [
        {
          title: "Ali Connors",
          src: require(`~/assets/img/avataaars-5.png`),
        },
        {
          title: "Eric Peeters",
          src: require(`~/assets/img/avataaars-1.png`),
        },
        {
          title: "John Smith",
          src: require(`~/assets/img/avataaars-2.png`),
        },
        {
          title: "Trevor Hansen",
          src: require(`~/assets/img/avataaars-3.png`),
        },
        {
          title: "Britta Holt",
          src: require(`~/assets/img/avataaars-4.png`),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>