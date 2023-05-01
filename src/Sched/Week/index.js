import React from "react";

const hours = new Array(24);
for(let i =0;i<hours.length;i++){
    hours[i] = `${i<10&&"0"||""}${i}:00`;
}
console.log(hours[5]);
const days = ["Sunday","Monday","Tuesday","Wedensday","Thursday","Friday","Saturday"];

const Week = props => 
    <table>
        <thead>
            <tr id="dayOfWeek">
                <th><h1></h1></th>
                <th><h1>Sunday</h1></th>
                <th><h1>Monday</h1></th>
                <th><h1>Tuesday</h1></th>
                <th><h1>Wedensday</h1></th>
                <th><h1>Thursday</h1></th>
                <th><h1>Friday</h1></th>
                <th><h1>Saturday</h1></th>
            </tr>
        </thead>
        <tbody>
            {hours.map(hour=>
            <tr key={hour}>
                <div>{hour}</div>
                {days.map(day=><td key={`${hour}#${day}`}><div className="TableSquare">{props.data||""}</div></td>)}
            </tr>)}
        </tbody>
    </table>

export default Week;