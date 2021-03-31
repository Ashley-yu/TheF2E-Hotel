<template>
  <div>
    <ReservationTitle :name="room.name" :imageUrl="room.imageUrl"/>
    <v-container>
      <v-row class="flex-column-reverse flex-md-row">
        <v-col cols="12" md="6">
          <ReservationCard :roomId="room.id"/>
        </v-col>
        <v-col cols="12" md="6">
          <ReservationInfo  :room="room"/>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import ReservationTitle from "../components/ReservationTitle";
import ReservationCard from "../components/ReservationCard";
import ReservationInfo from "../components/ReservationInfo";
export default {
  name: "Reservation",
  props: ["room"],
  components: {
    ReservationTitle,
    ReservationCard,
    ReservationInfo,
    Footer
  },
}
</script>

<style scoped>

</style>
