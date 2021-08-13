<template>
  <v-card
    color="transparent"
    :height="height ? height : 320"
    style="overflow-y: scroll"
    flat
    tile
  >
    <v-list
      two-line
      dense
      color="transparent"
    >
      <v-list-item-group>
        <template v-for="(item, index) in items">
          <v-hover
            v-slot="{ hover }"
            :key="`customers-${index}`"
          >
            <v-list-item
              :ripple="false"
              :class="hover ? 'border-list-item-elevated py-1' : ''"
            >
              <v-list-item-avatar>
                <v-img :src="item.src" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="caption font-weight-bold">
                  {{ item.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-caption text-lowercase">
                  {{ item.email }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <div class="d-flex align-center justify-center">
                  <v-icon
                    :size="hover ? 22 : 18"
                    @click.stop=""
                  >
                    $vuetify.icons.mdiWhatsapp
                  </v-icon>

                  <v-icon
                    :size="hover ? 22 : 18"
                    class="mx-2"
                    @click.stop=""
                  >
                    $vuetify.icons.mdiEmailOutline
                  </v-icon>

                  <v-icon
                    :size="hover ? 22 : 18"
                    @click.stop=""
                  >
                    $vuetify.icons.mdiDotsHorizontal
                  </v-icon>
                </div>
              </v-list-item-action>
            </v-list-item>
          </v-hover>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      items: [
        {
          title: "Bennie Prosacco",
          email: "Bennie.Prosacco@yahoo.com",
          src: require(`~/assets/img/avataaars-1.png`),
        },
        {
          title: "Adrian Hills",
          email: "Tobin66@hotmail.com",
          src: require(`~/assets/img/avataaars-2.png`),
        },
        {
          title: "Earnest Keebler",
          email: "Earnest_Keebler@hotmail.com",
          src: require(`~/assets/img/avataaars-3.png`),
        },
        {
          title: "Raoul Boyer",
          email: "Raoul_Boyer@gmail.com",
          src: require(`~/assets/img/avataaars-4.png`),
        },
        {
          title: "Sandy Corwin",
          email: "Sandy_Corwin@yahoo.com",
          src: require(`~/assets/img/avataaars-5.png`),
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