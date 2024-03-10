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
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          ></l-tile-layer>
          <l-marker
            v-if="gotLocation"
            :lat-lng="[userLocation.lat, userLocation.lng]"
          ></l-marker>
          <l-marker
            v-for="spot in spotLocation"
            :lat-lng="[spot.lat, spot.lng]"
          >
        <l-popup>
          <h1>Spot</h1>
          <p>Spot</p>
        </l-popup>
        </l-marker>
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
import { useUserStore } from "~/stores/userStore";
import axios from "axios";
//   import { icon } from "leaflet";
export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
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
      spotLocation: [],
      tileProvider: {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      },
      zoom: 18,
      gotLocation: false,
    };
  },
  mounted() {
    this.getUserPosition();
    this.getSpotLocation();
    
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

    async getSpotLocation() {
      axios.get(this.userStore.url + "/spot/").then((res) => {
        console.log(res.data.spots, "spot location");
        res.data.spots.forEach((spot) => {
          this.spotLocation.push({
            lat: spot.latitude,
            lng: spot.longitude,
            name: spot.name,
            park: spot.park,
          });
        });
        console.log(this.spotLocation, "spot location")
        console.log(this.spotLocation[0], "spot location lat")
      })

      ;
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