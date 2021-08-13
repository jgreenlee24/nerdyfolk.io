<template>
  <BaseSheet>
    <v-sheet
      color="transparent"
      class="
        rounded-t rounded-b-0
        hero-image
        d-flex
        align-lg-end align-center
        justify-center justify-lg-start
      "
      height="160"
    >
      <v-avatar
        :size="$vuetify.breakpoint.xlOnly ? 180 : 145"
        class="profile-picture offset-image stroke-1 mx-12"
      >
        <v-img :src="require(`~/assets/img/pp.webp`)" />
      </v-avatar>
    </v-sheet>

    <div class="my-3 offset-lg-3 pl-lg-12 pl-xl-4 my-md-3 mt-15 mt-md-3">
      <div class="font-weight-black text-h5 d-flex align-center">
        Justin Greenlee
        <v-spacer />
        <v-tooltip right>
          <template #activator="{ on, attrs }">
            <v-btn
              small
              outlined
              class="primary--text"
              fab
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="base lighten-4">
                $vuetify.icons.mdiPencil
              </v-icon>
            </v-btn>
          </template>
          <span>Edit Profile</span>
        </v-tooltip>
      </div>
      <div class="grey--text text--lighten-2 mb-2 mt-1">
        Development Team
      </div>
      <v-chip color="error">
        <v-icon
          left
          small
        >
          $vuetify.icons.mdiFlag
        </v-icon>The Netherlands
      </v-chip>
      <div class="d-flex flex-row align-center my-4 gap-md">
        <div
          v-for="(item, index) in socials"
          :key="index"
        >
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                fab
                color="base lighten-1"
                small
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-btn>
            </template>
            <span>{{ item.name }}</span>
          </v-tooltip>
        </div>
      </div>
    </div>
  </BaseSheet>
</template>


<script>
export default {
  data() {
    return {
      socials: [
        {
          name: "GitHub",
          icon: "$vuetify.icons.mdiGithub",
        },
        {
          name: "Discord",
          icon: "$vuetify.icons.mdiDiscord",
        },
        {
          name: "Slack",
          icon: "$vuetify.icons.mdiSlack",
        },
        {
          name: "Gmail",
          icon: "$vuetify.icons.mdiGmail",
        },
        {
          name: "Google Meet Now",
          icon: "$vuetify.icons.mdiVideo",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.hero-image {
  background-color: #1c0046;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
}
</style>
