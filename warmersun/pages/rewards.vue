<template>
    <div id="reward">
        <div>
            <h2>Available Rewards</h2>
            <ul>
                <li v-for="reward in rewards" :key="reward.id">
                    {{ reward.name }} - {{ reward.points }} points
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
                { id: 1, name: 'Reward 1', points: 50},
                { id: 2, name: 'Reward 2', points: 100 },
                { id: 3, name: 'Reward 3', points: 150 },
            ],
        };
    },
    methods: {
        redeemReward(reward) {
            if (this.points >= reward.points) {
                this.points -= reward.points;
                this.showReward = true;
            } else {
                alert('Insufficient points to redeem this reward.');
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
        width: 100vw;
    }



    button {
        margin: 5px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    ul li {
        margin-bottom: 5px;
    }
    .show {
        display: block;
    }
    .hide {
        display: none;
    }
</style>