<template>
  <v-container>
    <v-alert
      dismissible
      text
      dense
      color="secondary"
      icon="$vuetify.icons.mdiInformationOutline"
      border="left"
    >
      <strong>You have 2 unread messages!</strong>
      Make sure you check them out! 📬
    </v-alert>
    <v-row>
      <v-col
        cols="12"
        md="5"
        lg="3"
        class="order-last order-md-first"
      >
        <BaseSheet
          height="100%"
          color="base"
        >
          <v-navigation-drawer
            :color="glassmorph ? 'transparent' : 'base'"
            permanent
            floating
            width="100%"
            class="py-2"
          >
            <template #prepend>
              <div class="mx-3 mb-3">
                <v-btn
                  block
                  :color="glassmorph ? 'glass' : 'base lighten-1'"
                  rounded
                >
                  <v-icon
                    left
                    small
                  >
                    $vuetify.icons.mdiEmailPlus
                  </v-icon>
                  New Message
                </v-btn>
              </div>
            </template>

            <v-subheader>Email</v-subheader>

            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action v-if="item.incoming">
                  <v-badge
                    :value="item.incoming"
                    :content="item.incoming"
                    inline
                    color="secondary"
                  />
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider class="my-1" />

            <!-- (OPTIONAL) Folder section -->
            <!-- <v-subheader>
              Folders
              <v-icon
                class="ml-auto"
                small
              >
                $vuetify.icons.mdiPlus
              </v-icon>
            </v-subheader>

            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in folders"
                :key="item.title"
                link
              >
                <v-list-item-icon>
                  <v-icon
                    small
                    :color="item.color"
                  >
                    {{ item.icon }}
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action v-if="item.incoming">
                  <v-badge
                    :value="item.incoming"
                    :content="item.incoming"
                    inline
                    color="secondary"
                  />
                </v-list-item-action>
              </v-list-item>
            </v-list> -->

            <!-- <v-divider class="my-1" /> -->
            <!-- Endof Folder section -->

            <template #append>
              <v-subheader>
                Hangouts
                <v-icon
                  class="ml-auto"
                  small
                >
                  $vuetify.icons.mdiPlus
                </v-icon>
              </v-subheader>

              <v-list
                dense
                nav
              >
                <v-list-item
                  v-for="(item, index) in users.slice(0, 3)"
                  :key="index"
                  dense
                  link
                >
                  <v-list-item-avatar>
                    <v-img :src="item.src" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <div class="d-flex align-center justify-start">
                        <v-icon
                          size="6"
                          left
                          :color="statusColor(item.status)"
                        >
                          $vuetify.icons.mdiCircle
                        </v-icon>

                        <span>{{ item.status }}</span>
                      </div>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-tooltip right>
                      <template #activator="{ on, attrs }">
                        <v-btn
                          dark
                          v-bind="attrs"
                          icon
                          v-on="on"
                        >
                          <v-icon small>
                            $vuetify.icons.mdiPhonePlus
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Start Meeting</span>
                    </v-tooltip>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </template>
          </v-navigation-drawer>
        </BaseSheet>
      </v-col>
      <v-col
        cols="12"
        md="7"
        lg="9"
      >
        <BaseSheet height="100%">
          <v-text-field
            placeholder="Search"
            append-icon="$vuetify.icons.mdiMagnify"
            class="rounded-lg"
            solo
            :background-color="glassmorph ? 'glass' : 'base lighten-1'"
            clearable
            hide-details
          />

          <v-divider class="my-4" />

          <div>
            <v-list
              two-line
              dense
              color="transparent"
            >
              <v-list-item-group active-class="primary--text">
                <template v-for="(item, index) in messages">
                  <v-hover
                    v-slot="{ hover }"
                    :key="`inbox-${index}`"
                  >
                    <v-list-item
                      :class="hover ? 'border-list-item-elevated py-1' : ''"
                      @click="drawerRight = !drawerRight"
                    >
                      <v-list-item-avatar>
                        <v-img
                          contain
                          width="35"
                          height="35"
                          :src="item.src"
                          class="rounded"
                        />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title
                          class="text-caption font-weight-light"
                        >
                          {{ item.title }}
                        </v-list-item-title>

                        <v-list-item-subtitle
                          class="text--primary"
                          v-text="item.headline"
                        />

                        <v-list-item-subtitle v-text="item.subtitle" />
                      </v-list-item-content>
                      <v-list-item-action v-if="item.unread">
                        <v-chip
                          color="error"
                          small
                        >
                          {{ item.unread }}
                        </v-chip>
                      </v-list-item-action>
                      <v-list-item-action>
                        <v-list-item-action-text v-text="item.action" />
                        <v-btn icon>
                          <v-icon small>
                            $vuetify.icons.mdiStarOutline
                          </v-icon>
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </v-hover>
                </template>
              </v-list-item-group>
            </v-list>

            <v-navigation-drawer
              v-model="drawerRight"
              right
              color="base"
              width="100%"
              absolute
              class="rounded-lg"
            >
              <div class="d-flex align-center justify-space-between pa-4">
                <div>
                  <v-btn
                    icon
                    @click="drawerRight = !drawerRight"
                  >
                    <v-icon> $vuetify.icons.mdiClose </v-icon>
                  </v-btn>
                </div>
                <div>
                  <v-btn icon>
                    <v-icon color="grey lighten-2">
                      $vuetify.icons.mdiStarOutline
                    </v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon color="grey lighten-2">
                      $vuetify.icons.mdiPrinter
                    </v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon color="grey lighten-2">
                      $vuetify.icons.mdiDeleteOutline
                    </v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon color="grey lighten-2">
                      $vuetify.icons.mdiDotsVertical
                    </v-icon>
                  </v-btn>
                </div>
              </div>
              <v-divider class="my-1" />
              <EmailPreview title="Today" />
              <EmailPreview title="Yesterday" />
            </v-navigation-drawer>
          </div>
        </BaseSheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      drawerRight: false,
      items: [
        {
          title: "Inbox",
          icon: "$vuetify.icons.mdiInboxArrowDown",
          incoming: 7,
        },
        {
          title: "Starred",
          icon: "$vuetify.icons.mdiStar",
          incoming: 3,
        },
        { title: "Sent", icon: "$vuetify.icons.mdiSend" },
        { title: "Archived", icon: "$vuetify.icons.mdiArchive" },
        { title: "Spam", icon: "$vuetify.icons.mdiAlertOctagon" },
        { title: "Deleted", icon: "$vuetify.icons.mdiDelete" },
      ],
      folders: [
        {
          title: "Work",
          icon: "$vuetify.icons.mdiCircleOutline",
          color: "primary",
        },
        {
          title: "Private",
          icon: "$vuetify.icons.mdiCircleOutline",
          color: "secondary",
        },
        {
          title: "Projects",
          icon: "$vuetify.icons.mdiCircleOutline",
          color: "info",
        },
      ],
      messages: [
        {
          action: "15:12 PM",
          headline: "The perfect admin theme I was looking for",
          subtitle:
            "Laudantium voluptate blanditiis doloremque quas dicta aut tempora perferendis, deleniti tempore",
          title: "Ali Connors",
          product: "NERDYFOLK Dashboard",
          rating: 4.5,
          src: require(`~/assets/img/avataaars-0.png`),
          unread: 3,
        },
        {
          action: "15:08 PM",
          headline: "Highly recommended to everyone",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quos.",
          title: "Eric Peeters",
          product: "Vuetify Material Dashboard Pro",
          rating: 5,
          src: require(`~/assets/img/avataaars-1.png`),
          unread: 2,
        },
        {
          action: "14:32 PM",
          headline: "Exactly what I needed",
          subtitle: "Dignissimos quia similique sit repellendus, laudantium",
          title: "John Smith",
          product: "Vuetify Material Dashboard Pro",
          rating: 5,
          src: require(`~/assets/img/avataaars-2.png`),
          unread: null,
        },
        {
          action: "14:12 PM",
          headline: "A clean and modern UI",
          subtitle:
            "Deleniti tempore tenetur sunt provident id velit nisi obcaecati maxime iusto",
          title: "Trevor Hansen",
          product: "Flairo Theme Pro",
          rating: 4.5,
          src: require(`~/assets/img/avataaars-3.png`),
          unread: null,
        },
        {
          action: "13:37 PM",
          headline: "Project suggestions",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quos.",
          title: "Britta Holt",
          product: "Zero Theme Pro",
          rating: 5,
          src: require(`~/assets/img/avataaars-4.png`),
          unread: null,
        },
        {
          action: "13:32 PM",
          headline: "Happy with my purchase",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quos.",
          title: "Eric Peeters",
          product: "Vuetify Material Dashboard Pro",
          rating: 5,
          src: require(`~/assets/img/avataaars-1.png`),
          unread: null,
        },
        {
        action: "15:12 PM",
        headline: "The perfect admin theme I was looking for",
        subtitle:
          "Laudantium voluptate blanditiis doloremque quas dicta aut tempora perferendis, deleniti tempore",
        title: "Ali Connors",
        product: "NERDYFOLK Dashboard",
        rating: 4.5,
        src: require(`~/assets/img/avataaars-0.png`),
        unread: 3,
      },
      ],

      users: [
        {
          name: "Ali Connors",
          status: "Online",
          src: require(`~/assets/img/avataaars-0.png`),
        },
        {
          name: "Eric Peeters",
          status: "Away",
          src: require(`~/assets/img/avataaars-1.png`),
        },
        {
          name: "John Smith",
          status: "Busy",
          src: require(`~/assets/img/avataaars-2.png`),
        },
        {
          name: "Trevor Hansen",
          status: "Busy",
          src: require(`~/assets/img/avataaars-3.png`),
        },
        {
          name: "Britta Holt",
          status: "Online",
          src: require(`~/assets/img/avataaars-4.png`),
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["glassmorph"]),
  },
  methods: {
    statusColor(val) {
      switch (val) {
        case "Online":
          return "success";
        case "Busy":
          return "error";
        case "Away":
          return "warning";
      }
    },
  },
};
</script>