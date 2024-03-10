<template>
  <div class="home">
    <div class="mainpage">
      <h1 class="header">Welcome to Warmer Sun!</h1>
      <div class="quote-wrapper">
        <img src="../assets/earth.png" class="circle" alt="" />
        <blockquote class="text">
          <p>
            Join us in making a positive impact on our parks and the
            environment.
          </p>
          <footer>– Worseliba</footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    register() {
      // Add logic to handle volunteer registration
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home {
  background-size: cover;
  background-position: center;
  margin-top: 135px; /* Adjust this value to match the height of your fixed navbar */
  padding: 20px;
  text-align: center;
  /* margin-top: 100px; */
  background-image: url("../assets/city.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
}
h1 {
  font-size: 50px;
  font-family: "Papyrus", Times, serif;
  /* margin-bottom: 20px; */
}

p {
  margin-bottom: 40px;
}

.register {
  font-size: 40px;
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}

.quote-wrapper {
  width: 350px;
  height: 350px;
  position: relative;
  left: 30px;
  top: 150px;
}

.text {
  width: 100%;
  height: 100%;
  /*BLUE BG*/
  background: radial-gradient(
    ellipse at center,
    rgba(0, 128, 172, 1) 0%,
    rgba(0, 128, 172, 1) 70%,
    rgba(0, 128, 172, 0) 70.3%
  );
}

.text p {
  height: 100%;
  font-size: 30px;
  line-height: 1.25;
  padding: 0;
  text-align: center;
  font-style: italic;
  text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.3);
}

.text::before {
  content: "";
  width: 50%;
  height: 100%;
  float: left;
  shape-outside: polygon(
    0 0,
    98% 0,
    50% 6%,
    23.4% 17.3%,
    6% 32.6%,
    0 50%,
    6% 65.6%,
    23.4% 82.7%,
    50% 94%,
    98% 100%,
    0 100%
  );
  shape-margin: 7%;
}

.text p::before {
  content: "";
  width: 50%;
  height: 100%;
  float: right;
  shape-outside: polygon(
    2% 0%,
    100% 0%,
    100% 100%,
    2% 100%,
    50% 94%,
    76.6% 82.7%,
    94% 65.6%,
    100% 50%,
    94% 32.6%,
    76.6% 17.3%,
    50% 6%
  );
  shape-margin: 7%;
}

.quote-wrapper {
  text-align: center;
}

.quote-wrapper blockquote footer {
  width: 100%;
  position: absolute;
  bottom: 25px;
  font-size: 17px;
  text-align: center;
  font-style: italic;
  text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.3);
}

.quote-wrapper::before {
  content: "\201C";
  font-size: 270px;
  height: 82px;
  line-height: 0.78;
  line-height: 1;
  position: absolute;
  top: -48px;
  left: 0;
  z-index: 1;
  font-family: sans-serif, serif;
  color: black;
  opacity: 0.9;
}
.circle {
  background-image: url("../assets/recycle.png");
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  margin: auto;
  animation: circle 6s linear infinite;
}

@keyframes circle {
  0% {
    transform: rotate(0deg) translate(-175px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(-175px) rotate(-360deg);
  }
}
img {
  width: 100%;
  height: auto;
}
</style>
