<template>
  <div class="bg-secondary-color py-3 px-6 mx-4 mx-sm-9 reservation-card">
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
    <div>
      <p class="mb-2">姓名</p>
      <v-text-field
          outlined
          dense
          color="#A5bb94"
          background-color="#FFFFFF"
          height="55px"
          v-model="name"
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
      ></v-text-field>
    </div>
    <div>
      <v-btn
          color="#496146"
          dark
          block
          height="63"
          class="mb-9 reservation-confirm">
        確定預定日期
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservationCard",
  data: () => ({
    dates: [],
    name: '',
    phone: '',
  }),
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
  },
}
</script>

<style scoped>

</style>
