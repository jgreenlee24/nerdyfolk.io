<template>
  <div id="home">
    <articles>
      <banner />
    </articles>

    <about />

    <subscribe />

    <social />
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      About: () => import('@/components/Blog/home/About'),
      Articles: () => import('@/components/Blog/home/Articles'),
      Banner: () => import('@/components/Blog/home/Banner'),
      Social: () => import('@/components/Blog/home/Social'),
      Subscribe: () => import('@/components/Blog/home/Subscribe'),
    },
  }
</script>
