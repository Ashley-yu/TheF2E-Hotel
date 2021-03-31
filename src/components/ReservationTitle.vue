<template>
  <v-row no-gutters class="reservation-img">
    <v-col cols="8">
      <v-img :src="imageUrl[0]" max-height="428"></v-img>
    </v-col>
    <v-col cols="4">
      <v-img :src="imageUrl[1]" max-height="214"></v-img>
      <v-img :src="imageUrl[2]" max-height="214"></v-img>
    </v-col>
    <h2 class="font-rage reservation-title">
      Single Room
    </h2>
  </v-row>
</template>

<script>
export default {
  name: "ReservationTitle",
  props: {
    name: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>

</style>
