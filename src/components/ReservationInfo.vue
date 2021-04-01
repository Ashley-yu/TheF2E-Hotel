<template>
  <div class="mx-4 mx-sm-9 reservation-info">
    <h3 class="mb-7 font-size-xl reservation-subtitle">
      預約房間:
      <br>
      {{ room.name }}
    </h3>
    <p>
      {{ room.description }}
    </p>
    <ul class="pa-0">
      <li class="mb-4">
        房間限制人數: {{
          room.descriptionShort.GuestMax === room.descriptionShort.GuestMin
              ? room.descriptionShort.GuestMin
              : `${room.descriptionShort.GuestMin}~${room.descriptionShort.GuestMax}`
        }}人
      </li>
      <li class="mb-4">
        房間大小: {{ room.descriptionShort.Footage }}平方公尺
      </li>
      <li class="mb-11">
        {{ roomContent }}
      </li>
    </ul>
    <div class="secondary primary-color font-weight-bold text-center py-3 px-15 mb-8">
      {{ roomAmenities }}
    </div>
    <div class="mx-6 mx-md-12 d-flex justify-space-between">
      <ul class="pa-0">
        <li>
          <div class="font-size-xs">checkIn 時間</div>
          <div class="font-size-lg">{{ room.checkInAndOut.checkInEarly }}~{{ room.checkInAndOut.checkInLate }}</div>
        </li>
        <li class="mt-3">
          <div class="font-size-xs">平日(一~四)</div>
          <div class="font-size-lg">${{ room.normalDayPrice }}</div>
        </li>
      </ul>
      <ul class="pa-0">
        <li>
          <div class="font-size-xs">最晚checkout 時間</div>
          <div class="font-size-lg">{{ room.checkInAndOut.checkOut }}</div>
        </li>
        <li class="mt-3">
          <div class="font-size-xs">假日(五~日)</div>
          <div class="font-size-lg">${{ room.holidayPrice }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservationInfo",
  props: {
    room: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    roomContent() {
      let beds = {};
      this.room.descriptionShort.Bed.forEach(function(item) {
        if(beds[item]) {
          beds[item] += 1;
        } else {
          beds[item] = 1;
        }
      });

      let str = "";
      Object.keys(beds).forEach(function(item) {
        str += `${beds[item]}張${item}床`;
      });

      if (this.room.descriptionShort["Private-Bath"] > 0) {
        str += `, ${this.room.descriptionShort["Private-Bath"]}間獨立衛浴`;
      }
      return str;
    },
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
}
</script>

<style scoped>

</style>
