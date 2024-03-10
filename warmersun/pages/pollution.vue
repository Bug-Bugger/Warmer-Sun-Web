<template>
  <div class="container">
    <div class="upload-section">
      <form @submit.prevent="submitFile">
        <input class="file-upload" type="file" @change="handleFileChange" accept=".csv" />
        <button type="submit">Upload</button>
      </form>
    </div>

    <!-- Only display map if htmlContent is not set -->
    <div v-if="!htmlContent" id="map"></div>

    <!-- Display iframe if htmlContent is set -->
    <iframe v-else class="display-iframe" :src="htmlContent"></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const selectedFile = ref(null);
const htmlContent = ref(''); // Ensure this is reactive

const handleFileChange = (event) => {
  selectedFile.value = event.target.files[0];
};

const submitFile = async () => {
  if (selectedFile.value) {
    const formData = new FormData();
    formData.append('file', selectedFile.value);

    try {
      const response = await axios.post('http://34.162.44.216/api/analyze', formData, {
        responseType: 'blob',
      });

      // Update htmlContent with the blob URL
      htmlContent.value = URL.createObjectURL(new Blob([response.data], { type: 'text/html' }));
    } catch (error) {
      console.error('Upload failed', error);
    }
  }
};

// Initialize the map
onMounted(() => {
  if (!htmlContent.value) {
    const map = L.map('map', {
      center: [40.730610, -74.066690],
      zoom: 13
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);
  }
});
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  background: url("../assets/background.jpg") no-repeat center center fixed;
}

.upload-section {
  flex: 0 0 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background: url("../assets/background.jpg") no-repeat center center fixed;
}

input {
  margin-top: 1rem;
}

input::file-selector-button {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #459da0; /* A similar green shade */
  border: none;
  color: white;
  border-radius: 20px; /* Rounded edges */
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.1s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  outline: none;
}

input::file-selector-button:hover {
  background-color: #458ca0; /* A slightly darker green for hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Larger shadow for hover */
  transform: translateY(-2px); /* Slight raise effect */
}

.upload-section button {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #459da0; /* A similar green shade */
  border: none;
  color: white;
  border-radius: 20px; /* Rounded edges */
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.1s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  outline: none;
}

.upload-section button:hover {
  background-color: #458ca0; /* A slightly darker green for hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Larger shadow for hover */
  transform: translateY(-2px); /* Slight raise effect */
}

.display-iframe {
  flex: 0 0 70%;
  height: 100vh;
  border: none;
}

#map {
  flex: 0 0 70%;
  height: 100vh;
}
</style>
