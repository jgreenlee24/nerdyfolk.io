<template>
  <v-container
    id="social"
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <instagram />
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <newest-posts />
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <tags />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeSocial',

    components: {
      NewestPosts: () => import('@/components/Blog/NewestPosts'),
      Instagram: () => import('@/components/Blog/Instagram'),
      Tags: () => import('@/components/Blog/Tags'),
    },
  }
</script>
