import React from "react";

const OrderToClass = {
    0:"TopLeft",
    1:"TopRight",
    2:"BottomLeft",
    3:"BottomRight"
};

const PageBtn = props => 
    <div id = {props.name} className={`PageBtn ${OrderToClass[props.order]} ${props.name == "TASK PAGE"? "TasksPage":""} ${props.name == "SCHED PAGE"?"SchedPage":""} ${props.name == "STATS PAGE"?"StatsPage":""} ${props.name=="SOCIAL PAGE"? "SocialPage":""}`}
     onClick={props.clickEventListener}><h1>{props.name}</h1></div>;

export default PageBtn;