<template>
  <div>
    <div
      class="map"
      ref="googleMap"
      src="http://maps.googleapis.com/maps/api/js?key=AIzaSyAUV8wP2I6KjEI6Vvr3Q1RMoqckU88-kPk"
    ></div>
  </div>
</template>

<script>
import Loader from "@googlemaps/js-api-loader"

export default {
  data() {
    return {
      google: null,
      mapConfig: {
        center: {
          lat: 35.68944,
          lng: 139.69167,
        },
        zoom: 10,
      },
    }
  },
  async mounted() {
    this.google = await new Loader({
      apiKey: "AIzaSyAUV8wP2I6KjEI6Vvr3Q1RMoqckU88-kPk",
      version: "weekly",
    })
    this.initializeMap()
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
    },
  },
}
</script>

<style>
.map {
  width: 500px;
  height: 300px;
}
</style>
