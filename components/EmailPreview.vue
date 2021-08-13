<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-subheader>{{ title }}</v-subheader>

        <v-expansion-panels
          flat
          hover
          multiple
          focusable
        >
          <v-expansion-panel
            v-for="(message, i) in messages"
            :key="i"
          >
            <v-expansion-panel-header color="primary--text base">
              <v-row
                align="center"
                class="spacer"
                justify="start"
                no-gutters
              >
                <v-col
                  :class="$vuetify.breakpoint.mdAndUp ? 'text-no-wrap' : ''"
                  cols="12"
                  lg="4"
                >
                  <v-avatar
                    size="36px"
                    class="mr-5"
                  >
                    <img
                      v-if="message.avatar"
                      alt="Avatar"
                      :src="message.avatar"
                    >
                    <v-icon
                      v-else
                      :color="message.color"
                      v-text="message.icon"
                    />
                  </v-avatar>
                  <strong>{{ message.title }}</strong>
                  <span
                    v-if="message.excerpt"
                    class="grey--text text-truncate hidden-sm-and-down"
                  >
                    &mdash;
                    {{ message.excerpt.substring(0, 60) }}...
                  </span>
                </v-col>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content
              color="base lighten-1"
              class="elevation-2"
            >
              <div
                class="
                  d-flex
                  flex-column flex-md-row
                  justify-space-between
                  align-md-center
                  caption
                  mx-4
                  mt-5
                  mb-3
                "
              >
                <div class="d-flex flex-column justify-center">
                  <span class="subtitle-2">
                    {{ message.name }}
                  </span>
                  <span class="hidden-md-and-up">
                    {{ message.excerpt }}
                  </span>
                </div>
                <div class="mt-3 mt-md-0">
                  <span>13:37 PM</span>
                  <v-icon
                    small
                    class="px-2"
                  >
                    $vuetify.icons.mdiDotsVertical
                  </v-icon>
                </div>
              </div>
              <v-divider class="mx-4" />

              <v-card-text v-text="lorem" />

              <v-divider class="mx-4" />

              <div class="d-flex flex-column mx-4">
                <v-textarea
                  full-width
                  rows="3"
                  outlined
                  clearable
                  placeholder="Write your message..."
                />
                <div class="d-flex flex-row flex-fill">
                  <v-btn icon>
                    <v-icon>$vuetify.icons.mdiPaperclip</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>$vuetify.icons.mdiImage</v-icon>
                  </v-btn>

                  <v-spacer />

                  <v-btn icon>
                    <v-icon>$vuetify.icons.mdiShare</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>$vuetify.icons.mdiDotsVertical</v-icon>
                  </v-btn>
                  <v-btn color="primary">
                    Send
                    <v-icon right>
                      $vuetify.icons.mdiSend
                    </v-icon>
                  </v-btn>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    messages: [
      {
        excerpt: "Dignissimos quia similique sit repellendus, laudantium",
        title: "Exactly what I needed",
        avatar: require(`~/assets/img/avataaars-2.png`),
        new: 1,
        name: "Ali Connors",
      },
      {
        icon: "$vuetify.icons.mdiRestore",
        name: "You",
        total: 3,
        title: "RE: Exactly what I needed",
        excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing",
      },
      {
        title: "A clean and modern UI",
        excerpt:
          "Deleniti tempore tenetur sunt provident id velit nisi obcaecati maxime iusto",
        name: "Trevor Hansen",
        avatar: require(`~/assets/img/avataaars-3.png`),
      },
    ],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
  }),
};
</script>