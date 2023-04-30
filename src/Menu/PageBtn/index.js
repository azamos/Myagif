import react from "react";
import TasksPage from "../../TasksPage";
import CONSTANTS from "../appConstants";

const {APP_PAGES} = CONSTANTS;
const {TASK_PAGE,SCHED_PAGE,STATS_PAGE,SOCIAL_PAGE} = APP_PAGES;

const OrderToClass = {
    0:"TopLeft",
    1:"TopRight",
    2:"BottomLeft",
    3:"BottomRight"
};
/*
const taskPageEventListener = e => <TasksPage/>;

const eventListenerSelector = pageName => {
    const name= pageName.split(" ").join("_");
    const {APP_PAGES} = CONSTANTS;
    const {TASK_PAGE,SCHED_PAGE,STATS_PAGE,SOCIAL_PAGE} = APP_PAGES;
    const placeholder = e => console.log(e);
    let eventListener = placeholder;
    switch(name){
        case TASK_PAGE: return <TASK_PAGE/>; 
        default: eventListener = placeholder;
        break;
    }
    return eventListener;
}*/

const PageBtn = props =>
        <div id = {props.name} className={`PageBtn ${OrderToClass[props.order]} ${props.name == "TASK PAGE"? "TasksPage":""} ${props.name == "SCHED PAGE"?"SchedPage":""} ${props.name == "STATS PAGE"?"StatsPage":""} ${props.name=="SOCIAL PAGE"? "SocialPage":""}`}
        onClick={props.onClickEventListener}><h1>{props.name}</h1></div>;

export default PageBtn;