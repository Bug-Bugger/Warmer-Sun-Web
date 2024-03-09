<template>
    <div>
        <!-- <h1>Index Page</h1> -->
        <h1>Upload a file</h1>
        <input type="file" @change="onFileChange" />
        <button @click="upload">Upload</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            file: null
        }
    },
    methods: {
        onFileChange(e) {
            this.file = e.target.files[0];
        },
        async upload() {
            const formData = new FormData();
            formData.append('image', this.file);
            console.log(formData);
            // await this.$axios.post('http://localhost:3000/upload', formData);
        }
    }
}
</script>

<style>

</style>