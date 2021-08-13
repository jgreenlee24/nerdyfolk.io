<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <BaseSheet>
          <v-row justify="center">
            <v-col
              cols="12"
              lg="10"
            >
              <div class="text-center">
                <h4 class="secondary--text mt-4">
                  Support
                </h4>
                <h1 class="primary--text mb-4">
                  Contact Us
                </h1>
                <p>Any questions or remarks? Just write us a message!</p>
              </div>

              <v-divider />

              <v-row>
                <v-col
                  cols="12"
                  lg="5"
                  class="align-self-center"
                >
                  <v-img
                    :src="require(`~/assets/img/contact2.svg`)"
                    contain
                    max-height="390"
                    class="pa-6 mt-6"
                  />
                </v-col>
                <v-col
                  cols="12"
                  lg="7"
                >
                  <v-row class="my-1 justify-center justify-lg-start">
                    <v-col
                      v-for="(item, index) in items"
                      :key="index"
                      cols="12"
                      lg="4"
                    >
                      <BaseSheet
                        color="transparent"
                        height="100%"
                      >
                        <div
                          class="d-flex flex-column align-center justify-center"
                        >
                          <v-btn
                            fab
                            outlined
                            icon
                            width="50"
                            height="50"
                            color="primary"
                          >
                            <v-icon color="white">
                              {{ item.icon }}
                            </v-icon>
                          </v-btn>
                          <div
                            class="
                              py-2
                              body-2
                              font-weight-bold
                              text-center
                              grey--text
                              text--lighten-4
                            "
                          >
                            {{ item.text }}
                          </div>
                        </div>
                      </BaseSheet>
                    </v-col>
                  </v-row>
                  <v-text-field
                    solo
                    :background-color="glassmorph ? 'glass' : 'base lighten-1'"
                    placeholder="Name"
                    hide-details
                    class="mb-4"
                  />
                  <v-text-field
                    solo
                    :background-color="glassmorph ? 'glass' : 'base lighten-1'"
                    placeholder="Email address"
                    hide-details
                    class="mb-4"
                  />
                  <v-textarea
                    solo
                    :background-color="glassmorph ? 'glass' : 'base lighten-1'"
                    rows="6"
                    label="Message"
                    placeholder="Write your message..."
                    hide-details
                  />

                  <v-btn
                    color="accent"
                    dark
                    block
                    class="my-4"
                  >
                    Submit
                  </v-btn>
                </v-col>
              </v-row>
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
      items: [
        {
          icon: "$vuetify.icons.mdiMapMarker",
          text: "Amsterdam",
        },
        {
          icon: "$vuetify.icons.mdiPhone",
          text: "+31 6 1122233",
        },
        {
          icon: "$vuetify.icons.mdiEmail",
          text: "info@support.nl",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["glassmorph"]),
  },
};
</script>