<template>
  <div>
    <v-col class="pb-0">
      <strong>Milestones</strong>
      <v-list-item
        v-for="(item, index) in milestones"
        :key="index"
        class="px-0"
      >
        <v-list-item-avatar class="align-self-baseline align-self-start">
          <v-icon>$vuetify.icons.mdiSeal</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="caption font-weight-bold">
            {{ item.title }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-caption">
            <span>{{ item.subtitle }}</span>
            <div class="mt-3">
              <v-progress-linear
                :value="item.value"
                rounded
                striped
                height="10"
                class="my-1"
                :color="colors[index]"
              />
              <span class="float-right caption">
                <span class="font-weight-bold">{{ item.value }}%</span>
                complete</span>
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </div>
</template>

<script>
import { colors } from "~/data/common";

export default {
  data() {
    return {
      colors: [],
      milestones: [
        {
          title: "Write 15 blog articles on Medium",
          subtitle: "Office / Marketing",
          value: 70,
        },
        {
          title: "Send out e-mails to new customers",
          subtitle: "Office / Marketing",
          value: 25,
        },
      ],
    };
  },
  mounted() {
    this.colors = colors;
  },
};
</script>