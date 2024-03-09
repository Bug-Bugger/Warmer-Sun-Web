<template>
    <div id="spot">
        <h1>Park 1</h1>
        <h2>Spot {{ spotId }}</h2>

        <div class="wrapper">
            <div class="activity-box">
            <h2>Activities History</h2>
            <div class="description">
                <h1>Name</h1>
                <h1>Description</h1>
                <h1>Verified?</h1>
            </div>
            <ul class="activity-list">
                <li class="activity" :key="activity.id" v-for="activity in activities">
                    <div class="activity-des">
                        <h3>{{activity.name}}</h3>
                    <p>{{activity.description}}</p>
                    </div>
                
                    <img v-if="activity.verified" src="../../../assets/checkmark.svg" alt="Activity 1">
                    <img v-else src="../../../assets/xmark.svg" alt="Activity 1">
                </li>
            </ul>
        </div>

        <div class="points-box">
            <h2 class="points-head">Points Category</h2>
            <p>Please select the actions you have accomplished</p>
            <div class="description">
                <h1>Description</h1>
                <h1>Points</h1>
            </div>
            <ul class="points-list">
                <li class="points" :key="point.id" v-for="point in points">
                    <!-- <h3>{{point.name}}</h3> -->
                    <p>{{point.description}}</p>
                    <p>{{ point.point }}</p>
                    <!-- <img v-if="point.verified" src="../../../assets/checkmark.svg" alt="Activity 1">
                    <img v-else src="../../../assets/xmark.svg" alt="Activity 1"> -->
                </li>
            </ul>

            <div class="Submit">
                <p>Upload images of your actions!</p>
                <input type="file" id="myFile" name="filename" multiple>
                <button @click="submit" >Submit!</button>
            </div>
        </div>
        </div>


    </div>
</template>

<script setup>
const route = useRoute()
let spotId = route.params.spot_id

console.log(spotId)

const activities = [
    { id: 1, name: 'Bob', description: 'Activity 1 description', verified: true },
    { id: 2, name: 'Alice', description: 'Activity 2 description', verified: false },
    { id: 3, name: 'Charlie', description: 'Activity 3 description', verified: true },
    { id: 4, name: 'David', description: 'Activity 4 description', verified: false },
]

const points = [
    { id: 1, name: 'Bob', description: 'Activity 1 description', point: 100 },
    { id: 2, name: 'Alice', description: 'Activity 2 description', point: 200 },
    { id: 3, name: 'Charlie', description: 'Activity 3 description', point: 300 },
    { id: 4, name: 'David', description: 'Activity 4 description', point: 400 },

]

const files = []



const submit = () => {
    // don't do this in production
    const file = document.getElementById('myFile').files
    console.log(file)
    files.push(file)
    console.log(files)
}
</script>

<style scoped>
#spot {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* margin: 20px; */
}

.wrapper {
    display: flex;
    flex-direction: row;
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
}

.points-list {
    list-style-type: none;
    border: 1px solid #000;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
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



/* img {
    width: 20px;
    height: 20px;

} */

/* .activity-list li {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 10px;
} */


</style>