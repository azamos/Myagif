import React,{useState} from "react";
import ProgressBar from './ProgressBar';
import star from '../../star.png';
import mocks from "../../mocks";
import v from '../../v.png';

const Task = props => {
    const {data} = props;
    const [taskData,updateTaskData] = useState(mocks[0]);
    const { dueDate, severity, skill, difficulty,details,id,className,completionPercent} = data;
    return (
        <div key={id}
        className="Task">
            <div className= {`BottomBorder ${severity == "CRITICAL"? "Critical":"NonCritical"} ${completionPercent == 100 ? "AllClear":""}`}>
                Severity: {severity}{completionPercent==100?<img src={v} width={"30px"}/>:""}</div>
            <div className="BottomBorder">Due date:{dueDate.toString().split("GMT")[0]}</div>
            <div className="BottomBorder">Completion Status: {completionPercent}%
            <ProgressBar completionPercent = {completionPercent}/></div>
            <div className="BottomBorder">Class: {className}</div>
            <div className="BottomBorder">Skill: {skill}</div>
            <div className="BottomBorder">Difficulty: {difficulty}</div>
            <div>Details: {details}</div>
        </div>
    )
};


//<img src={star} width={"15px"}/>
export default Task;