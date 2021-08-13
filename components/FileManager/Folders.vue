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
          My Folders

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
          {{ selected.length }} Folder(s) selected
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
          v-for="(item, index) in folders"
          :key="`folders-${index}`"
          cols="12"
          md="6"
          lg="4"
          xl="3"
        >
          <v-hover v-slot="{ hover }">
            <v-item v-slot="{ active, toggle }">
              <v-sheet
                :color="glassmorph ? 'glass' : 'base lighten-1'"
                class="cursor-pointer"
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
                      :src="require(`~/assets/img/folder.svg`)"
                      height="75"
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

                <v-card-text class="py-2 text-truncate">
                  <span class="caption text-no-wrap">
                    <v-icon
                      size="13"
                      left
                    >$vuetify.icons.mdiPencil</v-icon>
                    {{ item.last_edited }}</span>
                  <span
                    class="
                      d-block d-lg-inline-flex
                      font-weight-medium
                      float-lg-right
                    "
                  >{{ item.count }} files</span>
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
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selected: [],
      folders: [
        {
          name: "Reports",
          count: 12,
          last_edited: "Today at 13:45 PM",
        },
        {
          name: "Personal",
          count: 7,
          last_edited: "Today at 12:22 PM",
        },
        {
          name: "Work",
          count: 33,
          last_edited: "Yesterday at 10:15 PM",
        },
        {
          name: "Projects",
          count: 173,
          last_edited: "Yesterday at 13:32",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["glassmorph"]),
  },
};
</script>