<template>
    <div>
      <NavBar/>
      <NuxtPage class="page"/>
    </div>
  </template>
  
  <script lang="ts">
  import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
  
  </script>

  <style scoped>
  .page {
    margin-top: 60px;
  }
  </style>