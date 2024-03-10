import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "nuxt/app";
import { createPinia } from "pinia";

const url = "http://34.162.44.216/api" 

export const useUserStore = defineStore("user", {

    state: () => ({
        user: null,
        username : "",
        points: 0,
        actions:[], 
        isLoggedIn: false,
        url: "http://34.162.44.216/api",
    }),
    persist: [
		{
			storage: persistedState.sessionStorage,
		},
	],

    actions: {        
        async login(username: string, password: string) {
            try {
                const response = await axios.post(`${url}/users/verify`, {
                    username,
                    password,
                },{
                    headers: {
                        'Content-Type': 'application/json',
                    }});

                console.log(response.data);

                if (response.data.verify === true) {
                    this.user = response.data.user_id;
                    console.log(this.user);
                    this.isLoggedIn = true;
                    const router = useRouter();
                    router.push("/profile");
                } else {
                    alert("Invalid username or password")
                }
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
            this.isLoggedIn = false;
            this.username = "";
            this.points = 0;
            this.actions = [];
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("isLoggedIn");
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("points");
            sessionStorage.removeItem("actions");
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
                this.isLoggedIn = true;
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
                this.username = response.data.username;
                this.points = response.data.points;
                this.actions = response.data.actions;
                console.log(this.points);
                return response.data;
            } catch (error) {
                return error.response ? error.response.data : error;
            }
        }


}}

)