<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <v-alert
            dismissible
            text
            dense
            color="secondary"
            icon="$vuetify.icons.mdiClockFast"
            border="left"
          >
            <strong>Write a new message!</strong>
            You can also press
            <strong>
              enter
              <v-icon small>$vuetify.icons.mdiKeyboardReturn </v-icon>
            </strong>
            to send your message! 😏
          </v-alert>
        </v-col>
        <v-col
          v-if="drawer"
          cols="12"
          md="4"
          lg="3"
        >
          <BaseSheet
            v-if="drawer"
            height="100%"
            class-names="rounded-r-0"
          >
            <v-list-item class="px-5 py-1">
              <v-list-item-avatar color="accent">
                <v-img
                  contain
                  width="35"
                  height="35"
                  :src="require(`~/assets/img/avatar.svg`)"
                  class="rounded"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="font-weight-medium">
                  <h4>Justin Greenlee</h4>
                </v-list-item-title>
                <v-list-item-subtitle class="d-flex align-center">
                  <v-icon
                    color="success"
                    left
                    x-small
                  >
                    $vuetify.icons.mdiCircle
                  </v-icon>
                  Online
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>$vuetify.icons.mdiDotsVertical</v-icon>
              </v-list-item-action>
            </v-list-item>

            <v-text-field
              solo
              :background-color="glassmorph ? 'glass' : 'base lighten-1'"
              placeholder="Search message..."
              prepend-inner-icon="$vuetify.icons.mdiMagnify"
              hide-details
              rounded
              class="mx-4 mb-4"
              dense
            />

            <v-divider />

            <v-list
              class="pt-0 rounded-t-0"
              two-line
              color="transparent"
              style="overflow: auto; max-height: 670px"
            >
              <v-list-item-group v-model="selected">
                <template v-for="(item, index) in items">
                  <v-list-item :key="`messages-${index}`">
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
                      <v-list-item-title
                        class="body-2 font-weight-medium"
                        v-text="item.title"
                      />
                      <v-list-item-subtitle
                        class="caption"
                        v-text="item.subtitle"
                      />
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text v-text="item.action" />
                    </v-list-item-action>
                  </v-list-item>

                  <v-divider
                    v-if="index < items.length - 1"
                    :key="`divider-${index}`"
                  />
                </template>
              </v-list-item-group>
            </v-list>
          </BaseSheet>
        </v-col>
        <v-col
          cols="12"
          :md="!drawer ? 12 : 8"
          :lg="!drawer ? 12 : 9"
          class="my-6 my-md-0 order-first order-sm-last"
        >
          <BaseSheet class-names="px-0 py-0 rounded-l-0">
            <v-app-bar
              :color="glassmorph ? 'glass' : 'base lighten-1'"
              clipped-left
            >
              <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

              <v-sheet
                class="d-flex align-center justify-space-between flex"
                color="transparent"
              >
                <div class="d-flex align-center">
                  <v-avatar
                    size="40"
                    class="mx-4 my-2"
                  >
                    <v-img
                      :src="require(`~/assets/img/avataaars-1.png`)"
                      contain
                    />
                  </v-avatar>
                  <div>
                    <h4 class="font-weight-bold">
                      John
                    </h4>
                    <div class="font-weight-light d-none d-sm-block">
                      Technical Support
                    </div>
                  </div>
                </div>
                <div>
                  <v-btn icon>
                    <v-icon> $vuetify.icons.mdiMagnify </v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon> $vuetify.icons.mdiDotsVertical </v-icon>
                  </v-btn>
                </div>
              </v-sheet>
            </v-app-bar>

            <v-card-text>
              <v-sheet
                color="transparent"
                height="621px"
                class="mx-4 overflow-auto"
              >
                <div class="d-flex align-center">
                  <v-divider class="mr-3" />
                  <v-chip color="primary">
                    11:25 PM
                  </v-chip>
                  <v-divider class="ml-3" />
                </div>

                <div
                  v-for="(item, index) in messages"
                  :key="index"
                  class="d-flex align-center my-4"
                  :class="self(item.from) ? 'justify-end' : 'justify-start'"
                >
                  <div
                    :class="self(item.from) ? 'flex-row-reverse' : ''"
                    class="d-flex align-baseline"
                  >
                    <div
                      class="pt-2 pb-4 px-3 rounded-lg message"
                      :class="
                        self(item.from) ? 'ml-2 accent' : 'mr-2 base lighten-1'
                      "
                    >
                      <div
                        class="d-flex align-center justify-space-between gap-md"
                      >
                        <h4 class="font-weight-bold">
                          {{ self(item.from) ? "You" : item.from }}
                        </h4>
                        <div
                          class="caption"
                          style="padding-top: 2px"
                        >
                          {{ item.sentAt }}
                        </div>
                      </div>
                      <p class="mb-0">
                        {{ item.message }}
                      </p>
                    </div>

                    <div
                      v-if="item.seen || item.received"
                      class="mt-auto"
                    >
                      <v-icon :color="item.seen ? 'primary' : 'base lighten-5'">
                        {{
                          item.seen
                            ? "$vuetify.icons.mdiCheckAll"
                            : item.received
                              ? "$vuetify.icons.mdiCheck"
                              : ""
                        }}
                      </v-icon>
                    </div>
                  </div>
                </div>
              </v-sheet>

              <v-sheet
                class="pa-4"
                color="transparent"
              >
                <v-text-field
                  v-model="message"
                  solo
                  clearable
                  :background-color="glassmorph ? 'glass' : 'base lighten-1'"
                  placeholder="Type a message..."
                  append-icon="$vuetify.icons.mdiSend"
                  hide-details
                  autofocus
                  @click:append="submitMessage"
                  @keydown.enter="submitMessage"
                />
              </v-sheet>
            </v-card-text>
          </BaseSheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      message: "",
      selected: 0,
      drawer: true,
      group: null,
      messages: [
        {
          from: "John",
          to: "Justin",
          message:
            "Hello 👋 We are always here to help. Feel free to message us!",
          seen: true,
          received: true,
          sentAt: "11:39 AM",
        },
        {
          from: "John",
          to: "Justin",
          message: "Have a nice day 👍",
          seen: true,
          received: true,
          sentAt: "11:40 AM",
        },
        {
          from: "Justin",
          to: "John",
          message: "I don't need any help right now, thank you though! 😎",
          seen: false,
          received: true,
          sentAt: "13:37 PM",
        },
      ],
      items: [
        {
          action: "09:15 AM",
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: "Ali Connors",
          src: require(`~/assets/img/avataaars-5.png`),
        },
        {
          action: "11:39 AM",
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: "James Smith",
          src: require(`~/assets/img/avataaars-6.png`),
        },
        {
          action: "12:15 AM",
          subtitle: "Do you have Paris recommendations? Have you ever been?",
          title: "Sandra Adams",
          src: require(`~/assets/img/avataaars-2.png`),
        },
        {
          action: "12:37 AM",
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: "Ali Connors",
          src: require(`~/assets/img/avataaars-0.png`),
        },
        {
          action: "14:01 AM",
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: "James Smith",
          src: require(`~/assets/img/avataaars-1.png`),
        },
        {
          action: "17:55 AM",
          subtitle: "Do you have Paris recommendations? Have you ever been?",
          title: "Sandra Adams",
          src: require(`~/assets/img/avataaars-2.png`),
        },
        {
          action: "Yesterday",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?",
          title: "Trevor Hansen",
          src: require(`~/assets/img/avataaars-3.png`),
        },
        {
          action: "Yesterday",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
          title: "Britta Holt",
          src: require(`~/assets/img/avataaars-4.png`),
        },
        {
          action: "Yesterday",
          subtitle: "Do you have any recommendations? I am not sure...",
          title: "Adam White",
          src: require(`~/assets/img/avataaars-4.png`),
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["outline", "shadow", "glassmorph"]),
  },
  methods: {
    submitMessage() {
      if (!this.message) return;

      let message = {
        from: "Justin",
        to: "John",
        message: this.message,
        seen: false,
        received: true,
        sentAt: "16:20 PM",
      };

      this.messages.push(message);
      this.message = "";
      this.playAudio();
    },
    self(sender) {
      return sender.toLowerCase() == "mert" ? true : false;
    },
    playAudio() {
      var audio = new Audio("bling.mp3");
      audio.volume = 0.5;
      audio.play();
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  max-width: 500px;
  word-break: break-word;
}
</style>