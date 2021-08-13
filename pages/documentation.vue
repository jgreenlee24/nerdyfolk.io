<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <BaseSheet>
            <v-tabs
              v-model="activeTab"
              grow
              :background-color="glassmorph ? 'transparent' : 'base'"
            >
              <v-tab
                v-for="(item, index) in tabs"
                :key="index"
                :to="item.route"
              >
                <v-icon
                  left
                  small
                >
                  $vuetify.icons.mdiFolderMultipleOutline
                </v-icon>
                Architechture
              </v-tab>
            </v-tabs>
            <nuxt-child />
          </BaseSheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      activeTab: null,
      tabs: [{ name: "Architechture", route: `/documentation/architechture` }],
    };
  },
  computed: {
    ...mapGetters(["glassmorph"]),
  },
};
</script>

<style lang="scss" scoped>
</style>