<template>
  <div>
    <BaseSheet>
      <v-tabs
        :background-color="glassmorph ? 'transparent' : 'base'"
        color="primary"
        show-arrows
      >
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
    </BaseSheet>
    <BaseSheet class="my-2">
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card-text>
            <h3 class="primary--text">
              Summary
            </h3>
            <p class="my-3">
              Alias fugiat iure facilis natus impedit sint temporibus modi porro
              eius veritatis, vel reprehenderit aspernatur sit! Aliquid quasi
              sequi reprehenderit ipsum doloremque suscipit, voluptatum qui
              similique magnam harum.
            </p>
            <p class="my-2">
              Laborum fuga similique omnis iste accusantium ea tempora et totam
              provident cum? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deserunt quisquam repellendus eligendi.
            </p>
          </v-card-text>
        </v-tab-item>
      </v-tabs-items>
    </BaseSheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tab: 0,
      items: ["Overview", "Groups", "Posts", "Pages", "Events", "Messages"],
    };
  },
  computed: {
    ...mapGetters(["glassmorph"]),
  },
};
</script>