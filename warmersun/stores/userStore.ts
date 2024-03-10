import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "nuxt/app";
import { createPinia } from "pinia";

const url = "http://34.162.44.216/api/" 

export const useUserStore = defineStore("user", {

    state: () => ({
        user: null,
        token: null,
    }),

    actions: {        
        async login(email: string, password: string) {
            try {
                const response = await axios.post("/api/auth/login", {
                    email,
                    password,
                });
                this.user = response.data.user;
                this.token = response.data.token;
                localStorage.setItem("token", this.token);
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
        async register(email: string, password: string) {
            try {
                const response = await axios.post(`${url}/users`, {
                    email,
                    password,
                });
                this.user = response.data.user;
                console.log(response.data);
                console.log(this.user);
                return response.data;
            } catch (error) {
                return error.response.data;
            }
        }


}}


)