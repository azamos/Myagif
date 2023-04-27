import React,{useState} from "react";
import ProgressBar from './ProgressBar';

const mockData = {
    dueDate: new Date("05/24/2023,12:23"),
    severity: "CRITICAL",
    completionPercent: 75,
    className:"DevOps",
    skill:"NOC",
    difficulty:"HARD",
    details: "Error 124214:b from the build",
    id:"894KGS3GH367G9"
};

const Task = () => {
    const [taskData,updateTaskData] = useState(mockData);
    const { dueDate, severity, skill, difficulty,details,id,className} = taskData;
    const completionPercent = mockData.completionPercent;//WHY THE ISSUE?
    return (
        <div key={id}
        className="Task">
            <div className="BottomBorder">Severity: {severity}</div>
            <ProgressBar completionPercent = {completionPercent}/>
            <div className="BottomBorder">Due date:{dueDate.toString().split("GMT")[0]}</div>
            <div className="BottomBorder">Completion Status: {completionPercent}%</div>
            <div className="BottomBorder">Class: {className}</div>
            <div className="BottomBorder">Skill: {skill}</div>
            <div className="BottomBorder">Difficulty: {difficulty}</div>
            <div>Details: {details}</div>
        </div>
    )
};

export default Task;