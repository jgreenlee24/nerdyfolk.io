<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      right
      app
      temporary
      hide-overlay
      width="350"
      color="tertiary darken-1"
    >
      <v-list>
        <h4 class="pa-4 secondary--text">
          <v-icon
            left
            color="secondary"
          >
            $vuetify.icons.mdiCircleEditOutline
          </v-icon>
          Theme Customization
        </h4>

        <v-divider />

        <div
          class="body-2 primary--text text--lighten-1 px-4 pt-2 font-weight-bold"
        >
          Recommended Presets 🎉
        </div>
        <v-list
          color="transparent"
          class="py-0"
        >
          <v-list-item>
            <v-radio-group
              v-model="layoutPreset"
              column
              mandatory
            >
              <v-radio
                label="Preset 1 (default)"
                color="primary"
                value="1"
              />
              <v-radio
                label="Preset 2"
                color="secondary"
                value="2"
              />
              <v-radio
                label="Preset 3"
                color="success"
                value="3"
              />
            </v-radio-group>
          </v-list-item>
        </v-list>

        <v-divider />

        <div
          class="body-2 primary--text text--lighten-1 px-4 pt-2 font-weight-bold"
        >
          General
        </div>
        <v-list color="transparent">
          <v-list-item @click="toggleOutline">
            <v-list-item-content>
              <v-list-item-title> Borders </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-switch
                v-model="outline"
                color="secondary"
              />
            </v-list-item-action>
          </v-list-item>
          <v-list-item
            :disabled="glassmorph"
            @click="toggleShadow"
          >
            <v-list-item-content>
              <v-list-item-title> Shadows </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-switch
                v-model="shadow"
                color="secondary"
              />
            </v-list-item-action>
          </v-list-item>
          <v-list-item @click="toggleGlassmorph">
            <v-list-item-content>
              <v-list-item-title> Glassmorphism </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-switch
                v-model="glassmorph"
                color="secondary"
              />
            </v-list-item-action>
          </v-list-item>
          <v-list-item
            :disabled="!glassmorph"
            @click="toggleBackground"
          >
            <v-list-item-content>
              <v-list-item-title> Transparent Background </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-switch
                v-model="background"
                color="secondary"
              />
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider />
        <div
          class="body-2 primary--text text--lighten-1 px-4 pt-2 mb-2 font-weight-bold"
        >
          Navigation Drawer
        </div>
        <v-list-item @click="toggleNavOutline">
          <v-list-item-content>
            <v-list-item-title> Borders and Dividers </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-switch
              v-model="navOutline"
              color="secondary"
            />
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="body-2">
              Color
              <v-btn
                icon
                small
                @click="changeNavigationColor('transparent')"
              >
                <v-icon small>
                  $vuetify.icons.mdiBackupRestore
                </v-icon>
              </v-btn>
            </v-list-item-title>
            <div class="color-swatches gap-md">
              <v-btn
                v-for="(item, index) in buttons"
                :key="index"
                fab
                class="ma-1 my-2"
                :class="item"
                x-small
                @click="changeNavigationColor(item)"
              />
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      buttons: [
        "gradient-cs-7",
        "gradient-cs-8",
        "gradient-cs-8-1",
        "gradient-cs-8-2",
        "gradient-purple-blue",
        "gradient-yellow-orange",
        "gradient-cs-1",
        "gradient-cs-2",
        "gradient-cs-3",
        "gradient-cs-4",
        "gradient-cs-5",
        "gradient-cs-6",
      ],
      items: [
        { title: "Click Me1" },
        { title: "Click Me2" },
        { title: "Click Me3" },
        { title: "Click Me4" },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "navColor",
      "navOutline",
      "navbar",
      "settingsDrawer",
      "glassmorph",
      "background",
      "outline",
      "shadow",
      "preset"
    ]),
    drawer: {
      get() {
        return this.settingsDrawer;
      },
      set(val) {
        return this.toggleSettingsDrawer(val);
      },
    },
    layoutPreset: {
      get() {
        return this.preset;
      },
      set(val) {
        return this.setPreset(val);
      },
    },
  },
  watch: {
    preset(val) {
      switch (Number(val)) {
          case 1:
          this.togglePreset({
            outline: true,
            shadow: false,
            glassmorph: true,
            background: false,
            navOutline: true,
            navColor: "transparent"
          });
          break;
        case 2:
          this.togglePreset({
            outline: true,
            shadow: false,
            glassmorph: true,
            background: true,
            navOutline: false,
            navColor: "transparent"
          });
          break;
        case 3:
          this.togglePreset({
            outline: false,
            shadow: true,
            glassmorph: false,
            background: false,
            navOutline: true,
            navColor: "transparent"
          });
      }
    },
  },
  methods: {
    ...mapMutations([
      "toggleOutline",
      "toggleShadow",
      "changeNavigationColor",
      "toggleNavOutline",
      "toggleGlassmorph",
      "toggleBackground",
      "toggleSettingsDrawer",
      "togglePreset",
      "setPreset"
    ]),
  },
};
</script>