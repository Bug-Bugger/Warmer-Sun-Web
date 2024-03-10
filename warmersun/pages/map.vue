<template>
  <div style="height: 100vh; width: 100vw">
    <div id="map-wrap" style="height: 100vh">
      <client-only>
        <l-map
          :zoom="13"
          :center="[
            userLocation.lat || defaultLocation.lat,
            userLocation.lng || defaultLocation.lng,
          ]"
        >
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker
            v-if="gotLocation"
            :lat-lng="[userLocation.lat, userLocation.lng]"
          ></l-marker>
        </l-map>
      </client-only>
    </div>
    <div class="getLocation">
      <button @click="userLocationMarker">Get Location</button>
    </div>
  </div>
</template>
  <script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
//   import { icon } from "leaflet";
export default {
  components: { LMap, LTileLayer },
  props: {
    defaultLocation: {
      type: Object,
      default: () => ({
        lat: 8.9806,
        lng: 38.7578,
      }),
    },
  },
  data() {
    return {
      userLocation: {},
      parkLocation: [],
      tileProvider: {
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      },
      zoom: 18,
      gotLocation: false,
    };
  },
  mounted() {
    this.getUserPosition();
  },
  methods: {
    async getUserPosition() {
  // Check if a location is stored in localStorage
  const storedLocation = localStorage.getItem("userLocation");
  if (storedLocation){
    this.userLocation = JSON.parse(storedLocation);
    return;
  }

  // check if API is supported
  if (navigator.geolocation) {
    // get  geolocation
    navigator.geolocation.getCurrentPosition((pos) => {
      // set user location
      this.userLocation = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      localStorage.setItem("userLocation", JSON.stringify(this.userLocation));
    }, () => {
      // if user denies location
      alert("Please enable location");
      this.userLocation = {
        lat: 42.454323,
        lng: -76.475266,
      };
      localStorage.setItem("userLocation", JSON.stringify(this.userLocation));
    });
  }
  else {
    // if API is not supported
    alert("Geolocation is not supported by this browser.");
    this.userLocation = {
      lat: 42.454323,
      lng: -76.475266,
    };
    localStorage.setItem("userLocation", JSON.stringify(this.userLocation));
  }
},

    userLocationMarker() {
      console.log(this.userLocation, "user location");
      this.gotLocation = true;
        
      // return L.marker(this.userLocation, {
      //   icon: L.icon({
      //     iconUrl: require("leaflet/dist/images/marker-icon.png"),
      //     shadowUrl: require("leaflet/dist/images/marker-shadow.png")
      //   })
      // });
    },
  },
};
</script>

  <<style scoped>
    .getLocation {
        position: absolute;
        top: 500px;
        left: 50px;
        z-index: 1000;
    }
  </style>