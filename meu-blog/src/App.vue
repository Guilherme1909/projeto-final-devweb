<template>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
}

div {
  display: block;
  unicode-bidi: isolate;
}

.flex {
  display: flex;
  flex-wrap: nowrap;
}
</style>

<script setup>
defineOptions({
  name: "App",
});
</script>
