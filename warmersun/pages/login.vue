<template>
  <section class="login">
    <form class="login-form">
      <div class="login-content">
        <h2>Welcome Back!</h2>
        <div class="input-group">
          <input
            v-model="username"
            type="username"
            id="username"
            name="username"
            placeholder="Username"
          />
        </div>
        <div class="input-group">
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div class="submit-btn">
          <div @click="login" type="submit">Login!</div>
        </div>
        <div class="have-account">
          <p>Don't have an account? <a href="/register">Register!</a></p>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { useUserStore } from "~/stores/userStore";
import { ref } from "vue";

const userStore = useUserStore();

const username = ref("");
const password = ref("");

console.log(username, password);

const login = () => {
  userStore.login(username.value, password.value);
};
</script>

<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}
.login-form {
  /* display: flex;
        justify-content: center;
        align-items: center; */
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
}
.login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-group {
  margin: 1rem 0;
}

label {
  margin-bottom: 0.5rem;
}
input {
  padding: 0.5rem;
  /* width: 100%; */
  outline: none;
}
button {
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  /* border: 2px solid #04ceb0; */
  /* font-size: 1.5rem; */
  /* color: white;
 margin-left: 2rem; */
  /* font-family: 'Raleway', sans-serif;
  padding: 1rem 3rem; */
  padding: 0.5rem 2rem;
  cursor: pointer;
}

/* button:hover { */
/* color: aqua; */
/* } */
</style>
