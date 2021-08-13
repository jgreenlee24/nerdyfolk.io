<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="3"
      >
        <BaseSheet
          class="mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <template v-for="(item, index) in events.slice(0, 5)">
            <h4 :key="`date-${index}`">
              <v-icon
                left
                small
              >
                $vuetify.icons.mdiCalendar
              </v-icon>
              {{ convertDate(item.start) }}
            </h4>
            <v-list-item
              :key="index"
              class="mt-2 mb-6 rounded-lg py-1"
              :class="glassmorph ? 'glass' : 'base lighten-1'"
            >
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-medium body-2 d-flex align-center gap-sm"
                >
                  <v-icon
                    :color="item.color"
                    x-small
                  >
                    $vuetify.icons.mdiCircle
                  </v-icon>
                  {{ item.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="caption pt-2">
                  11:00 AM - 12:15 PM
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action class="mb-4 align-self-end">
                <v-btn
                  icon
                  small
                >
                  <v-icon
                    small
                    color="base lighten-4"
                  >
                    $vuetify.icons.mdiTrashCan
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </BaseSheet>
      </v-col>
      <v-col
        cols="12"
        lg="9"
      >
        <BaseSheet
          data-aos="fade-up"
          data-aos-duration="1000"
          class-names="pa-0"
          height="64"
        >
          <v-toolbar
            :color="glassmorph ? 'glass' : 'base'"
            rounded
            flat
          >
            <v-btn
              fab
              text
              outlined
              color="base lighten-5"
              class="mr-4"
              width="22"
              height="22"
              @click="prev"
            >
              <v-icon small>
                $vuetify.icons.mdiChevronLeft
              </v-icon>
            </v-btn>
            <v-toolbar-title
              v-if="$refs.calendar"
              class="text-uppercase font-weight-medium primary--text"
            >
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-btn
              fab
              text
              outlined
              color="base lighten-5"
              class="ml-4"
              width="22"
              height="22"
              @click="next"
            >
              <v-icon small>
                $vuetify.icons.mdiChevronRight
              </v-icon>
            </v-btn>
            <v-spacer />
            <v-btn
              text
              color="grey lighten-2"
              outlined
              class="mr-4"
              @click="setToday"
            >
              Today
            </v-btn>

            <v-menu
              bottom
              right
            >
              <template #activator="{ on, attrs }">
                <v-btn
                  color="grey lighten-2"
                  outlined
                  text
                  v-bind="attrs"
                  v-on="on"
                >
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>
                    $vuetify.icons.mdiMenuDown
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title> 4 days </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-btn
              text
              color="primary"
              outlined
              class="ml-4"
            >
              <v-icon left>
                $vuetify.icons.mdiPlus
              </v-icon>
              Add Event
            </v-btn>
          </v-toolbar>
        </BaseSheet>
        <BaseSheet
          data-aos="fade-up"
          data-aos-duration="1000"
          height="600"
          class-names="my-3"
        >
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="events"
            :event-color="getEventColor"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
          />
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              color="base"
              min-width="350px"
            >
              <v-toolbar :color="selectedEvent.color">
                <v-btn icon>
                  <v-icon>$vuetify.icons.mdiPencil</v-icon>
                </v-btn>
                <v-toolbar-title>
                  {{ selectedEvent.name }}
                </v-toolbar-title>
                <v-spacer />
                <v-btn icon>
                  <v-icon>$vuetify.icons.mdiHeart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon> $vuetify.icons.mdiDotsVertical </v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <span>{{ selectedEvent.details }}</span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="secondary"
                  @click="selectedOpen = false"
                >
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </BaseSheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      "error darken-2",
      "indigo",
      "primary",
      "base lighten-4",
      "secondary darken-2",
      "base lighten-1",
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
  }),
  computed: {
    ...mapGetters(["glassmorph"]),
  },
  methods: {
    convertDate(date) {
      let options = { year: "numeric", month: "long", day: "numeric" };

      return date.toLocaleDateString("en-US", options);
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 5);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);
        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>