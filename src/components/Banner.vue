<template>
  <v-container class="container banner d-flex flex-column">
    <v-row justify="space-around" align="center">
      <v-col class="col-1">
        <v-img src="../assets/image/logo1.svg"></v-img>
      </v-col>
      <v-col class="col-7">
        <v-img src="../assets/image/房@2x.png" class="d-flex align-center banner-bg">
          <h1 class="font-rage banner-title">I don't want to work</h1>
        </v-img>
      </v-col>
      <v-col class="col-1">
        <h2 class="banner-second-title">不想－上班</h2>
      </v-col>
    </v-row>
    <button class="font-rage font-italic primary-color slide" @click="slide">
      Slide
      <div class="slide-icon">
        <span>></span>
        <span>></span>
      </div>
    </button>
  </v-container>
</template>
<script>
export default {
  name: "Banner",
  data: () => ({
    scrollOptions: {
      duration: 600,
      easing: "linear",
    },
  }),
  methods: {
    slide() {
      this.$vuetify.goTo("#rooms", this.scrollOptions);
    },
  },
};
</script>
