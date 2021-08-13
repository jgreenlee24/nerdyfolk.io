<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <BaseSheet>
          <v-row justify="center">
            <v-col
              cols="12"
              xl="9"
            >
              <div class="text-center">
                <h4 class="secondary--text mt-4">
                  Support
                </h4>
                <h1 class="primary--text mb-6">
                  Frequently Asked Questions
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat enim debitis, inventore expedita ipsum doloribus error
                  et fugiat pariatur molestias animi molestiae alias unde esse
                  ullam quis eligendi in natus officiis minus illum commodi.
                  Dolores vel aspernatur quis labore aliquid!
                </p>
              </div>
              <v-row class="mt-6">
                <v-col
                  v-for="(item, index) in categories"
                  :key="index"
                  cols="12"
                  md="6"
                  lg="3"
                >
                  <BaseSheet :class="glassmorph ? 'glass' : 'base lighten-1'">
                    <div class="d-flex flex-column align-center justify-center">
                      <v-btn
                        fab
                        outlined
                        icon
                        width="80"
                        height="80"
                        color="indigo"
                      >
                        <v-icon
                          x-large
                          color="white"
                        >
                          {{ item.icon }}
                        </v-icon>
                      </v-btn>
                      <h4 class="py-2">
                        {{ item.text }}
                      </h4>
                    </div>
                  </BaseSheet>
                </v-col>
              </v-row>
              <v-expansion-panels
                v-model="panel"
                multiple
                class="elevation-2 my-6"
                :class="{ 'glassmorph--enabled': glassmorph }"
              >
                <v-expansion-panel
                  v-for="(item, index) in panels"
                  :key="index"
                >
                  <v-expansion-panel-header class="font-weight-bold">
                    {{ item.header }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                    at architecto mollitia eos provident iure cupiditate aliquid
                    aliquam itaque fugit.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
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
      panel: [0, 1],
      categories: [
        {
          icon: "$vuetify.icons.mdiAccount",
          text: "My Account",
        },
        {
          icon: "$vuetify.icons.mdiMagnify",
          text: "General",
        },
        {
          icon: "$vuetify.icons.mdiTruckDelivery",
          text: "Shipping",
        },
        {
          icon: "$vuetify.icons.mdiCreditCardOutline",
          text: "Payments",
        },
      ],
      panels: [
        {
          header: "What is the return policy?",
        },
        {
          header: "What are the shipping options?",
        },
        {
          header: "What do I do if Inever received my order?",
        },
        {
          header: "When will I receive my order?",
        },
        {
          header: "Can I make changes to an order I already placed?",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["glassmorph"]),
  },
};
</script>

<style lang="scss" scoped>
.v-expansion-panels .v-expansion-panel {
  background-color: var(--v-base-lighten1) !important;
}

.v-expansion-panels.glassmorph--enabled .v-expansion-panel {
  background-color: #ffffff0a !important;
  color: #ffffff;
}
</style>