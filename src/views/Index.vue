<template>
  <div>
    <Banner />
    <Rooms />
    <Footer />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Rooms from "../components/Rooms";
import Footer from "../components/Footer";

export default {
  name: "Index",
  components: {
    Banner,
    Rooms,
    Footer,
  }
}
</script>

<style scoped>

</style>
