import React,{useState} from "react";
import ProgressBar from './ProgressBar';
import star from '../../star.png';
import mocks from "../../mocks";

const Task = props => {
    const {data} = props;
    const [taskData,updateTaskData] = useState(mocks[0]);
    const { dueDate, severity, skill, difficulty,details,id,className,completionPercent} = data;
    return (
        <div key={id}
        className="Task">
            <div className="BottomBorder Critical">Severity: {severity}</div>
            <div className="BottomBorder">Due date:{dueDate.toString().split("GMT")[0]}</div>
            <div className="BottomBorder">Completion Status: {completionPercent}%
            <ProgressBar completionPercent = {completionPercent}/></div>
            <div className="BottomBorder">Class: {className}</div>
            <div className="BottomBorder">Skill: {skill}</div>
            <div className="BottomBorder">Difficulty: {difficulty}<img src={star} width={"15px"}/><img src={star} width={"15px"}/><img src={star} width={"15px"}/></div>
            <div>Details: {details}</div>
        </div>
    )
};

export default Task;