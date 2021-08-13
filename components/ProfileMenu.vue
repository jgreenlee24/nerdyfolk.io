<template>
  <div>
    <v-menu
      offset-y
      left
      open-on-hover
      nudge-bottom="10"
      close-delay="650"
      close-on-content-click
    >
      <template #activator="{ on, attrs }">
        <v-btn
          text
          :ripple="false"
          class="px-0 ml-5 rounded-pill"
          v-bind="attrs"
          v-on="on"
        >
          <v-avatar
            color="blue accent"
            size="35"
          >
            <v-img
              v-if="user && user.image"
              :src="user.image"
            />
          </v-avatar>
          <span
            class="text-none font-weight-regular ml-3 hidden-sm-and-down"
          >Welcome, {{ user.name }}</span>
          <v-icon>$vuetify.icons.mdiChevronDown</v-icon>
        </v-btn>
      </template>

      <v-card
        :outlined="outline"
        color="primary"
      >
        <v-list color="tertiary">
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar
                color="blue accent"
                size="35"
              >
                <v-img
                  v-if="user.image"
                  :src="user.image"
                />
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ user.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                What do you want to do?
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider />

          <div
            v-if="user"
            class="pt-0"
          >
            <v-list-item
              link
              to="/profile"
              exact
            >
              <v-list-item-icon>
                <v-icon>$vuetify.icons.mdiAccountBox</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Profile</v-list-item-title>
                <v-list-item-subtitle class="caption">
                  View your profile
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              link
              to="/tasks"
              exact
            >
              <v-list-item-icon>
                <v-icon> $vuetify.icons.mdiFormatListChecks </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Tasks</v-list-item-title>
                <v-list-item-subtitle class="caption">
                  Complete your daily tasks
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              link
              exact
            >
              <v-list-item-icon>
                <v-icon color="red darken-2">
                  $vuetify.icons.mdiExitToApp
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="`Sign out`" />
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "Justin",
        email: "mert98.polat@gmail.com",
        verified: true,
        orders_placed: 12,
        image: require("~/assets/img/avatar.svg"),
      },
    };
  },
  computed: {
    ...mapGetters(["outline"]),
  },
};
</script>