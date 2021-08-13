<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="3"
      >
        <BaseSheet class-names="pa-0">
          <CommonTitle
            subtitle="Total Profit"
            text="$79,943"
            icon-name="$vuetify.icons.mdiDiamondStone"
            :background="true"
            :small-text="true"
            background-color="secondary"
            class="pa-5"
            spacing-title="mb-2"
          />
          <ChartsApexLine
            line-color="#EC5EB7"
            :data="[
              76891, 51244, 79821, 64523, 53421, 71221, 58863, 67129, 59981,
            ]"
          />
        </BaseSheet>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="3"
      >
        <BaseSheet class-names="pa-0">
          <CommonTitle
            subtitle="Total Orders"
            text="3965"
            icon-name="$vuetify.icons.mdiPackageVariant"
            :background="true"
            :small-text="true"
            background-color="primary"
            class="pa-5"
            spacing-title="mb-2"
          />
          <ChartsApexLine
            line-color="#BA7FF6"
            :data="[574, 723, 473, 590, 863, 517, 785, 438, 524, 811]"
          />
        </BaseSheet>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="3"
      >
        <BaseSheet class-names="pa-0">
          <CommonTitle
            subtitle="Live Sessions"
            text="23"
            icon-name="$vuetify.icons.mdiEarth"
            :background="true"
            :small-text="true"
            background-color="info"
            class="pa-5"
            spacing-title="mb-2"
          />
          <ChartsApexLine
            line-color="#00A1FF"
            :data="[5, 6, 5, 7, 5, 6, 7, 5, 7]"
          />
        </BaseSheet>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="3"
      >
        <BaseSheet class-names="pa-0">
          <CommonTitle
            subtitle="Incoming Messages"
            text="23"
            icon-name="$vuetify.icons.mdiForum"
            :background="true"
            :small-text="true"
            background-color="indigo"
            class="pa-5"
            spacing-title="mb-2"
          />
          <ChartsApexLine
            line-color="#5468ff"
            :data="[6, 5, 6, 7, 6, 5, 7, 4, 5]"
          />
        </BaseSheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        lg="8"
      >
        <BaseSheet class-names="px-8 py-4">
          <CommonTitle
            text="Weekly Overview"
            :spin="true"
            :cog="true"
          />

          <div class="my-5">
            <v-chip
              small
              color="tertiary"
              text-color="white"
              class="mr-1"
            >
              <v-icon
                color="#0b91a5"
                left
                small
              >
                $vuetify.icons.mdiCircle
              </v-icon>

              Wearables
            </v-chip>
            <v-chip
              small
              color="tertiary"
              text-color="white"
            >
              <v-icon
                color="#c022ff"
                left
                small
              >
                $vuetify.icons.mdiCircle
              </v-icon>

              Themes
            </v-chip>
          </div>

          <ChartsArea :height="300" />

          <v-divider class="mt-5 mb-0" />

          <v-row
            align="center"
            justify="center"
            class="text-center"
          >
            <v-col
              cols="12"
              md="4"
            >
              <v-card-text>
                <CommonPercentage
                  :percentage="-3.05"
                  title="Total Visitors"
                />
              </v-card-text>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-card-text>
                <CommonPercentage
                  :percentage="5.75"
                  title="Conversion Rate"
                />
              </v-card-text>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-card-text>
                <CommonPercentage
                  :percentage="10.59"
                  title="Store Sessions"
                />
              </v-card-text>
            </v-col>
          </v-row>
        </BaseSheet>
      </v-col>
      <v-col
        cols="12"
        lg="4"
      >
        <BaseSheet
          class-names="d-flex flex-column"
          height="100%"
        >
          <CommonTitle
            text="Weekly Sales"
            :spin="true"
            :cog="true"
            class="px-6 py-4"
          />
          <div class="d-flex flex-column justify-space-between flex-fill">
            <ChartsDoughnut :height="200" />
            <div class="mt-4 mt-md-0">
              <RevenueTable />
            </div>
          </div>
        </BaseSheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        lg="8"
      >
        <BaseSheet style="position: relative">
          <img
            :src="require(`~/assets/img/top-selling.svg`)"
            width="70px"
            style="position: absolute; right: 0; top: 0"
            alt="Trophy"
          >
          <CommonTitle
            text="Best Sellers"
            :icon="false"
            class-names="px-4"
          />
          <BestSellingTable />
        </BaseSheet>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <BaseSheet class-names="pa-4">
          <BestSellingSlider />
        </BaseSheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        lg="8"
      >
        <BaseSheet height="100%">
          <CommonTitle
            text="Latest Orders"
            :icon="false"
            spacing-title="px-4 py-3"
          />
          <LatestOrders />
        </BaseSheet>
      </v-col>
      <v-col
        cols="12"
        lg="4"
      >
        <BaseSheet>
          <CommonTitle
            text="Country Impressions"
            :icon="false"
            spacing-title="mb-3"
          />
          <CountryImpressions />
        </BaseSheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        lg="8"
      >
        <BaseSheet>
          <CommonTitle
            text="Customer Reviews"
            :icon="false"
            spacing-title="px-4 py-3"
          />
          <LatestReviews />
        </BaseSheet>
      </v-col>
      <v-col
        cols="12"
        lg="4"
      >
        <BaseSheet height="100%">
          <CommonTitle
            text="Today's Activity"
            :spin="true"
            :cog="true"
          />
          <ActivityTimeline />
        </BaseSheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["signedIn"]),
  },
  created() {
    if (!this.signedIn) {
      this.$router.push("/login");
    }
  },
};
</script>