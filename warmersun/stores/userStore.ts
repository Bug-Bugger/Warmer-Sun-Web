import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "nuxt/app";
import { createPinia } from "pinia";

const url = "http://34.162.44.216/api" 

export const useUserStore = defineStore("user", {

    state: () => ({
        user: null,
        token: null,
        url: "http://34.162.44.216/api",
    }),

    actions: {        
        async login(username: string, password: string) {
            try {
                const response = await axios.post(`${url}/verifyusers`, {
                    username,
                    password,
                },{
                    headers: {
                        'Content-Type': 'application/json',
                    }});

                console.log(response.data);
                // this.user = response.data.user;
                // this.token = response.data.token;
                // localStorage.setItem("token", this.token);
                return response.data;
            } catch (error) {
                return error.response.data;
            }
        },
        async logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem("token");
            const router = useRouter();
            router.push("/login");
        },
        async register(username: string, password: string) {
            try {
                const response = await axios.post(`${url}/users`, {
                    username,
                    password
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                this.user = response.data.user_id;
                console.log(response.data.user_id);
                console.log(this.user);
                const router = useRouter();
                router.push("/profile");
            } catch (error) {
                return error.response ? error.response.data : error;
            }
        },

        async getProfile() {
            try {
                const response = await axios.get(`${url}/users/${this.user}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log(response.data);
                return response.data;
            } catch (error) {
                return error.response ? error.response.data : error;
            }
        }


}}

)