<template>
  <div class="bg-primary-dark-color py-7 mt-13 footer">
    <v-container class="d-flex justify-end">
      <div class="d-flex flex-column">
        <v-img src="../assets/image/logo2.svg" max-width="57" max-height="54" class="mr-10"></v-img>
        <p class="ma-0 mt-3 white-color font-size-xs footer-title">不想上班</p>
      </div>
      <v-divider vertical class="bg-secondary-color align-self-center footer-divider"></v-divider>
      <ul class="pl-0 ml-7 font-size-xs">
        <li class="mb-3">
          <a href="tel:+07-536-0000" class="d-flex align-center">
            <v-icon dark size="15" class="mr-3">mdi-phone</v-icon>
            <span class="white-color">07-536-0000</span>
          </a>
        </li>
        <li class="mb-3">
          <a class="d-flex align-center">
            <v-icon dark size="15" class="mr-3">mdi-map-marker</v-icon>
            <span class="white-color">香港銅鑼灣興發街1號</span>
          </a>
        </li>
        <li>
          <a class="d-flex align-center">
            <v-icon dark size="15" class="mr-3">mdi-instagram</v-icon>
            <span class="white-color">I_dont_wank_to_work</span>
          </a>
        </li>
      </ul>
    </v-container>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

</style>
