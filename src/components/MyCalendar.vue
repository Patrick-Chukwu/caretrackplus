<template lang="en">
    <div>
        <FullCalendar class="calendar" :options="calendarOptions" />
    </div>
</template>
<script>
import { ref } from "vue";
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

export default {
    components: {
        FullCalendar
    },
    setup() {
        const calendarOptions = ref({
            plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
            initialView: 'dayGridMonth',
            events: [
                {title: 'Event 1', date: '2024-05-18'},
                {title: 'Event 2', date: '2024-05-19'},

            ],
            editable: true,
            selectable: true,
        });

        return {
            calendarOptions
        };
    }
    
};
</script>
<style lang="en">
/* @import '@fullcalendar/core/main.css';
@import '@fullcalendar/daygrid/main.css';
@import '@fullcalendar/timegrid/main.css'; */


</style>