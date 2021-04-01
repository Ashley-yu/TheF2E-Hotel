<template>
  <v-skeleton-loader :loading="loading" type="image, article, actions">
    <div class="d-flex justify-space-around mx-5 mb-13 room-card">
      <h3 class="mr-2 card-title">{{ room.name }}</h3>
      <v-hover v-slot="{ hover }">
        <v-card class="pa-2 card-content"
                @click.prevent="gotoReservation"
                :elevation="hover ? 8 : 2"
                :class="{ 'on-hover': hover }">
          <v-img :src="imageUrl" class="card-img"></v-img>
          <ul class="pa-0">
            <li class="d-flex justify-space-between pa-3 border-bottom">
              <div class="card-subtitle">
                <div>人數</div>
                <div>
                  {{
                    room.descriptionShort
                        ? room.descriptionShort.GuestMax ===
                        room.descriptionShort.GuestMin
                        ? room.descriptionShort.GuestMin
                        : `${room.descriptionShort.GuestMin}~${room.descriptionShort.GuestMax}`
                        : ""
                  }}
                </div>
              </div>
              <div class="card-subtitle">
                <div>床</div>
                <div>
                  {{ room.descriptionShort ? room.descriptionShort.Bed.toString() : "" }}
                </div>
              </div>
              <div class="card-subtitle">
                <div>大小</div>
                <div>
                  {{ room.descriptionShort ? room.descriptionShort.Footage : "" }}<span>m<sup>2</sup></span>
                </div>
              </div>
            </li>
            <li class="pa-3 border-bottom font-size-sm card-item">
              {{ roomAmenities }}
            </li>
            <li class="d-flex align-center pa-3">
              <div class="w-33 font-size-sm">假日</div>
              <div class="w-33 font-size-md primary-light-color">${{ room.holidayPrice }}</div>
            </li>
            <li class="d-flex align-center secondary px-3 py-5">
              <div class="w-33 font-size-sm">平日</div>
              <div class="w-33 font-size-xl">${{ room.normalDayPrice }}</div>
            </li>
          </ul>
        </v-card>
      </v-hover>
    </div>
  </v-skeleton-loader>
</template>

<script>
export default {
  name: "RoomCard",
  props: {
    uid: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    room: {},
    loading: true,
  }),
  methods: {
    gotoReservation() {
      this.$router.push({ name: "Reservation", params: { room: this.room }});
    },
    getRoomData() {
      this.$http({
        method: "get",
        headers: {
          Accept: "application/json",
          Authorization:
              "Bearer HMUCvgjAVLxEmkUVN4mrwkiSXMalQyUxVc5umVG8TJAXxw3GazyzLd19XaGn",
        },
        url:
            "https://challenge.thef2e.com/api/thef2e2019/stage6/room/" + this.uid,
      })
          .then((res) => {
            this.room = res.data.room[0];
            this.loading = false;
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
  computed: {
    roomAmenities() {
      let amenities = [];
      if (this.room.amenities) {
        const translate = {
          "Wi-Fi": "wifi",
          Breakfast: "早餐",
          "Mini-Bar": "迷你吧",
          "Room-Service": "客房服務",
          Television: "電視",
          "Air-Conditioner": "冷氣",
          Refrigerator: "冰箱",
          Sofa: "沙發",
          "Great-View": "景觀",
          "Smoke-Free": "禁止吸菸",
          "Child-Friendly": "適合兒童",
          "Pet-Friendly": "可帶寵物",
        };

        Object.keys(this.room.amenities).forEach((el) => {
          if (this.room.amenities[el]) {
            amenities.push(` ${translate[el]} `);
          }
        });
      }
      return amenities.toString();
    },
  },
  created() {
    this.getRoomData();
  }
}
</script>

<style scoped>

</style>
