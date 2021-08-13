<template>
  <div
    :class="`d-flex justify-space-between align-center ${classNames} ${
      spacingTitle ? spacingTitle : text ? 'mb-6' : ''
    }`"
  >
    <div
      class="d-flex flex-column"
      :class="reverseSubtitle ? 'flex-column-reverse' : ''"
    >
      <div
        v-if="subtitle"
        class="caption"
      >
        {{ subtitle }}
      </div>
      <h3 class="white--text font-weight-medium">
        {{ text }}
      </h3>
    </div>

    <v-menu
      v-if="cog"
      transition="slide-y-transition"
      bottom
      left
      offset-y
      close-on-content-click
      close-on-click
    >
      <template #activator="{ on, attrs }">
        <div
          :class="[
            { 'pa-2 rounded-circle': background },
            backgroundColor ? backgroundColor : '',
            { 'icon-spin': spin },
          ]"
        >
          <v-icon
            :size="spin ? 19 : 25"
            v-bind="attrs"
            v-on="on"
          >
            $vuetify.icons.mdiCog
          </v-icon>
        </div>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <div
      v-if="!cog && icon"
      :class="[
        { 'pa-2 rounded-circle': background },
        backgroundColor ? backgroundColor : '',
      ]"
    >
      <v-icon size="25">
        {{ iconName }}
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null,
    },
    iconName: {
      type: String,
      default: null,
    },
    cog: {
      type: Boolean,
      default: false,
    },
    background: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
    spin: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: true,
    },
    classNames: {
      type: String,
      default: null,
    },
    spacingTitle: {
      type: String,
      default: null,
    },
    reverseSubtitle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [
        {
          title: "Menu Item 1",
        },
        {
          title: "Menu Item 2",
        },
        {
          title: "Menu Item 3",
        },
        {
          title: "Menu Item 4",
        },
      ],
    };
  },
};
</script>
