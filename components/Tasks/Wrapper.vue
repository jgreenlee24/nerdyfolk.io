<template>
  <div>
    <BaseSheet
      class="mb-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="d-flex align-center justify-space-between flex">
        <h4>
          <v-btn icon>
            <v-icon> $vuetify.icons.mdiChevronDown </v-icon>
          </v-btn>
          <span class="mx-2">
            <v-icon
              left
              small
            > $vuetify.icons.mdiLock </v-icon>
            Personal Tasks
          </span>
        </h4>
        <v-divider class="base lighten-2 ml-2" />
        <v-btn
          outlined
          fab
          x-small
          color="primary"
        >
          3
          <v-icon small>
            $vuetify.icons.mdiFormatListChecks
          </v-icon>
        </v-btn>
      </div>
    </BaseSheet>
    <BaseSheet
      class="mb-4"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div class="d-flex align-center justify-space-between flex">
        <h4>
          <v-btn icon>
            <v-icon> $vuetify.icons.mdiChevronDown </v-icon>
          </v-btn>
          <span
            class="mx-2"
          ><v-icon
            left
            small
            color="success"
          >$vuetify.icons.mdiCheckAll</v-icon>Completed Tasks</span>
        </h4>
        <v-divider class="base lighten-2 ml-2" />
        <v-btn
          outlined
          fab
          x-small
          color="primary"
        >
          7
          <v-icon small>
            $vuetify.icons.mdiFormatListChecks
          </v-icon>
        </v-btn>
      </div>
    </BaseSheet>
    <BaseSheet
      class="mb-4"
      data-aos="fade-up"
      data-aos-duration="1400"
    >
      <div
        class="d-flex align-center justify-space-between flex"
        :class="panel ? 'mb-6' : ''"
      >
        <h4>
          <v-btn
            icon
            @click="panel = !panel"
          >
            <v-icon>
              {{
                panel
                  ? "$vuetify.icons.mdiChevronUp"
                  : "$vuetify.icons.mdiChevronDown"
              }}
            </v-icon>
          </v-btn>
          <span class="mx-2">
            <v-icon
              left
              small
              color="warning"
            >$vuetify.icons.mdiCircleEditOutline</v-icon>
            Tasks</span>
        </h4>
        <v-divider class="base lighten-2 ml-2" />
        <v-btn
          outlined
          fab
          x-small
          color="primary"
        >
          2
          <v-icon small>
            $vuetify.icons.mdiFormatListChecks
          </v-icon>
        </v-btn>
      </div>
      <v-sheet
        v-if="panel"
        :color="glassmorph ? 'glass' : 'base lighten-1'"
        class="d-flex align-start justify-start py-2 px-4 mb-4"
      >
        <TasksItem
          comment-count="5"
          member-count="+7"
          :members="members"
          :tag="true"
          :large-text="true"
          :reminder="true"
        />
      </v-sheet>
      <v-sheet
        v-if="panel"
        :color="glassmorph ? 'glass' : 'base lighten-1'"
        class="d-flex align-start justify-start py-2 px-4 mb-4"
      >
        <TasksItem
          comment-count="2"
          member-count="+3"
          :members="members"
          :tag="false"
          :large-text="false"
          :reminder="false"
          :important="true"
        />
      </v-sheet>
    </BaseSheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      panel: true,
      members: [
        {
          title: "Ali Connors",
          src: require(`~/assets/img/avataaars-5.png`),
        },
        {
          title: "Eric Peeters",
          src: require(`~/assets/img/avataaars-1.png`),
        },
        {
          title: "John Smith",
          src: require(`~/assets/img/avataaars-2.png`),
        },
        {
          title: "Trevor Hansen",
          src: require(`~/assets/img/avataaars-3.png`),
        },
        {
          title: "Britta Holt",
          src: require(`~/assets/img/avataaars-4.png`),
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["glassmorph"]),
  },
};
</script>