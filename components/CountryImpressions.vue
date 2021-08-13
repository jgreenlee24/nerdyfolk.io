<template>
  <div>
    <v-list color="transparent" dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        class="my-1"
        @click.stop=""
      >
        <v-list-item-avatar>
          <v-img
            contain
            width="35"
            height="35"
            :src="item.src"
            class="rounded"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <div class="caption d-flex justify-space-between align-center">
            <div>
              <v-list-item-title class="font-weight-black">
                {{ item.country }}
              </v-list-item-title>
              <v-list-item-subtitle class="caption grey--text text--lighten-1">
                Bounce: {{ item.bounce }}%
              </v-list-item-subtitle>
            </div>
            <div class="font-weight-medium">
              {{ item.impressions }}

              <v-icon size="14" color="base lighten-2">
                $vuetify.icons.mdiAccount
              </v-icon>
            </div>
          </div>
          <v-progress-linear color="indigo" rounded :value="item.value" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <CommonMore />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          country: "Turkey",
          value: 75,
          bounce: 15,
          impressions: "233,349",
          src: require(`~/assets/img/tr.svg`),
        },
        {
          country: "Russia",
          value: 71,
          bounce: 12,
          impressions: "198,659",
          src: require(`~/assets/img/ru.svg`),
        },
        {
          country: "Germany",
          value: 67,
          bounce: 17,
          impressions: "123,511",
          src: require(`~/assets/img/de.svg`),
        },
        {
          country: "United States",
          value: 63,
          bounce: 19,
          impressions: "110,698",
          src: require(`~/assets/img/us.svg`),
        },
        {
          country: "The Netherlands",
          value: 59,
          bounce: 20,
          impressions: "101,477",
          src: require(`~/assets/img/nl.svg`),
        },
        {
          country: "France",
          value: 55,
          bounce: 22,
          impressions: "98,688",
          src: require(`~/assets/img/fr.svg`),
        },
      ],
    };
  },
};
</script>