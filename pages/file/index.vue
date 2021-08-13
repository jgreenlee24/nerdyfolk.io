<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="5"
        lg="3"
        class="order-last order-md-first"
      >
        <BaseSheet height="100%">
          <v-navigation-drawer
            :color="glassmorph ? 'transparent' : 'base'"
            permanent
            floating
            width="100%"
            class="py-2"
          >
            <template #prepend>
              <div class="mx-3 mb-3">
                <v-btn
                  block
                  :color="glassmorph ? 'glass' : 'base lighten-1'"
                  rounded
                >
                  <v-icon
                    left
                    small
                  >
                    $vuetify.icons.mdiPlus
                  </v-icon>
                  New File
                </v-btn>
              </div>
            </template>

            <v-subheader>My Drive</v-subheader>

            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action v-if="item.incoming">
                  <v-badge
                    :value="item.incoming"
                    :content="item.incoming"
                    inline
                    color="secondary"
                  />
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider class="my-1" />

            <v-subheader>
              Storage
              <v-icon
                class="ml-auto"
                small
              >
                $vuetify.icons.mdiPlus
              </v-icon>
            </v-subheader>

            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="(item, index) in files"
                :key="index"
                link
              >
                <v-list-item-icon>
                  <v-icon
                    small
                    :color="colors[index]"
                  >
                    {{ item.icon }}
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ item.count }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <div class="body-2 font-weight-medium">
                    {{ item.capacity }}
                  </div>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <div class="flex">
                  <h5 class="mb-3 mt-1">
                    Current Plan
                  </h5>
                  <v-progress-linear
                    :value="20"
                    rounded
                    striped
                    height="10"
                    class="my-1"
                    :color="colors[0]"
                  />
                  <span>
                    <span class="font-weight-bold">115GB</span>
                    used
                  </span>
                  <span class="float-right caption">500GB</span>
                </div>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </BaseSheet>
      </v-col>
      <v-col
        cols="12"
        md="7"
        lg="9"
      >
        <BaseSheet
          class-names="pa-6"
          height="100%"
        >
          <v-text-field
            placeholder="Search"
            append-icon="$vuetify.icons.mdiMagnify"
            class="rounded-lg"
            solo
            :background-color="glassmorph ? 'glass' : 'base lighten-1'"
            clearable
            hide-details
          />

          <v-divider class="my-6" />

          <FileManagerDrives />
          <FileManagerFolders class="mt-4" />
          <FileManagerFiles class="mt-6" />
        </BaseSheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { colors } from "~/data/common";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      colors: [],
      drawerRight: false,
      items: [
        {
          title: "All Files",
          icon: "$vuetify.icons.mdiInboxArrowDown",
        },
        { title: "Important", icon: "$vuetify.icons.mdiStar" },
        { title: "Recent", icon: "$vuetify.icons.mdiHistory" },
        { title: "Deleted", icon: "$vuetify.icons.mdiDelete" },
        { title: "Documents", icon: "$vuetify.icons.mdiFileDocument" },
        { title: "Images", icon: "$vuetify.icons.mdiFileImage" },
        { title: "Videos", icon: "$vuetify.icons.mdiFileVideo" },
      ],
      files: [
        {
          name: "Images",
          count: "712 files",
          capacity: "3 GB",
          icon: "$vuetify.icons.mdiFileImage",
        },
        {
          name: "Videos",
          count: "13 files",
          capacity: "14 GB",
          icon: "$vuetify.icons.mdiFileVideo",
        },
        {
          name: "Documents",
          count: "91 files",
          capacity: "98 MB",
          icon: "$vuetify.icons.mdiFileWord",
        },
        {
          name: "Other Files",
          count: "453 files",
          capacity: "715 MB",
          icon: "$vuetify.icons.mdiFile",
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
};
</script>