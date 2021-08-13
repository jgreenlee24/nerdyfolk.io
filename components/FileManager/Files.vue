<template>
  <div class="my-1">
    <v-item-group
      v-model="selected"
      multiple
    >
      <v-toolbar
        :color="
          selected.length && !glassmorph
            ? 'base lighten-1'
            : selected.length && glassmorph
              ? 'glass'
              : 'transparent'
        "
        :class="selected.length ? 'my-3' : 'mb-2'"
        flat
        rounded
        height="60"
      >
        <v-btn
          v-if="selected.length"
          icon
          @click="selected = []"
        >
          <v-icon>$vuetify.icons.mdiClose</v-icon>
        </v-btn>
        <div
          v-if="!selected.length"
          class="body-1 font-weight-bold"
        >
          Recent Files

          <v-btn
            icon
            small
            right
          >
            <v-icon color="base lighten-4">
              $vuetify.icons.mdiChevronDouble-right
            </v-icon>
          </v-btn>
        </div>
        <v-toolbar-title
          v-else
          class="font-weight-bold body-1 primary--text"
        >
          {{ selected.length }} File(s) selected
        </v-toolbar-title>

        <v-spacer />

        <v-scale-transition>
          <v-btn
            v-if="selected.length"
            key="download"
            icon
          >
            <v-icon>$vuetify.icons.mdiDownloadCircle</v-icon>
          </v-btn>
        </v-scale-transition>
        <v-scale-transition>
          <v-btn
            v-if="selected.length"
            key="delete"
            icon
          >
            <v-icon>$vuetify.icons.mdiDelete</v-icon>
          </v-btn>
        </v-scale-transition>
        <v-scale-transition>
          <v-btn
            v-if="selected.length"
            key="options"
            icon
          >
            <v-icon>$vuetify.icons.mdiDotsVertical</v-icon>
          </v-btn>
        </v-scale-transition>
      </v-toolbar>

      <v-row>
        <v-col
          v-for="(item, index) in files"
          :key="`files-${index}`"
          cols="12"
          md="6"
          lg="4"
          xl="3"
        >
          <v-hover v-slot="{ hover }">
            <v-item v-slot="{ active, toggle }">
              <v-sheet
                class="cursor-pointer"
                :color="glassmorph ? 'glass' : 'base lighten-1'"
                @click="toggle"
              >
                <div class="px-4 pt-3 pb-4 body-2 font-weight-medium">
                  {{ item.name }}
                </div>
                <v-card-title
                  class="rounded-t-lg d-flex pt-0"
                  :class="glassmorph ? 'transparent' : 'base lighten-1'"
                >
                  <v-sheet
                    height="75"
                    class="d-flex align-center justify-center flex relative"
                    color="transparent"
                  >
                    <v-scroll-y-transition>
                      <v-checkbox
                        v-show="hover"
                        :value="active"
                        class="align-self-baseline absolute checkbox-folder"
                        color="primary"
                        on-icon="$vuetify.icons.mdiCheckboxMarked"
                      />
                    </v-scroll-y-transition>

                    <v-img
                      :src="item.src"
                      height="60"
                      contain
                    />

                    <v-scroll-y-transition>
                      <v-icon
                        v-if="hover"
                        class="align-self-baseline absolute options-folder"
                      >
                        $vuetify.icons.mdiDotsVertical
                      </v-icon>
                    </v-scroll-y-transition>
                  </v-sheet>
                </v-card-title>
                <v-divider />

                <v-card-text class="py-2">
                  <span class="caption">
                    <v-icon
                      size="13"
                      left
                    >$vuetify.icons.mdiPencil</v-icon>
                    {{ item.last_edited }}
                  </span>
                </v-card-text>
              </v-sheet>
            </v-item>
          </v-hover>
        </v-col>
      </v-row>
    </v-item-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selected: [],
      files: [
        {
          name: "First Quarter Sales",
          src: require(`~/assets/img/excel.png`),
          last_edited: "Today at 09:55 PM",
        },
        {
          name: "Meeting Notes",
          src: require(`~/assets/img/word.png`),
          last_edited: "Today at 08:32 PM",
        },
        {
          name: "Meeting Notes",
          src: require(`~/assets/img/word.png`),
          last_edited: "Yesterday at 08:47 PM",
        },
        {
          name: "Presentation",
          src: require(`~/assets/img/powerpoint.png`),
          last_edited: "Two days ago",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["glassmorph"]),
  },
};
</script>