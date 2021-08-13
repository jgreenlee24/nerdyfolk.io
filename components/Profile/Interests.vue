<template>
  <div>
    <BaseSheet>
      <v-card-text>
        <h3 class="mb-5 primary--text">
          Interests
        </h3>
        <v-row>
          <v-col
            v-for="(item, index) in interests"
            :key="index"
            cols="12"
            md="6"
          >
            <h4>
              {{ item.type }}
            </h4>
            <span
              v-for="(data, ix) in item.data"
              :key="ix"
            >
              {{ `${data}${ix != item.data.length - 1 ? "," : ""}` }}
            </span>
          </v-col>
        </v-row>
      </v-card-text>
    </BaseSheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interests: [
        {
          type: "Movies",
          data: [
            "The Shawshank Redemption",
            "The Godfather",
            "The Dark Knight ",
            "Fight Club",
            "The King's Man",
            "The Matrix",
            "Parasite",
            "Joker",
          ],
        },
        {
          type: "Books",
          data: [
            "One Morning",
            "The Nightmare Awakening",
            "Unwrapped: A Delver's Guide",
            "Purple Heart",
            "Ominous Dream",
            "Faraway Domains",
          ],
        },
        {
          type: "Games",
          data: [
            "DOTA 2",
            "Hearthstone",
            "CSGO",
            "League of Legends",
            "Apex Legends",
            "PlayersUnknown Battle Grounds",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>