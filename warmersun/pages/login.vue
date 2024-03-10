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
  height: 100vh;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.login-form {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 8px;
}

.login-content h2 {
  margin-bottom: 2rem;
  color: #333;
  font-weight: 300;
}

.input-group {
  margin: 0.5rem 0;
  position: relative;
}

.input-group input {
  padding: 0.75rem;
  width: 100%;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color 0.2s ease-in-out;
}

.input-group input:focus {
  border-color: #04ceb0;
  box-shadow: 0 0 0 2px rgba(4, 206, 176, 0.2);
}

.submit-btn div {
  margin-top: 2rem;
  padding: 0.65rem 2rem;
  color: #fff;
  background-color: #04ceb0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn div:hover {
  background-color: #038c73;
}

.have-account p {
  margin-top: 1.5rem;
  color: #666;
}

.have-account a {
  color: #04ceb0;
  text-decoration: none;
}

.have-account a:hover {
  text-decoration: underline;
}
</style>
