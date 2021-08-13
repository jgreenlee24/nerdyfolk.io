<template>
  <div>
    <v-btn
      bottom
      color="primary"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>$vuetify.icons.mdiCardAccountDetails</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="580"
    >
      <BaseSheet
        class-names="pa-6"
        color="tertiary"
      >
        <v-row>
          <v-col cols="12">
            <div
              class="d-flex justify-center flex-md-row flex-column align-center"
              :class="$vuetify.breakpoint.mdAndDown ? 'gap-sm' : ''"
            >
              <v-list-item>
                <v-list-item-action>
                  <v-img
                    src="v2.png"
                    :width="$vuetify.breakpoint.mdAndUp ? 80 : 70"
                    :height="$vuetify.breakpoint.mdAndUp ? 80 : 70"
                    class="inverted"
                  />
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title
                    class="font-weight-black px-0"
                    :class="
                      $vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'
                    "
                  >
                    NERDYFOLK
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Like what you see? Contact us
                    <v-icon
                      right
                      color="secondary"
                      small
                    >
                      $vuetify.icons.mdiArrowRight
                    </v-icon>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider
                vertical
                class="mx-6"
              />

              <div class="d-flex gap-lg align-center mr-2">
                <div
                  v-for="(item, index) in categories"
                  :key="index"
                >
                  <div class="d-flex flex-column align-center justify-center">
                    <v-tooltip bottom>
                      <template #activator="{ on, attrs }">
                        <v-btn
                          fab
                          outlined
                          icon
                          width="40"
                          height="40"
                          color=""
                          v-bind="attrs"
                          :href="item.link ? item.link : '#'"
                          v-on="on"
                        >
                          <v-icon>
                            {{ item.icon }}
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>{{ item.tooltip }}</span>
                    </v-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </BaseSheet>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      categories: [
        {
          icon: "$vuetify.icons.mdiLinkedin",
          link: "https://www.linkedin.com/in/m-polat/",
          tooltip: "LinkedIn",
        },
        {
          icon: "$vuetify.icons.mdiDiscord",
          tooltip: "Justin#5986",
        },
        {
          icon: "$vuetify.icons.mdiGithub",
          link: "https://github.com/Justin75",
          tooltip: "GitHub",
        },
      ],
    };
  },
};
</script>