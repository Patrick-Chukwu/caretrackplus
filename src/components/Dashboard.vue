<template lang="en">
    <div :class="dashboard">
        <h2>Overview</h2>
        <div class="row dashboard_boxes">
        <div class="row dashboard_box">
            <img src="" alt="icon">
            <div class="column dashboard_box-right">
            <h3>Total Doctor</h3>
            <div class="row down">
                <h2>56</h2>
                <p>20</p>
                <p>10</p>

            </div>
        </div>
        </div>
        <!-- second -->
        <div class="row dashboard_box">
            <img src="" alt="icon">
            <div class="column dashboard_box-right">
            <h3>Total Nurse</h3>
            <div class="row down">
                <h2>90</h2>
                <!-- <p>20</p> -->
                <p>10</p>

            </div>
        </div>
        </div>
        <!-- third -->
        <div class="row dashboard_box">
            <img src="" alt="icon">
            <div class="column dashboard_box-right">
            <h3>Total Patient</h3>
            <div class="row down">
                <h2>200</h2>
                <!-- <p>20</p>
                <p>10</p> -->

            </div>
        </div>
        </div>
        <!-- four -->
        <div class="row dashboard_box">
            <img src="" alt="icon">
            <div class="column dashboard_box-right">
            <h3>Total Beds</h3>
            <div class="row down">
                <h2>108</h2>
                <p>57</p>
                <p>08</p>

            </div>
        </div>
        </div>
        </div>

        <div>
        </div>
        <MyCalendar />
    </div>
</template>
<script>
import MyCalendar from './MyCalendar.vue';

export default {
    name: 'DashboardComponent',
    components: {
        MyCalendar
    }

};
</script>
<style lang="">
    
</style>