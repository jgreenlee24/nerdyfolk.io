<template>
  <v-sheet
    class="d-flex flex flex-column flex-sm-row body-2"
    color="transparent"
  >
    <v-checkbox
      v-model="checkbox"
      off-icon="$vuetify.icons.mdiCircleOutline"
      on-icon="$vuetify.icons.mdiCheckCircle"
      color="success"
      class="mr-2"
      @click="playAudio"
    />

    <div class="flex">
      <v-card-title class="d-flex align-center justify-space-between px-0">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>
          <v-chip
            v-if="reminder"
            color="base lighten-2"
            close
            small
          >
            <v-icon left>
              $vuetify.icons.mdiTimerOutline
            </v-icon>Reminder
          </v-chip>
          <v-chip
            v-if="important"
            color="error"
            small
          >
            Important
          </v-chip>
          <CommonMenu icon="$vuetify.icons.mdiDotsVertical" />
        </div>
      </v-card-title>
      <p class="mb-2 grey--text text--lighten-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum unde
        laboriosam totam autem consectetur. Maxime, error rem. Id aut maxime
        omnis fuga. Culpa consequatur nobis veritatis et qui quod non.
      </p>
      <p
        v-if="largeText"
        class="mb-2 grey--text text--lighten-2"
      >
        Laborum unde laboriosam totam autem consectetur. Maxime, error rem. Id
        aut maxime omnis fuga. Culpa consequatur nobis veritatis et qui quod
        non.
      </p>
      <v-divider class="px-4" />
      <v-card-actions>
        <div
          class="
            d-flex
            flex
            justify-space-between
            flex-column flex-md-row
            gap-lg
            align-baseline align-md-center
          "
        >
          <div>
            <template v-for="(member, index) in members.slice(0, 3)">
              <CommonMember
                :key="index"
                :member="member"
                :size="35"
              />
            </template>
            <v-btn
              text
              fab
              x-small
              outlined
              color="primary"
              class="mt-2"
            >
              {{ memberCount }}
            </v-btn>
          </div>
          <div class="d-flex align-center flex-md-row flex-column gap-md">
            <v-chip
              v-if="tag"
              color="warning"
              small
              class="mr-2"
            >
              <v-icon left>
                $vuetify.icons.mdiAccountMultiplePlus
              </v-icon>
              New Client
            </v-chip>
            <v-btn
              text
              small
              rounded
              class="font-weight-medium"
            >
              {{ commentCount }} comments
              <v-icon
                right
                small
              >
                $vuetify.icons.mdiMessageReplyText
              </v-icon>
            </v-btn>
          </div>
        </div>
      </v-card-actions>
    </div>
  </v-sheet>
</template>

<script>
export default {
  props: {
    members: {
      type: Array,
      default: () => [],
    },
    commentCount: {
      type: String,
      default: null,
    },
    tag: {
      type: Boolean,
      default: true,
    },
    memberCount: {
      type: String,
      default: null,
    },
    largeText: {
      type: Boolean,
      default: true,
    },
    reminder: {
      type: Boolean,
      default: true,
    },
    important: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checkbox: false,
    };
  },
  methods: {
    playAudio() {
      var audio = new Audio("bell.mp3");
      audio.volume = 0.2;
      audio.play();
    },
  },
};
</script>