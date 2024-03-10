<template>
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
                    <p>Number of contributions: 0</p>
                    <p>Total points: 0</p>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore';

const userStore = useUserStore();
let username = ref('');

onMounted(async() => {
    console.log(userStore.user);
    const user = await userStore.getProfile();
    username = user.username;
    console.log(user);
    console.log(user.username);
});
</script>

<style scoped>
.profile {
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.profile-header {
    text-align: center;
    margin-bottom: 20px;
    background-color: #f0f8f4;
}

.avatar {
    width: 150px;
    height: 150px;
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

/* Add your custom styles here */

</style>