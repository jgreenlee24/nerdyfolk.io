<template>
  <div>
    <v-carousel
      :cycle="cycle"
      show-arrows-on-hover
      hide-delimiter-background
      height="244"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-img
          :src="item.src"
          width="100%"
          cover
          height="100%"
          class="rounded"
        />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cycle: true,
      items: [
        {
          name: "Vuetify Material Dashboard Pro",
          category: "Themes",
          total: 7237,
          percentage: 34,
          price: 99,
          stock: false,
          src: require(`~/assets/img/vmd.png`),
        },
        {
          name: "Zero Theme Pro",
          category: "Themes",
          total: 4262,
          percentage: 15,
          price: 33,
          stock: true,
          src: require(`~/assets/img/zero.png`),
        },
        {
          name: "Flairo Theme Pro",
          category: "Themes",
          total: 2356,
          percentage: 11,
          price: 15,
          stock: true,
          src: require(`~/assets/img/flairo.png`),
        },
        {
          name: "NERDYFOLK Ecommerce",
          category: "Themes",
          total: 5159,
          percentage: 55,
          price: 79,
          stock: true,
          src: require(`~/assets/img/ecom.png`),
        },
      ],
    };
  },
};
</script>