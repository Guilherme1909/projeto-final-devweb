<template>
  <q-layout view="hhh lpR lFr">

    <q-header reveal elevated class="bg-primary text-white header" height-hint="98">
      <q-toolbar>
        <div>
          <img src="~assets/casamata1909.png" class="logo-img">
        </div>
        <div class="tabs-container">
          <q-tabs>
            <q-route-tab to="/" label="Home" />
            <q-route-tab to="/ValidadorCpf" label="Tabela Brasileirão" />
            <q-route-tab to="/page2" label="Mateada" />
            <q-route-tab to="/page3" label="Melhores Momentos" />
            <q-route-tab to="/page4" label="Sobre" />
          </q-tabs>
        </div>
        <div style="align-items: end"> 
          <q-btn flat round dense icon="fab fa-facebook" @click="openLink('https://www.facebook.com/scinternacional')" />
          <q-btn flat round dense icon="fab fa-instagram" @click="openLink('https://www.instagram.com/scinternacional')" />
          <q-btn flat round dense icon="fab fa-youtube" @click="openLink('https://www.youtube.com/scinternacional')" />
          <q-btn flat round dense icon="fab fa-x-twitter" @click="openLink('https://www.x.com/scinternacional')" />
          <q-btn flat round dense icon="fab fa-tiktok" @click="openLink('https://www.tiktok.com/@scinternacional')" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style scoped>
.header
{
  background-color: red !important;
}

.logo-img {
  padding-top: 10px;
  height: 80px;
  width: auto;
}

.tabs-container {
  flex-grow: 1;
  align-items: center;
  overflow-x: auto;
}
</style>

<script setup>
defineOptions({
  name: 'MainLayout',
  methods: {
    openLink (url) {
      window.open(url, '_blank')
    }
  }
})
</script>
