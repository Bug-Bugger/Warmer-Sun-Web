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
      <p style="font-size:20px">Points: {{ userStore.points }}</p>
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
      if (this.userStore.points >= reward.points) {
        this.userStore.points -= reward.points;
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
img {
    height: 100px;
    width: 100px;
}

.general-awards {
  width: 1500px;
}

button {
  padding: 10px 15px; /* Increased padding for better spacing */
  font-size: 1rem; /* Standard font size for readability */
  color: white; /* Text color */
  background: linear-gradient(45deg, #5f2c82, #49a09d); /* Color gradient for a modern look */
  border: none; /* Remove the border */
  border-radius: 20px; /* Rounded borders for a softer look */
  cursor: pointer; /* Change cursor to pointer to indicate this is a clickable item */
  transition: background-color 0.3s, transform 0.1s, box-shadow 0.3s; /* Smooth transition for interactions */
  outline: none; /* Remove the outline to keep the design clean */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Box-shadow for depth */
}

button:hover {
  background: linear-gradient(45deg, #49a09d, #5f2c82); /* Invert the gradient on hover for an interactive effect */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Increase box-shadow size on hover */
}

button:active {
  transform: translateY(2px); /* Move the button down slightly when clicked */
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


button {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #459da0; /* A similar green shade */
  border: none;
  color: white;
  border-radius: 20px; /* Rounded edges */
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.1s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  outline: none;
}

 button:hover {
  background-color: #458ca0; /* A slightly darker green for hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Larger shadow for hover */
  transform: translateY(-2px); /* Slight raise effect */
}

</style>
