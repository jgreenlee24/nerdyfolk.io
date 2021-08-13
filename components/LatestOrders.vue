<template>
  <v-simple-table
    id="latest-orders"
    class="custom-table custom-table-hoverable"
  >
    <thead>
      <tr>
        <th
          v-for="(item, index) in headers"
          :key="index"
          class="text-left"
        >
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="index"
      >
        <td class="text-caption font-weight-bold grey--text text--lighten-1">
          #{{ item.order }}
        </td>
        <td class="pl-0">
          <div class="body-2 font-weight-medium">
            <v-list-item>
              <v-list-item-avatar :color="randomColor()">
                <span class="white--text mx-auto text-uppercase">{{
                  item.customer.slice(0, 2)
                }}</span>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-body-2 font-weight-medium">
                  {{ item.customer }}
                </v-list-item-title>
                <v-list-item-subtitle class="caption text-lowercase">
                  {{ item.email }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>
        </td>
        <td class="caption">
          {{ item.date }}
        </td>
        <td class="font-weight-black">
          ${{ item.total }}.00
        </td>
        <td>
          <v-chip
            small
            :color="getStatus(item.status).color"
          >
            <v-icon
              x-small
              left
              :color="getStatus(item.status).color"
            >
              {{ getStatus(item.status).icon }}
            </v-icon>
            {{ item.status }}
          </v-chip>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "warning",
        "success",
        "error",
        "accent",
        "info",
      ],
      headers: ["Order ID", "Customer", "Order Date", "Total", "Status"],
      items: [
        {
          order: "7896",
          customer: "Bennie Prosacco",
          email: "Bennie.Prosacco@yahoo.com",
          date: "May 21, 2021",
          status: "success",
          total: 349,
        },
        {
          order: "7895",
          customer: "Adrian Hills",
          email: "Tobin66@hotmail.com",
          date: "May 21, 2021",
          status: "pending",
          total: 119,
        },
        {
          order: "7894",
          customer: "Earnest Keebler",
          email: "Earnest_Keebler@hotmail.com",
          date: "May 21, 2021",
          status: "canceled",
          total: 75,
        },
        {
          order: "7893",
          customer: "Raoul Boyer",
          email: "Raoul_Boyer@gmail.com",
          date: "May 20, 2021",
          status: "success",
          total: 33,
        },
        {
          order: "7892",
          customer: "Sandy Corwin",
          email: "Sandy_Corwin@yahoo.com",
          date: "May 20, 2021",
          status: "success",
          total: 49,
        },
        {
          order: "7891",
          customer: "John Adams",
          email: "John_Adams@yahoo.com",
          date: "May 19, 2021",
          status: "success",
          total: 75,
        },
      ],
    };
  },
  methods: {
    getStatus(status) {
      switch (status) {
        case "success":
          return { color: "success", icon: "$vuetify.icons.mdiCheckCircle" };
        case "pending":
          return { color: "info", icon: "$vuetify.icons.mdiTimer" };
        case "canceled":
          return { color: "error", icon: "$vuetify.icons.mdiCloseCircle" };
      }
    },
    randomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
  },
};
</script>

<style scoped>
td {
  border-bottom: none !important;
}
</style>