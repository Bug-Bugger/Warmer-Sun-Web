<template>
  <div id="reward">
    <div class="general-awards">
      <h2>Available Rewards</h2>
      <ul class="wrapper">
        <li v-for="reward in rewards" :key="reward.id">
          <h3>{{ reward.name }} - {{ reward.points }} points</h3>
          <img v-if="reward.img" :src="reward.img" alt="Reward Image" style="width: 100%;height: 100%;"/>
          <p style="font-size: 20px;">{{ reward.description }}</p>
          <button @click="redeemReward(reward)">Redeem</button>
        </li>
      </ul>
    </div>
    <div class="my-rewards">
      <h1>My Rewards</h1>
      <p>Points: {{ userStore.points }}</p>
      <button @click="redeemReward">Redeem Reward</button>
      <div v-if="showReward">
        <h2>Congratulations!</h2>
        <p>You have successfully redeemed a reward.</p>
      </div>
    </div>
  </div>
</template>

<script>
import backpack from '../assets/backpack.jpg';
import brownbottle from '../assets/BrownBottle.jpg';
import notebook from '../assets/notebook.jpg';
import pen from '../assets/pen.jpg';
import pendant from '../assets/pendant.jpg';
import cuteCat from '../assets/cat.png';


import { useUserStore } from "~/stores/userStore";
export default {
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
  data() {
    return {
      points: 100, // Replace with actual points value
      showReward: false,
      rewards: [
        {
          id: 1,
          name: "Backpack",
          points: 100,
          img: backpack,
          description: "This is a beautiful backpack. (eco-friendly)",
        },
        {
          id: 2,
          name: "Brown bottle",
          points: 50,
          img: brownbottle,
          description: "This is brown bottle.",
        },    
        {
          id: 3,
          name: "Cute Cat",
          points: 9999999,
          img: cuteCat,
          description: "This is a very cute cat just for viewing. (not for sale)",
        },
        {
          id: 4,
          name: "Notebook",
          points: 150,
          img: notebook,
          description: "You can use it to take notes. (maybe)",
        },
        {
          id: 5,
          name: "Pen",
          points: 150,
          img: pen,
          description: "Johnson's pen?",
        },
        {
          id: 6,
          name: "pendant",
          points: 150,
          img: pendant,
          description: "Frank's favorite pendant. (please don't buy or else Frank will be sad.)",
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

h2{
  font-size: 3rem;
}
h3{
  font-size: 2rem;
}

.general-awards {
  width: 1500px;
}

button {
  margin: 5px;
}
.show {
  display: block;
}
.hide {
  display: none;
}

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
	list-style: none;
  justify-content: space-around;
}


li {
  border: solid 1px black;
  width: 400px;
  margin-top: 40px;
  justify-content: space-evenly;
	display: flex;
  flex-direction: column;
	align-items: center;
	padding: 1.5rem;
	border-radius: 1rem;
}

</style>
