<template>
  <v-app id="app">
    <router-view />
    <Snackbar/>
  </v-app>
</template>

<script>
import Snackbar from "@/components/Snackbar";

export default {
  components: {
    Snackbar,
  }
}
</script>

<style lang="scss">
@import "../src/assets/styles/all";
</style>
