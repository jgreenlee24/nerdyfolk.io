<template>
  <div>
    <v-sheet
      color="#228de2"
      class="align-center d-flex"
      height="150"
    >
      <v-container>
        <v-row
          justify="center"
          align="center"
        >
          <v-col cols="12">
            <div
              class="
                align-center
                d-flex
                flex-column flex-sm-row
                mx-12 mx-md-0
                justify-center
              "
            >
              <h3
                class="
                  text-uppercase text-h6
                  font-weight-bold
                  white--text
                  mr-5
                  text-center text-sm-left
                "
              >
                Subscribe to our newsletter
              </h3>

              <v-text-field
                label="Your email address..."
                prepend-inner-icon="$vuetify.icons.mdiEmail"
                append-icon="$vuetify.icons.mdiSend"
                dark
                outlined
                hide-details
                style="max-width: 400px"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-footer
      color="#132244"
      class="px-0 pt-0"
    >
      <v-card
        flat
        class="mx-auto pt-2"
        color="transparent"
      >
        <v-img
          src="/v2.png"
          style="filter: brightness(0) invert(1)"
          width="60"
          height="60"
          class="mx-auto"
        />
        <p class="grey--text text--lighten-2 mt-5">
          Copyright © NERDYFOLK {{ new Date().getFullYear() }}. All rights
          reserved.
        </p>
      </v-card>
    </v-footer>
  </div>
</template>