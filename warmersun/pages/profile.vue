<template>
    <div class="profile">
        <h1>{{ user.name }}</h1>
        <p>{{ user.bio }}</p>
        <img :src="user.avatar" alt="User Avatar" />
        <!-- <ul>
            <li><strong>Email:</strong> {{ user.email }}</li>
            <li><strong>Location:</strong> {{ user.location }}</li>
            <li><strong>Website:</strong> <a :href="user.website">{{ user.website }}</a></li>
        </ul> -->

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "John Doe",
                bio: "Software Developer",
                avatar: "/path/to/avatar.jpg",
                email: "john.doe@example.com",
                location: "New York, USA",
                website: "https://example.com"
            }
        };
    }
};
</script>

<style scoped>
.profile {
    text-align: center;
    margin: 20px;
}

.profile img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.profile ul {
    list-style-type: none;
    padding: 0;
}

.profile ul li {
    margin-bottom: 5px;
}
</style>