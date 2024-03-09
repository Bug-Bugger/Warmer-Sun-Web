<template>
    <div class="home">
        <h1>Welcome to Warmer Sun!</h1>
        <p>Join us in making a positive impact on our parks and the environment.</p>
        <button @click="register">Register as a Volunteer</button>
    </div>
</template>

<script>
export default {
    methods: {
        register() {
            // Add logic to handle volunteer registration
        }
    }
}
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 100px;
}

h1 {
    font-size: 32px;
    margin-bottom: 20px;
}

p {
    font-size: 18px;
    margin-bottom: 40px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>