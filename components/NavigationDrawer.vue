<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :color="color"
    width="260"
    :floating="!navOutline"
  >
    <v-list-item class="py-2">
      <v-list-item-avatar size="50">
        <v-img
          src="/v2.png"
          class="rounded inverted"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-overline">
          NERDYFOLK Dashboard
        </v-list-item-title>
        <v-list-item-subtitle class="text-caption">
          v2.0.0
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider v-if="navOutline" />

    <v-list
      ripple="off"
      dense
      nav
    >
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="index"
        >
          {{ item.header }}
        </v-subheader>

        <template v-for="(child, i) in item.children">
          <v-list-group
            v-if="child.children"
            :key="i"
            append-icon="$vuetify.icons.mdiChevronDown"
          >
            <template #activator>
              <v-list-item-action v-if="child.icon">
                <v-icon
                  size="16"
                  class="ml-lg-5 mx-2"
                >
                  {{ child.icon }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in child.children"
              :key="i"
              link
              :to="child.path"
              exact
              nuxt
            >
              <v-list-item-action v-if="child.icon">
                <v-icon
                  size="6"
                  class="ml-lg-10 mx-2"
                >
                  {{ child.icon }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <!-- item has no children -->
          <v-list-item
            v-else
            :key="child.text"
            link
            :to="item.children[i].path"
            nuxt
          >
            <v-list-item-action v-if="child.icon">
              <v-icon
                size="16"
                class="ml-lg-5 mx-2"
              >
                {{ child.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ child.text }}
                <v-chip
                  v-if="child.new"
                  color="primary"
                  x-small
                  outlined
                  class="ml-1 d-none d-md-inline-flex"
                >
                  New
                </v-chip>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </template>
    </v-list>

    <template #append>
      <v-divider v-if="navOutline" />
      <div class="pa-4">
        <v-btn
          text
          class="w-100 mb-2"
          to="/documentation/architechture"
          color="grey lighten-2"
        >
          <v-icon :left="$vuetify.breakpoint.lgAndUp">
            $vuetify.icons.mdiInformationOutline
          </v-icon>
          <span v-if="$vuetify.breakpoint.lgAndUp">Documentation</span>
        </v-btn>
        <v-btn
          block
          color="secondary"
          href="https://store.vuetifyjs.com/products/nerdyfolk"
          class="rounded"
        >
          <v-icon :left="$vuetify.breakpoint.lgAndUp">
            $vuetify.icons.mdiCart
          </v-icon>
          <span v-if="$vuetify.breakpoint.lgAndUp">Buy Now</span>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          header: null,
          children: [
            {
              icon: "$vuetify.icons.mdiViewDashboard",
              text: "Dashboard",
              path: "/",
            },
            {
              icon: "$vuetify.icons.mdiViewDashboardOutline",
              text: "Dashboard v2",
              path: "/dashboard",
              new: true,
            },
          ],
        },

        {
          header: "Apps",
          children: [
            {
              icon: "$vuetify.icons.mdiChatProcessingOutline",
              text: "Blog",
              path: "/blog",
            },
            {
              icon: "$vuetify.icons.mdiForum",
              text: "Chat & Messages",
              path: "/chat",
            },
            {
              icon: "$vuetify.icons.mdiEmailMarkAsUnread",
              text: "Email",
              path: "/email",
            },
            {
              icon: "$vuetify.icons.mdiFile",
              text: "File Manager",
              path: "/file",
            },
            {
              icon: "$vuetify.icons.mdiFormatListChecks",
              text: "Tasks",
              path: "/tasks",
            },
            {
              icon: "$vuetify.icons.mdiStore",
              text: "Ecommerce",
              children: [
                {
                  icon: "$vuetify.icons.mdiCircle",
                  text: "Products",
                  path: "/ecommerce",
                },
                {
                  icon: "$vuetify.icons.mdiCircle",
                  text: "Edit Product",
                  path: "/ecommerce/edit",
                },
                {
                  icon: "$vuetify.icons.mdiCircle",
                  text: "Create Product",
                  path: "/ecommerce/create",
                },
              ],
            },
            {
              icon: "$vuetify.icons.mdiCalendar",
              text: "Calendar",
              path: "/calendar",
            },
          ],
        },

        {
          header: "Pages",
          children: [
            {
              icon: "$vuetify.icons.mdiAccountBox",
              text: "User Profile",
              path: "/profile",
            },
            {
              icon: "$vuetify.icons.mdiFaceAgent",
              text: "Contact Us",
              path: "/contact",
            },
            {
              icon: "$vuetify.icons.mdiLogin",
              text: "Authentication",
              path: "/login",
            },
            {
              icon: "$vuetify.icons.mdiFinance",
              text: "Charts",
              path: "/charts",
            },
            {
              icon: "$vuetify.icons.mdiHelpCircleOutline",
              text: "FAQ",
              path: "/faq",
            },
            {
              icon: "$vuetify.icons.mdiEarthArrowRight",
              text: "Error Page",
              path: "/404",
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["navColor", "navOutline", "navbar"]),
    drawer: {
      get() {
        return this.navbar;
      },
      set(val) {
        return this.toggleNavbar(val);
      },
    },
    color() {
      if (this.navColor == "transparent" && this.$vuetify.breakpoint.mobile) {
        return "tertiary darken-1";
      }

      return this.navColor;
    },
  },
  mounted() {
    if (this.$vuetify.breakpoint.lgAndUp) {
      this.toggleNavbar(true);
    } 
  },
  methods: {
    ...mapMutations(["toggleNavbar"]),
  },
};
</script>
