<template>
  <div>
    <h4 class="text-center pb-1 font-weight-black">
      {{ displayDate }}
    </h4>

    <v-date-picker
      ref="picker"
      v-model="date"
      :picker-date.sync="pickerDate"
      full-width
      color="secondary--text"
      first-day-of-week="1"
      no-title
      :events="arrayEvents"
      event-color="error"
      show-current
    />

    <v-divider class="my-2" />

    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      link
    >
      <v-list-item-avatar>
        <v-icon
          :color="colors[index]"
          small
        >
          $vuetify.icons.mdiCircleDouble
        </v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="caption font-weight-bold">
          {{ item.title }}
        </v-list-item-title>
        <v-list-item-subtitle class="text-caption">
          {{ item.location }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-chip
          color="error"
          small
        >
          {{ item.time }}
        </v-chip>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
import { colors } from "~/data/common";
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    pickerDate: null,
    arrayEvents: null,
    items: [
      {
        title: "Team Meeting",
        location: "Google Hangouts",
        time: "09:15 PM",
      },
      {
        title: "Meeting with new client",
        location: "Microsoft Teams",
        time: "13:30 PM",
      },
    ],
    colors: [],
  }),
  computed: {
    displayDate() {
      let temp = new Date(this.date);

      return temp.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    },
  },
  mounted() {
    this.colors = colors;

    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });

    const current = document.querySelector(".v-date-picker-table__current");
    const other = document.querySelector(
      ".v-date-picker-table.v-date-picker-table--date"
    );
    const header = document.querySelector(".v-date-picker-header");
    const wrapper = document.querySelector(".v-date-picker-table");

    let currentRow = current.parentElement.parentElement;
    let otherRows = other.firstChild.childNodes[1].childNodes;

    header.remove();
    wrapper.style = "height: auto !important";
    currentRow.classList.add("d-table-row");

    otherRows.forEach((row) => {
      if (!row.classList.contains("d-table-row")) {
        row.classList.add("d-none");
      }
    });
  },
};
</script>