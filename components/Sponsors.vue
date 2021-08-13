<template>
  <div class="grey lighten-4">
    <div class="mx-auto text-center">
      <v-container>
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            v-for="(item, index) in images"
            :key="index"
            class="mx-4"
            cols="auto"
          >
            <v-img
              :src="require(`~/assets/img/${item}`)"
              contain
              class="mx-auto"
              width="150"
              height="150"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "sponsor1.svg",
        "sponsor2.svg",
        "sponsor3.svg",
        "sponsor4.svg",
        "sponsor5.svg",
        "sponsor6.svg",
      ],
      model: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.grid {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>