<template>
  <div>
    <ReservationTitle :name="room.name" :imageUrl="room.imageUrl" v-if="!isSuccess"/>
    <SuccessTitle v-else/>
    <v-container>
      <v-row class="flex-column-reverse flex-md-row">
        <v-col cols="12" md="6">
          <ReservationCard :room="room" v-if="!isSuccess"
                           @setSuccess="setSuccess"
                           @setBooking="setBooking"/>
          <SuccessCard :booking="bookingData" :room="room" v-else/>
        </v-col>
        <v-col cols="12" md="6">
          <ReservationInfo  :room="room" :checkinSwitch="isSuccess"/>
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
import SuccessTitle from "../components/SuccessTitle";
import SuccessCard from "../components/SuccessCard";

export default {
  name: "Reservation",
  data: () => ({
    room: {},
    isSuccess: false,
    bookingData: {},
  }),
  methods: {
    setSuccess(bool) {
      this.isSuccess = bool;
    },
    setBooking(booking) {
      this.bookingData = booking;
    },
  },
  components: {
    ReservationTitle,
    ReservationCard,
    ReservationInfo,
    SuccessTitle,
    SuccessCard,
    Footer
  },
  created() {
    this.room = JSON.parse(localStorage.getItem('room')) || {};

    if (Object.keys(this.room).length === 0) {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>
