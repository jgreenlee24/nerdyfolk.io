<template>
  <div class="full-height">
    <v-container class="fill-height">
      <v-row
        style="z-index: 1"
        justify="center"
      >
        <v-col
          cols="12"
          xl="10"
        >
          <v-row justify="center">
            <v-col
              cols="12"
              lg="5"
              class="mt-n6"
            >
              <BaseSheet
                class-names="px-10 py-6 elevation-4 relative"
                class="base"
              >
                <v-progress-linear
                  :active="loading"
                  :indeterminate="loading"
                  absolute
                  top
                  color="secondary"
                />
                <div>
                  <div class="d-inline-flex align-end mb-8">
                    <v-img
                      src="v2.png"
                      width="80"
                      height="80"
                      class="inverted"
                    />
                    <h2 class="pa-2 pl-4">
                      NERDYFOLK
                    </h2>
                  </div>
                  <div class="font-weight-medium text-h6 text-md-h4">
                    Welcome back to Dashboard
                  </div>
                  <p class="my-1">
                    New here?
                    <a
                      href="#"
                      class="
                        primary--text
                        font-weight-medium
                        text-decoration-underline
                      "
                    >Create an account</a>
                  </p>
                </div>
                <div class="mt-8 mb-12">
                  <v-text-field
                    solo
                    background-color="base lighten-1"
                    placeholder="Email"
                    label="Email"
                    hide-details
                    value="admin@nerdyfolk.nl"
                    class="mb-4"
                  />
                  <v-text-field
                    solo
                    background-color="base lighten-1"
                    placeholder="Password"
                    hide-details
                    class="mb-4"
                    type="password"
                    value="dontlookhere!"
                  />

                  <v-checkbox
                    class="font-weight-medium"
                    label="Remember this device"
                  />

                  <v-btn
                    color="secondary"
                    block
                    height="45"
                    @click="signIn"
                  >
                    Sign in
                  </v-btn>

                  <div class="d-flex align-center mt-8 mb-6">
                    <v-divider class="mr-4" />
                    <span
                      class="grey--text text--lighten-1"
                    >or sign in with</span>
                    <v-divider class="ml-4" />
                  </div>

                  <v-btn
                    color="glass"
                    block
                  >
                    <div class="d-inline-flex">
                      <v-img
                        :src="require(`~/assets/img/google.svg`)"
                        width="18"
                        height="18"
                        class="mr-2"
                      />
                      Google
                    </div>
                  </v-btn>
                  <v-row
                    class="d-flex mt-1"
                    dense
                  >
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-btn
                        block
                        color="glass"
                      >
                        <div class="d-inline-flex">
                          <v-img
                            :src="require(`~/assets/img/instagram.svg`)"
                            width="18"
                            height="18"
                            class="mr-2"
                          />
                          Instagram
                        </div>
                      </v-btn>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-btn
                        color="glass"
                        block
                      >
                        <div class="d-inline-flex">
                          <v-img
                            :src="require(`~/assets/img/twitter.svg`)"
                            width="18"
                            height="18"
                            class="mr-2"
                          />
                          Twitter
                        </div>
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </BaseSheet>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-img
      :src="require(`~/assets/img/plants.svg`)"
      class="image-left"
      width="540"
      style="z-index: 0"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  layout: "auth",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    ...mapMutations(["toggleSignedIn"]),
    signIn() {
      this.loading = true;
      this.toggleSignedIn();

      setTimeout(() => {
        this.loading = false;
        this.$router.push("/");
      }, 1200);
    },
  },
};
</script>

<style lang="scss" scoped>
.image-left {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>