<template>
    <div>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <div v-html="htmlContent"></div>
    </div>
</template>

<script>
import axios from 'axios';
import { useUserStore} from '~/stores/userStore';
export default {
    setup() {
        const userStore = useUserStore();
        return {
            userStore
        }
    },
    data() {
        return {
            htmlContent: '<h1>HTML Contentdddd</h1>'
        }
    },
    mounted() {
        this.getHtmlContent();
    },
    methods: {
        async getHtmlContent() {
            console.log(this.userStore.url + "/analyze")
            let formData = new FormData();
            formData.append('file', );
            const response = axios.post(this.userStore.url + "/analyze", {
                
            });
            const data = await response.json();
            console.log(data);
            this.htmlContent = data[0].body;
        
    }
}}
</script>

<style scoped>


</style>