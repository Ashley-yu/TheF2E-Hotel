<template>
  <v-form ref="form" class="bg-secondary-color py-3 px-6 mx-4 mx-sm-9 reservation-card">
    <div>
      <p class="mb-2">日期</p>
      <v-menu
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
              placeholder="入住        ➔    退房"
              v-model="selectDate"
              readonly
              outlined
              dense
              color="#A5bb94"
              background-color="#FFFFFF"
              height="55px"
              v-bind="attrs"
              v-on="on"
              required
              :rules="[(v) => !!v || '請選擇日期']"
          ></v-text-field>
        </template>
        <v-date-picker
            v-model="dates"
            color="#A5BB94"
            no-title
            range
            scrollable
            locale="zh-tw"
            value="yyyy/MM/dd"
        >
        </v-date-picker>
      </v-menu>
    </div>
    <div v-if="dates[0] && dates[1]" class="mt-4">
      <ul class="pa-0 border-bottom reservation-list mb-4">
        <li class="d-flex justify-space-between mb-4">
          <v-row class="justify-space-between">
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
    <div>
      <p class="mb-2">姓名</p>
      <v-text-field
          outlined
          dense
          color="#A5bb94"
          background-color="#FFFFFF"
          height="55px"
          v-model="name"
          required
          :rules="[(v) => !!v || '姓名欄位必填']"
      ></v-text-field>
    </div>
    <div>
      <p class="mb-2">電話</p>
      <v-text-field
          outlined
          dense
          color="#A5bb94"
          background-color="#FFFFFF"
          height="55px"
          v-model="phone"
          required
          :rules="[(v) => !!v || '電話欄位必填']"
      ></v-text-field>
    </div>
    <v-alert v-if="errMsg"
             dense
             text
             type="error">
      {{ errMsg }}
    </v-alert>
    <div>
      <v-btn
          color="primary"
          dark
          block
          height="63"
          class="mt-2 mb-9 reservation-confirm"
          @click="submit">
        確定預定日期
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  name: "ReservationCard",
  props: {
    room: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    dates: [],
    name: '',
    phone: '',
    errMsg: '',
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        if (this.dates[0] > this.dates[1]) {
          this.dates.reverse();
        }

        this.$http({
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer HMUCvgjAVLxEmkUVN4mrwkiSXMalQyUxVc5umVG8TJAXxw3GazyzLd19XaGn",
            "Content-Type": "application/json",
          },
          url: `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${this.room.id}`,
          data: JSON.stringify({
            name: this.name,
            tel: this.phone,
            date: this.dates,
          }),
        })
            .then((res) => {
              this.$emit("setSuccess", res.data.success);
              this.$emit("setBooking", res.data.booking);
            })
            .catch((err) => {
              this.errMsg = err.response.data.message;
            });
      }
    },
    dateDiff(startDate, endDate) {
      return Math.abs(new Date(startDate) - new Date(endDate)) / 1000 / 60 / 60 / 24;
    },
  },
  computed: {
    selectDate() {
      if (!this.dates || this.dates.length === 0) {
        return "";
      }
      let str;

      const [year1, month1, day1] = this.dates[0].split("-");

      str = `${year1}/${month1}/${day1}`;

      if (this.dates.length > 1) {
        const [year2, month2, day2] = this.dates[1].split("-");
        let str2 = `${year2}/${month2}/${day2}`;

        if (this.dates[0] > this.dates[1]) {
          str = `${str2}    ➔  ${str}`;
        } else if (this.dates[1] > this.dates[0]) {
          str += `    ➔  ${str2}`;
        }
      }

      return str;
    },
    normalDayNum() {
      let sDate = this.dates[0];
      let eDate = this.dates[1];
      if (this.dates[0] > this.dates[1]) {
        sDate = this.dates[1];
        eDate = this.dates[0];
      }
      const days = this.dateDiff(sDate,eDate);
      let normalDay = 0;
      for(let i = 0; i<days; i++) {
        if ([1, 2, 3, 4].indexOf(new Date(new Date(sDate).setDate(new Date(sDate).getDate()+i)).getDay()) > -1) {
          normalDay+=1;
        }
      }
      return normalDay;
    },
    holidayNum() {
      let sDate = this.dates[0];
      let eDate = this.dates[1];
      if (this.dates[0] > this.dates[1]) {
        sDate = this.dates[1];
        eDate = this.dates[0];
      }
      const days = this.dateDiff(sDate,eDate);
      let holiday = 0;
      for(let i = 0; i<days; i++) {
        if ([0, 6, 5].indexOf(new Date(new Date(sDate).setDate(new Date(sDate).getDate()+i)).getDay()) > -1) {
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
