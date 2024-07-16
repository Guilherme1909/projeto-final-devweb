<template>
  <div v-if="games == null">
    <q-circular-progress
      indeterminate
      rounded
      size="50px"
      color="lime"
      class="q-ma-md"
    />
  </div>
  <div v-else>
    <game-card v-for="game in games" :key="game.fixture.id" :game="game" />
  </div>
</template>

<script>
import GameCard from "./GameCard.vue";

export default {
  name: "GameList",
  components: {
    GameCard,
  },
  props: {
    games: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
