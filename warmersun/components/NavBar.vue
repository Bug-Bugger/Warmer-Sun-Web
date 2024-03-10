<template>
  <div>
    <nav style="background-color: rgba(94, 186, 242)">
      <ul>
        <li class="linkhome"><a none class="link" href="/">Home</a></li>
        <li class="linkprofile">
          <a class="link" href="/profile">Profile</a>
        </li>
        <li class="linkpollution">
          <a class="link" href="/pollution">Pollution Analysis</a>
        </li>
        <li class="linkmap"><a class="link" href="/map">Map</a></li>
        <li class="linkrewards"><a class="link" href="/rewards">Rewards</a></li>
        <li class="linklogin">
          <Button v-if="!userStore.isLoggedIn" class="save"><a href="/login">Login</a></Button>
          <Button v-else @click="userStore.logout" class="save"><a href="/">Logout</a></Button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore';
import { ref } from 'vue';

const userStore = useUserStore();

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav {
  text-align: center;
  background-color: #3eb489;
  overflow: hidden;
  position: fixed;
  z-index: 1001;
  height: 7rem;
  width: 100%;
  top: 0;
  left: 0;
  width: 100%;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
.linkhome,
.linkpollution,
.linkmap,
.linkrewards,
.linkprofile {
  margin-top: 30px;
}
.linklogin {
  margin-bottom: 50px;
}
a {
  text-decoration: none;
  font-size: 2rem;
  font-family: "Fredoka One", cursive;
  box-shadow: inset 0 0 0 0 #54b3d6;
  color: black;
  margin: 0 -0.25rem;

  padding: 0 0.25rem;
  transition: color 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
}

.save a {
  text-decoration: none;
}

.link:hover {
  box-shadow: inset 1000px 0 0 0 #54b3d6;
  color: white;
}
.save {
  size: 20px;
}
</style>
