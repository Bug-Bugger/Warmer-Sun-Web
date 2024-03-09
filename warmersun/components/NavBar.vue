<template>
    <div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/pollution">Pollution Analysis</a></li>
                <li><a href="/map">Map</a></li>
                <li><a href="/rewards">Rewards</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    </div> 
</template>

<script>
export default {

}
</script>

<style>
    nav {
        background-color: #f8f9fa;
        padding: 1rem;
    }
    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    a:hover {
        color: #007bff;
    }

</style>