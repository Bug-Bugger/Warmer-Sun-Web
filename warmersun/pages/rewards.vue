<template>
  <div id="reward">
    <div class="general-awards">
      <h2>Available Rewards</h2>
      <ul class="tilesWrap">
        <li v-for="reward in rewards" :key="reward.id">
          {{ reward.name }} - {{ reward.points }} points
          <img v-if="reward.img" :src="reward.img" alt="Reward Image" />
          <p>{{ reward.description }}</p>
          <button @click="redeemReward(reward)">Redeem</button>
        </li>
      </ul>
    </div>
    <div class="my-rewards">
      <h1>My Rewards</h1>
      <p>Points: {{ points }}</p>
      <button @click="redeemReward">Redeem Reward</button>
      <div v-if="showReward">
        <h2>Congratulations!</h2>
        <p>You have successfully redeemed a reward.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      points: 100, // Replace with actual points value
      showReward: false,
      rewards: [
        {
          id: 1,
          name: "Reward 1",
          points: 50,
          img: "https://via.placeholder.com/150",
          description: "This is a description of Reward 1.",
        },
        {
          id: 2,
          name: "Reward 2",
          points: 100,
          img: "https://via.placeholder.com/150",
          description: "This is a description of Reward 2.",
        },
        {
          id: 3,
          name: "Reward 3",
          points: 150,
          img: "https://via.placeholder.com/150",
          description: "This is a description of Reward 3.",
        },
        {
          id: 4,
          name: "Reward 4",
          points: 150,
          img: "https://via.placeholder.com/150",
          description: "This is a description of Reward 4.",
        },
      ],
    };
  },
  methods: {
    redeemReward(reward) {
      if (this.points >= reward.points) {
        this.points -= reward.points;
        this.showReward = true;
      } else {
        alert("Insufficient points to redeem this reward.");
      }
    },
  },
};
</script>

<style scoped>
#reward {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* margin: 20px; */
  margin-top: 135px; /* Adjust this value to match the height of your fixed navbar */
  padding: 20px;
}

.general-awards {
  width: 500px;
}

button {
  margin: 5px;
}
ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
ul li {
  width: 200px;
  height: 300px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.show {
  display: block;
}
.hide {
  display: none;
}
.tilesWrap {
  padding: 0;
  margin: 50px auto;
  list-style: none;
  text-align: center;
}
.tilesWrap li {
  display: inline-block;
  width: 20%;
  min-width: 200px;
  max-width: 200px;
  padding: 80px 20px 40px;
  position: relative;
  vertical-align: top;
  margin: 10px;
  font-family: "helvetica", san-serif;
  min-height: 25vh;
  background: #262a2b;
  border: 1px solid #252727;
  text-align: left;
}
.tilesWrap li h2 {
  font-size: 114px;
  margin: 0;
  position: absolute;
  opacity: 0.2;
  top: 50px;
  right: 10px;
  transition: all 0.3s ease-in-out;
}
.tilesWrap li h3 {
  font-size: 20px;
  color: #b7b7b7;
  margin-bottom: 5px;
}
.tilesWrap li p {
  font-size: 16px;
  line-height: 18px;
  color: #b7b7b7;
  margin-top: 5px;
}
.tilesWrap li button {
  background: transparent;
  border: 1px solid #b7b7b7;
  padding: 10px 20px;
  color: #b7b7b7;
  border-radius: 3px;
  position: relative;
  transition: all 0.3s ease-in-out;
  transform: translateY(-40px);
  opacity: 0;
  cursor: pointer;
  overflow: hidden;
}
.tilesWrap li:before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -1;
  background: #fff;
  transform: skew(2deg, 2deg);
}
.tilesWrap li:after {
  content: "";
  position: absolute;
  width: 40%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.02);
}
.tilesWrap li:nth-child(1):before {
  background: #c9ffbf;
  background: -webkit-linear-gradient(to right, #ffafbd, #c9ffbf);
  background: linear-gradient(to right, #ffafbd, #c9ffbf);
}
.tilesWrap li:nth-child(2):before {
  background: #f2709c;
  background: -webkit-linear-gradient(to right, #ff9472, #f2709c);
  background: linear-gradient(to right, #ff9472, #f2709c);
}
.tilesWrap li:nth-child(3):before {
  background: #c21500;
  background: -webkit-linear-gradient(to right, #ffc500, #c21500);
  background: linear-gradient(to right, #ffc500, #c21500);
}
.tilesWrap li:nth-child(4):before {
  background: #fc354c;
  background: -webkit-linear-gradient(to right, #0abfbc, #fc354c);
  background: linear-gradient(to right, #0abfbc, #fc354c);
}
</style>
