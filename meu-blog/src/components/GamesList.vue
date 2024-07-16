<template>
  <div v-if="games.length === 0">Erro! Código VERMELHO!!!</div>
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
