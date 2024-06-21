<template>
  <q-page padding>
    <CardPartida/>
  </q-page>
</template>

<script setup>
import CardPartida from 'src/components/CardPartida.vue'

defineOptions({
  name: 'IndexPage',
  components: {
    CardPartida
  }
});
</script>
