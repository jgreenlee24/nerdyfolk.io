<template>
  <div>
    <v-row>
      <v-col
        v-for="(item, index) in drives"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
        <v-item>
          <v-sheet
            :color="glassmorph ? 'glass' : 'base lighten-1'"
            class="px-5 py-5"
          >
            <v-icon size="30">
              {{ item.icon }}
            </v-icon>
            <h4 class="mb-3 mt-1">
              {{ item.type }}
            </h4>
            <v-progress-linear
              :value="progressValue(item.max, item.used)"
              rounded
              striped
              height="10"
              class="my-1"
              :color="colors[index]"
            />
            <span>
              <span class="font-weight-bold">{{ item.used }}GB</span>
              used
            </span>
            <span class="float-right caption">{{ item.max }}GB</span>
          </v-sheet>
        </v-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { colors } from "~/data/common";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      colors: [],
      drives: [
        {
          type: "Google Drive",
          icon: "$vuetify.icons.mdiGoogleDrive",
          max: 150,
          used: 65,
        },
        {
          type: "OneDrive",
          icon: "$vuetify.icons.mdiMicrosoftOnedrive",
          max: 25,
          used: 12,
        },
        {
          type: "Dropbox",
          icon: "$vuetify.icons.mdiDropbox",
          max: 15,
          used: 3,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["glassmorph"]),
  },
  mounted() {
    this.colors = colors;
  },
  methods: {
    progressValue(max, used) {
      return Math.round((100 * used) / max);
    },
  },
};
</script>

<style lang="scss">
.checkbox-folder {
  top: 0;
  left: 0;
  margin: 0 !important;
}

.options-folder {
  top: 0;
  right: 0;
  margin: 0 !important;
}
</style>