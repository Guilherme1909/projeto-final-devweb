<template>
  <div class="card-container row justify-center q-pa-md">
    <q-card v-for="card in cards" :key="card.title" class="my-card q-mx-md">
      <q-card-section class="bg-grey-8 text-white">
        <div class="text-h6">{{ card.title }}</div>
        <div class="text-subtitle2">{{ card.subtitle }}</div>
      </q-card-section>

      <q-card-actions vertical align="center">
        <q-btn flat>Ver mais</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'CardPartida',
  data () {
    return {
      cards: [
        { title: 'Our Changing Planet', subtitle: 'by John Doe' },
        { title: 'Exploring the Universe', subtitle: 'by Jane Doe' },
        { title: 'The World of Science', subtitle: 'by Albert Smith' },
        { title: 'Advances in Technology', subtitle: 'by Maria Garcia' },
        { title: 'The Future of AI asdasd', subtitle: 'by Elon Musk' }
      ]
    }
  }
}
</script>

<style scoped>
.card-container {
  max-width: 1200px; /* Ajuste conforme necessário */
  margin: 0 auto;
  border: 2px solid rgb(255, 0, 0);
  border-radius: 12px;
  padding: 16px;
  background-color: #ff003c;
}
.my-card {
  width: 200px; /* Ajuste conforme necessário */
}
</style>
