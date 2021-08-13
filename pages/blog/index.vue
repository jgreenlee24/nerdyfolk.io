<template>
    <blog-feed />
</template>

<script>
  export default {
    name: 'Blog',
    components: {
      BlogFeed: () => import('@/components/Blog/Feed'),
    },
  }
</script>
