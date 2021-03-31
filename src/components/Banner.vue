<template>
  <v-container class="container banner">
    <v-row justify="space-around" align="center">
      <v-col class="col-1">
        <v-img src="../assets/image/logo1.svg"></v-img>
      </v-col>
      <v-col class="col-7">
        <v-img src="../assets/image/房@2x.png" class="d-flex align-center banner-bg">
          <h1 class="font-rage font-italic banner-title">I don't want to work</h1>
        </v-img>
      </v-col>
      <v-col class="col-1">
        <h2 class="banner-second-title">不想－上班</h2>
      </v-col>
    </v-row>
    <div class="font-rage font-italic slide">
      Slide
      <div class="slide-icon">
        <span>></span>
        <span>></span>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Banner",
};
</script>
