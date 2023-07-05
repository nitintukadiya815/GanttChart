import { Gantt } from './node_modules/@bryntum/gantt/gantt.module.js';
import { ProjectModel } from './node_modules/@bryntum/gantt/gantt.module.js';
import { Button } from './node_modules/@bryntum/gantt/gantt.module.js';


const project = new ProjectModel({
    startDate : '2023-07-04',

    eventsData : [
        {
            id       : 1,
            name     : 'Setup web-server',
            inactive : false,
            expanded : true,
            children : [
                { id : 2, name : 'Install Apache', startDate : '2023-07-04', duration : 2, inactive : false },
                { id : 3, name : 'Configure firewall', startDate : '2023-07-11', duration : 3, inactive : true },
                { id : 4, name : 'Setup load balancer', startDate : '2023-07-04', duration : 3, inactive : false },
                { id : 5, name : 'Configure ports', startDate : '2023-07-04', duration : 2, inactive : true },
                { id : 6, name : 'Run tests', startDate : '2023-07-07', duration : 1, inactive : false }
            ]
        }
    ],

    dependenciesData : [
        { id : 2, from : 2, to : 6 },
        { id : 3, from : 3, to : 6 },
        { id : 4, from : 4, to : 6 },
        { id : 5, from : 5, to : 6 }
    ],
    
    

});

const gantt = new Gantt({
    appendTo : document.body,
    // onTaskClick() {
    //     console.log('Task is clicked');
    // },

    project,

    startDate : new Date(2023, 6, 4),
    endDate   : new Date(2023, 6, 18),

    height : 360,

    columns : [
        { type : 'name' },
        { type : 'startdate' },
        { type : 'inactive' },
        { type : 'duration' },
        { type : 'enddate' },
        { type : 'effort' },
        { type : 'percentdone' },
        { type : 'note' },
        

    ],
    listeners : {
        taskclick() {
            gantt.on('taskclick', () => console.log('click'));
            gantt.addListener('taskDblClick', () => console.log('dblclick'));
            
        }
    }
});

// Green button with text and icon
const button = new Button({
    appendTo : document.body,
    icon    : 'b-fa-plus-circle',
    text    : 'Add',
    color   : 'b-green',
    onClick : () => {}
});



