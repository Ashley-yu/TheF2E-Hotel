<template>
  <div class="mx-4 mx-md-9 mx-lg-16">
    <div class="py-4 px-6 mb-2 success-card">
      <h3 class="text-center font-size-xl mb-8 success-card-title">預約成功!</h3>
      <ul class="pa-0 mb-4 border-bottom success-card-list">
        <li class="d-flex mb-7">
          <p class="ma-0 mr-4 primary-dark-color">姓名</p>
          <p class="ma-0 font-weight-bold">{{ booking[0].name }}</p>
        </li>
        <li class="d-flex mb-7">
          <p class="ma-0 mr-4 primary-dark-color">電話</p>
          <p class="ma-0 font-weight-bold">{{ booking[0].tel }}</p>
        </li>
        <li class="d-flex mb-4">
          <p class="ma-0 mr-4 primary-dark-color">日期</p>
          <p class="ma-0 font-weight-bold">{{ booking[0].date }} ~ {{ booking[1].date }}</p>
        </li>
        <li class="d-flex justify-space-between mb-4">
          <v-row>
            <v-col cols="4">
              <p class="ma-0 primary-dark-color">平日(一~四)</p>
            </v-col>
            <v-col cols="4">
              <p class="ma-0 primary-dark-color">${{ room.normalDayPrice }} x {{ normalDayNum }} 晚</p>
            </v-col>
            <v-col cols="4">
              <p class="ma-0 font-weight-bold text-right">${{ room.normalDayPrice * normalDayNum }}</p>
            </v-col>
            <v-col cols="4">
              <p class="ma-0 primary-dark-color">假日(五~日)</p>
            </v-col>
            <v-col cols="4">
              <p class="ma-0 primary-dark-color">${{ room.holidayPrice }} x {{ holidayNum }} 晚</p>
            </v-col>
            <v-col cols="4">
              <p class="ma-0 font-weight-bold text-right">${{ room.holidayPrice * holidayNum }}</p>
            </v-col>
          </v-row>
        </li>
      </ul>
      <p class="ma-0 text-right font-size-lg font-weight-bold mb-4">
        ${{ normalDayNum * room.normalDayPrice + holidayNum * room.holidayPrice }}
      </p>
    </div>
    <div class="py-3 px-9 success-card-remind">
      <p class="ma-0 font-size-xs primary-dark-color mb-2">提醒!</p>
      <ul class="pa-0 d-flex justify-space-between">
        <li>
          <p class="ma-0 font-size-xs primary-dark-color">checkIn 時間</p>
          <p class="ma-0 font-size-lg primary-dark-color">
            {{ room.checkInAndOut.checkInEarly }}~{{ room.checkInAndOut.checkInLate }}
          </p>
        </li>
        <li>
          <p class="ma-0 font-size-xs primary-dark-color">最晚checkout 時間</p>
          <p class="ma-0 font-size-lg primary-dark-color">{{ room.checkInAndOut.checkOut }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessCard",
  props: {
    room: {
      type: Object,
      default: () => {},
    },
    booking: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    dateDiff(startDate, endDate) {
      return Math.abs(new Date(startDate) - new Date(endDate)) / 1000 / 60 / 60 / 24;
    },
  },
  computed: {
    normalDayNum() {
      const days = this.dateDiff(this.booking[0].date,this.booking[1].date);
      let normalDay = 0;
      for(let i = 0; i<days; i++) {
        if ([1, 2, 3, 4].indexOf(new Date(new Date(this.booking[0].date).setDate(new Date(this.booking[0].date).getDate()+i)).getDay()) > -1) {
          normalDay+=1;
        }
      }
      return normalDay;
    },
    holidayNum() {
      const days = this.dateDiff(this.booking[0].date,this.booking[1].date);
      let holiday = 0;
      for(let i = 0; i<days; i++) {
        if ([0, 6, 5].indexOf(new Date(new Date(this.booking[0].date).setDate(new Date(this.booking[0].date).getDate()+i)).getDay()) > -1) {
          holiday+=1;
        }
      }
      return holiday;
    },
  },
}
</script>

<style scoped>

</style>
