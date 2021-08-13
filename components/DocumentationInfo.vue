<template>
  <div class="my-3">
    <h4>
      <v-icon
        left
        small
      >
        $vuetify.icons.mdiLinkVariant
      </v-icon>
      <a
        :href="url"
        class="text-capitalize"
      >{{ title }}</a>
    </h4>
    <v-divider class="my-2" />
    <div v-html="content" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
    urlText: {
      type: String,
      default: "the documentation",
    },
  },
};
</script>
