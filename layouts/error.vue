<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <BaseSheet class="text-center">
            <v-img
              width="400"
              height="250"
              contain
              :src="require(`~/assets/img/404.svg`)"
              class="mx-auto my-6"
            />
            <h3>Page not found 😱</h3>
            <v-btn
              text
              outlined
              color="secondary"
              to="/"
              class="my-3"
              rounded
            >
              Return to Dashboard
            </v-btn>
          </BaseSheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;

    return {
      title,
    };
  },
};
</script>