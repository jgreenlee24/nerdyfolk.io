<template>
  <v-simple-table class="custom-table">
    <template #default>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.name"
        >
          <td class="font-weight-medium">
            {{ item.name }}
          </td>

          <td class="font-weight-light">
            ${{ item.total }}
          </td>

          <td class="font-weight-light">
            <CommonPercentage
              :percentage="item.percentage"
              color="primary"
            />
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "NERDYFOLK Ecommerce",
          total: 5159,
          percentage: 55,
        },
        {
          name: "Vuetify Material Dashboard Pro",
          total: 7237,
          percentage: 34,
        },
        {
          name: "Zero Theme Pro",
          total: 4262,
          percentage: 15,
        },
        {
          name: "Flairo Theme Pro",
          total: 2356,
          percentage: 11,
        },
      ],
    };
  },
};
</script>