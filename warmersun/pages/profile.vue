<template>
  <div class="box">
    <div class="profile">
      <div class="profile-header">
        <img class="avatar" src="../assets/home.png" alt="Profile Picture" />
        <h1 ref="username" class="name">{{ userStore.username }}</h1>
        <p class="bio">Your Bio</p>
      </div>
      <div class="profile-content">
        <!-- Add your content here -->
        <div class="content-wrapper">
          <div class="contributions">
            <h2>Contributions</h2>
            <p>Number of contributions: {{ userStore.actions.length }}</p>
            <p>Total points: {{ userStore.points }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
        <h1>All Actions done in the past</h1>
      <li v-for="item in userStore.actions">
        <p>{{ item.title }}</p>
        <p>{{ item.time }}</p>
      </li>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/userStore";

const userStore = useUserStore();
let username = ref("");

onMounted(async () => {
  console.log(userStore.user);
  const user = await userStore.getProfile();
  username = user.username;
  console.log(userStore.points);
  console.log(user.username);
});
</script>

<style scoped>
.profile {
  padding: 20px;
  box-shadow: rgb(5, 117, 16, 0.4) 5px 5px, rgba(5, 117, 16, 0.3) 10px 10px,
    rgba(5, 117, 16, 0.2) 15px 15px, rgba(5, 117, 16, 0.1) 20px 20px,
    rgba(5, 117, 16, 0.05) 25px 25px;
  height: 500px;
  width: 400px;
  border: 1px solid black;
  border-radius: 2rem;
  position: absolute;
  left: 100px;
  margin-top: 215px; /* Adjust this value to match the height of your fixed navbar */
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.profile-header {
  text-align: center;
  margin-bottom: 20px;
}

.avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}

.name {
  font-size: 24px;
  margin-top: 10px;
  color: #2ecc71;
}

.bio {
  font-size: 16px;
  color: #555;
}

.box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.list {
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  position: absolute;
  left: 625px;
  height: 500px;
  width: 800px;
  border: 1px solid black;
  border-radius: 2rem;
  margin-top: 215px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

li {
    display: flex;
    width: 75%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

/* Add your custom styles here */
</style>
