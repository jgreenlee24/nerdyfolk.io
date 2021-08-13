<template>
  <div>
    <v-list
      two-line
      dense
      color="transparent"
    >
      <v-list-item-group active-class="primary--text">
        <template v-for="(item, index) in items">
          <v-list-item :key="`review-${index}`">
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
              <v-list-item-title class="text-caption font-weight-light">
                {{ item.product }} −
                <small>
                  {{ item.title }}
                </small>
              </v-list-item-title>

              <v-list-item-subtitle
                class="text--primary"
                v-text="item.headline"
              />

              <v-list-item-subtitle v-text="item.subtitle" />
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text v-text="item.action" />
              <v-rating
                background-color="orange"
                color="orange"
                length="5"
                size="18"
                half-increments
                readonly
                :value="item.rating"
              >
                $vuetify.icons.mdiStar
              </v-rating>
            </v-list-item-action>
          </v-list-item>

          <v-divider
            v-if="index < items.length - 1"
            :key="index"
          />
        </template>
      </v-list-item-group>
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
          action: "15:12 PM",
          headline: "The perfect admin theme I was looking for",
          subtitle:
            "Laudantium voluptate blanditiis doloremque quas dicta aut tempora perferendis, deleniti tempore",
          title: "Ali Connors",
          product: "NERDYFOLK Dashboard",
          rating: 4.5,
          src: require(`~/assets/img/avataaars-0.png`),
        },
        {
          action: "15:08 PM",
          headline: "Highly recommended to everyone",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quos.",
          title: "Eric Peeters",
          product: "Vuetify Material Dashboard Pro",
          rating: 5,
          src: require(`~/assets/img/avataaars-1.png`),
        },
        {
          action: "14:32 PM",
          headline: "Exactly what I needed",
          subtitle: "Dignissimos quia similique sit repellendus, laudantium",
          title: "John Smith",
          product: "Vuetify Material Dashboard Pro",
          rating: 5,
          src: require(`~/assets/img/avataaars-2.png`),
        },
        {
          action: "14:12 PM",
          headline: "A clean and modern UI",
          subtitle:
            "Deleniti tempore tenetur sunt provident id velit nisi obcaecati maxime iusto",
          title: "Trevor Hansen",
          product: "Flairo Theme Pro",
          rating: 4.5,
          src: require(`~/assets/img/avataaars-3.png`),
        },
        {
          action: "13:37 PM",
          headline: "Beautiful but built difficult",
          subtitle:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quos.",
          title: "Britta Holt",
          product: "Zero Theme Pro",
          rating: 5,
          src: require(`~/assets/img/avataaars-4.png`),
        },
      ],
    };
  },
};
</script>

<style>
.v-rating.v-rating--readonly > button {
  padding: 1.5px !important;
}
</style>