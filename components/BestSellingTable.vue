<template>
  <v-simple-table class="custom-table custom-table-hoverable">
    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="index"
      >
        <td>
          <v-img
            :src="item.src"
            cover
            class="rounded"
            width="50"
          />
        </td>
        <td>
          <div class="body-2 font-weight-medium">
            {{ item.name }}
          </div>
        </td>
        <td>
          <v-chip
            small
            color="info"
          >
            {{ item.category }}
          </v-chip>
        </td>
        <td class="font-weight-black">
          ${{ item.price }}.00
        </td>
        <td class="caption">
          <div
            class="d-flex align-center"
            :class="item.stock ? 'success--text' : 'error--text'"
          >
            Stock

            <v-icon
              right
              x-small
              :color="item.stock ? 'success' : 'error'"
            >
              {{
                item.stock
                  ? "$vuetify.icons.mdiCheckCircle"
                  : "$vuetify.icons.mdiCloseCircle"
              }}
            </v-icon>
          </div>
        </td>
        <v-hover v-slot="{ hover }">
          <td>
            <v-icon :color="!hover ? 'grey darken-2' : 'secondary'">
              $vuetify.icons.mdiDotsHorizontal
            </v-icon>
          </td>
        </v-hover>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "NERDYFOLK Ecommerce",
          category: "Themes",
          total: 5159,
          percentage: 55,
          price: 79,
          stock: true,
          src: require(`~/assets/img/ecom.png`),
        },
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
      ],
    };
  },
};
</script>

<style  lang="scss" scoped>
td {
  border-bottom: none !important;
}
</style>