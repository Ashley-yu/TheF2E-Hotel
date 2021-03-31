<template>
  <div class="text-center py-8 py-md-15 rooms" id="rooms">
    <h2 class="mb-8 mb-md-16 font-rage rooms-title">ROOMS</h2>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" lg="4" v-for="item in items" :key="item.id">
          <RoomCard
              :uid="item.id"
              :imageUrl="item.imageUrl"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import RoomCard from "./RoomCard";
export default {
  name: "Rooms",
  components: {
    RoomCard,
  },
  data: () => ({
    items: [],
  }),
  methods: {
    getData() {
      this.$http({
        method: "get",
        headers: {
          Accept: "application/json",
          Authorization:
              "Bearer HMUCvgjAVLxEmkUVN4mrwkiSXMalQyUxVc5umVG8TJAXxw3GazyzLd19XaGn",
        },
        url: "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",
      })
          .then((res) => {
            this.items = res.data.items;
          })
          .catch((err) => {
            console.log(err);
          });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>

</style>
