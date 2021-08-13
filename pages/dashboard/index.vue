<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <BaseSheet
            v-if="$vuetify.breakpoint.mobile"
            class="mb-6"
          >
            <v-app-bar-nav-icon @click="toggleNavbar" />
          </BaseSheet>
          <BaseSheet>
            <div
              class="
                d-flex
                justify-space-between
                align-center
                flex-column flex-md-row
              "
            >
              <div class="d-inline-flex align-center">
                <v-badge
                  bordered
                  color="accent lighten-1"
                  content="7"
                  offset-x="16"
                  offset-y="26"
                >
                  <v-avatar
                    size="80"
                    class="stroke-1 profile-picture"
                  >
                    <v-img :src="require(`~/assets/img/pp.webp`)" />
                  </v-avatar>
                </v-badge>
                <div class="d-flex flex-column mx-md-12 ml-4">
                  <h2 class="secondary--text">
                    Good Morning Justin
                  </h2>
                  <p class="mb-0">
                    Here are your stats for {{ date }}
                  </p>
                </div>
              </div>
              <div class="d-flex align-center my-md-0 my-3">
                <v-btn
                  class="font-weight-bold text-none mr-2"
                  outlined
                  rounded
                >
                  <v-icon
                    left
                    color="secondary"
                  >
                    $vuetify.icons.mdiCalendar
                  </v-icon>
                  Today
                  <v-icon right>
                    $vuetify.icons.mdiChevronDown
                  </v-icon>
                </v-btn>
              </div>
            </div>
          </BaseSheet>
        </v-col>
        <v-col cols="12">
          <BaseSheet>
            <v-row>
              <v-col
                v-for="(item, index) in items"
                :key="index"
                cols="12"
                md="6"
                lg="3"
              >
                <BaseSheet color="base lighten-1">
                  <div>
                    {{ item.header }}
                    <v-chip
                      class="ml-3"
                      :color="item.percent > 0 ? 'success' : 'error'"
                      small
                    >
                      <v-icon class="mr-1">
                        {{
                          item.percent > 0
                            ? "$vuetify.icons.mdiArrowUp"
                            : "$vuetify.icons.mdiArrowDown"
                        }}
                      </v-icon>
                      {{ item.percent }}%
                    </v-chip>
                  </div>
                  <div class="font-weight-black text-h5 my-1">
                    {{ item.total }}
                  </div>
                  <div class="body-2 font-weight-light">
                    {{ item.extra }}
                  </div>
                </BaseSheet>
              </v-col>
              <v-col cols="12">
                <ChartsApexLineCustom />
              </v-col>
              <v-col
                cols="12"
                lg="8"
              >
                <v-tabs
                  :background-color="glassmorph ? 'transparent' : 'base'"
                  color="secondary"
                  grow
                  show-arrows
                  center-active
                >
                  <v-tab
                    v-for="item in headers"
                    :key="item"
                  >
                    {{ item }}
                  </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                  <v-tab-item>
                    <LatestOrders />
                  </v-tab-item>
                </v-tabs-items>
              </v-col>
              <v-col
                cols="12"
                lg="4"
              >
                <v-sheet
                  color="transparent"
                  height="100%"
                  class="text-center d-flex flex-column align-center justify-center"
                >
                  <div class="font-weight-black text-h5 my-1 primary--text">
                    Level 5
                  </div>
                  <p>+$32,500 in the last month</p>
                  <ChartsApexRadialBar />
                  <div class="font-weight-black text-h5 my-1">
                    $14,495
                  </div>
                </v-sheet>
              </v-col>
            </v-row>
          </BaseSheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getDate } from "~/data/common";
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      date: null,
      tab: 0,
      items: [
        {
          header: "Total Revenue",
          percent: 12.5,
          total: "$32,621.72",
          extra: "433 orders",
        },
        {
          header: "Orders",
          percent: 32.5,
          total: "484,205",
          extra: "Average Order: 75$",
        },
        {
          header: "Support Tickets",
          percent: -3.4,
          total: "15,531",
          extra: "Average Respond Time: 5 min",
        },
        {
          header: "Conversion Rate",
          percent: 37.5,
          total: "15%",
          extra: "5% Sales Conversion Rate",
        },
      ],
      headers: ["Orders", "Customers", "Products", "Messages"],
    };
  },
  computed: {
    ...mapGetters(["glassmorph"]),
  },
  mounted() {
    this.date = getDate();
  },
  methods: {
    ...mapMutations(["toggleNavbar"]),
  },
};
</script>