<template>
  <div>
    <v-card-text class="pa-0">
      <v-timeline
        align-top
        dense
      >
        <v-timeline-item
          color="error"
          small
        >
          <v-row>
            <v-col>
              <strong>Remaining Issues</strong>
              <div class="caption">
                <v-icon
                  color="error"
                  small
                >
                  $vuetify.icons.mdiAlertCircle
                </v-icon>
                • 3 unsolved issues today
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="success"
          small
        >
          <v-row>
            <v-col>
              <strong>Daily Standup</strong>
              <div class="caption">
                <v-icon
                  color="success"
                  small
                >
                  $vuetify.icons.mdiGoogleHangouts
                </v-icon>
                • Google Hangouts • <span>12:00PM</span>
              </div>

              <CommonMember
                v-for="(member, index) in members.slice(0, 3)"
                :key="index"
                :member="member"
              />
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="accent"
          small
        >
          <v-row>
            <v-col class="pb-0">
              <strong>Project Meeting</strong>
              <div class="caption">
                <v-icon
                  color="accent"
                  small
                >
                  $vuetify.icons.mdiMicrosoftTeams
                </v-icon>
                • Microsoft Teams • <span>14:30PM</span>
              </div>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="require(`~/assets/img/avataaars-1.png`)" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="caption font-weight-bold">
                    Justin Greenlee
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-caption">
                    CEO, Founder
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="info"
          small
        >
          <v-row>
            <v-col class="pb-0">
              <strong>Meeting Notes</strong>
              <div class="caption">
                <v-icon
                  color="info"
                  small
                >
                  $vuetify.icons.mdiPaperclip
                </v-icon>
                • Lorem ipsum dolor sit amet adipisicing.
              </div>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon
                    color="info"
                    x-large
                  >
                    $vuetify.icons.mdiMicrosoftWord
                  </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="caption font-weight-bold">
                    Notes.docx
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-caption">
                    Preview
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          title: "Ali Connors",
          src: require(`~/assets/img/avataaars-5.png`),
        },
        {
          title: "Eric Peeters",
          src: require(`~/assets/img/avataaars-1.png`),
        },
        {
          title: "John Smith",
          src: require(`~/assets/img/avataaars-2.png`),
        },
        {
          title: "Trevor Hansen",
          src: require(`~/assets/img/avataaars-3.png`),
        },
        {
          title: "Britta Holt",
          src: require(`~/assets/img/avataaars-4.png`),
        },
      ],
    };
  },
};
</script>