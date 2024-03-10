<template>
  <div>
    <nav style="background-color: rgba(94, 186, 242)">
      <ul>
        <li class="linkhome"><a class="link" href="/">Home</a></li>
        <li class="linkprofile">
          <a class="link" href="/profile">Profile</a>
        </li>
        <li class="linkpollution">
          <a class="link" href="/pollution">Pollution Analysis</a>
        </li>
        <li class="linkmap"><a class="link" href="/map">Map</a></li>
        <li class="linkrewards"><a class="link" href="/rewards">Rewards</a></li>
        <li class="linklogin">
          <Button class="save"><a href="/login">Login</a></Button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
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
  height: 8.5rem;
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
  margin-top: 50px;
}
.linklogin {
  margin-bottom: 70px;
}
a {
  font-size: 2rem;
  font-family: "Fredoka One", cursive;
  box-shadow: inset 0 0 0 0 #54b3d6;
  color: black;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
  transition: color 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
}
.link:hover {
  box-shadow: inset 1000px 0 0 0 #54b3d6;
  color: white;
}
.save {
  size: 20px;
}
</style>
