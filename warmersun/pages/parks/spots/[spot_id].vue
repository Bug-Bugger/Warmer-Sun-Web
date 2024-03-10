<template>
    <div id="spot">
        <h1>Park 1</h1>
        <h2>Spot {{ spotId }}</h2>

        <div class="wrapper">
            <div class="activity-box">
            <h2>Activities History</h2>
            <div class="description">
                <h1>Group</h1>
                <h1>Description</h1>
                <h1>Verified?</h1>
            </div>
            <ul class="activity-list">
                <li class="activity" ref="activities" :key="activity.id" v-for="activity in actions">
                    <div class="activity-des">
                        <h3>{{activity.id}}</h3>
                    <p>{{activity.title}}</p>
                    </div>
                
                    <img v-if="activity.is_verified" src="../../../assets/checkmark.svg" alt="Activity 1">
                    <img v-else src="../../../assets/xmark.svg" alt="Activity 1">
                </li>
            </ul>
        </div>

        <div class="points-box">
            <h2 class="points-head">Points Category</h2>
            <p>Please select the actions you have accomplished</p>
            <!-- <div class="description">
                <h1>Description</h1>
                <h1>Points</h1>
            </div> -->
            <label for="cars">Choose an action:</label>

<select v-model="awardPoints" name="cars" id="cars">
  <option v-for="point in categories" :key="point.name" :value="[point.name, point.point]">{{ point.name }}, Points: {{ point.point }}</option>
</select> 
            
            <!-- Form group -->
            <!-- <div class="group">
                <label class="group">Group:</label>
                <div ref="groupMembers" v-for="groupMember in group" :key="groupMember.name" class="group-members">
                    <p>{{groupMember.name}}</p>
                </div>
                <input ref="member" type="text" id="group" name="group">
                <button @click="addMember">Add Member</button>
            </div> -->

            <div class="Submit">
        <!-- <p>Upload images of your actions!</p>
        <label for="myFile" class="custom-file-upload">
            Choose Files
        </label>
        <input type="file" id="myFile" name="filename" multiple>
        <span>{{ selectedFileName }}</span> -->
        <button @click="submit">Submit!</button>
    </div>
        </div>
        </div>


    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '~/stores/userStore';
import axios from 'axios'

const route = useRoute()
let spotId = route.params.spot_id
const userStore = useUserStore()

let awardPoints = ref([])
let member = ref('')

console.log(spotId)

let activities = ref([])
let categories = ref([])


const files = []

const actions = ref([])

const group = ref([])

let selected = false

const submit = () => {
    // don't do this in production
    console.log(awardPoints.value, group.value)
    const response = axios.post(userStore.url + `/spot/${spotId}/action`, {
        title: awardPoints.value[0],
        description: awardPoints.value[0],
        users_name: [userStore.username],
        categories: [awardPoints.value[0]],
        minute_duration: 90
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        console.log(res)
        return window.location.reload()
    })
    // const file = document.getElementById('myFile').files
    // console.log(file)
    // files.push(file)
    // // console.log(files)
    // console.log(groupMembers)
}

const addMember = () => {
    console.log("sdcsdc")
    const member = document.getElementById('group').value
    group.value.push({ name: member })
    // console.log(groupMembers)
}


const getActions =  async() => {
    const response = await axios.get(userStore.url + `/spot/${spotId}/action`).then((res) => {
        actions.value = res.data.actions
        console.log(res.data.actions, "actions")
    })
}

const getCategories =  async() => {
    const response = await axios.get(userStore.url + `/category`).then((res) => {
        categories.value = res.data.categories
        console.log(res.data.categories, "actions")
    })
}
onMounted(() => {
    getActions()
    getCategories()
})

console.log(actions.value)


</script>

<style scoped>
#spot {
    margin-top: 110px; /* Adjust this value to match the height of your fixed navbar */
  padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    background: url("../../../assets/background.jpg") no-repeat center center fixed;
    height: 100vh;
    /* margin: 20px; */
}

h1, h2 {
    /* Zero out default margins for a clean start */
    margin: 0;
    /* Add some vertical space between the title and subtitle */
    padding: 0.2em 0;
}

h1 {
    /* Large, standout size */
    font-size: 3rem;
    /* Slight letter spacing for a more refined look */
    letter-spacing: 1px;
    /* Bold weight */
    font-weight: bold;
    /* Color that fits with the overall theme */
    color: #333;
}

h2 {
    /* A size that complements the main title */
    font-size: 2rem;
    /* Regular weight for contrast */
    font-weight: 400;
    /* A subtler color than the main title */
    color: #555;
    /* Style consistent with other elements */
    font-family: 'Arial', sans-serif;
}

.wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

}
.group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
}

.activity-des {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    justify-content: space-around;

}

.description {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 0.5rem;
}

.activity-box {
    width:50%;
    background-color: white;
    border-radius: 0.5rem;
}

.activity-list {
    list-style-type: none;
    border: 1px solid #000;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.activity {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    border-bottom: 1px solid #000;
}

.points-box {
    width:40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
}

.points-list {
    list-style-type: none;
    border: 1px solid #000;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    /* justify-content: space-between; */
}

.points {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    border-bottom: 1px solid #000;
}


.points-box {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fff; /* Optional: change background color */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Optional: add shadow for depth */
    border-radius: 8px; /* Optional: rounded corners for the box */
    margin: 20px; /* Spacing around the box */
}

.points-head {
    margin-bottom: 1rem;
    font-size: 1.5em;
    font-weight: bold;
    color: #333; /* Darker text for better readability */
}

.select-action {
    margin: 10px 0;
}

.Submit {
    margin-top: 20px;
}

select {
    width: 100%;
    padding: 10px;
    margin-bottom: 1rem;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    color: #333;
}

input[type="file"] {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: #f8f8f8;
    width: calc(100% - 22px); /* Adjust width to account for padding and border */
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.1s ease;
}

button:hover {
    background-color: #45a049;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    transform: translateY(-2px);
}

/* Style to visually hide the actual file input and show only the label */
.custom-file-upload {
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 5px;
    font-size: 1rem;
    color: #333;
}

.custom-file-upload:hover {
    background-color: #e8e8e8;
}
</style>