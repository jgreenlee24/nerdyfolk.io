<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <core-view />

    <core-footer />

    <core-cta />
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {
      CoreCta: () => import('@/components/Blog/core/Cta'),
      CoreDrawer: () => import('@/components/Blog/core/Drawer'),
      CoreFooter: () => import('@/components/Blog/core/Footer'),
      CoreAppBar: () => import('@/components/Blog/core/AppBar'),
      CoreView: () => import('@/components/Blog/core/View'),
    },
  }
</script>
