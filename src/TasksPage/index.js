import React,{useState} from "react";
import Task from "./Task";
import mocks from "../mocks";

const TasksPage = () => {
    const [taskList,updateTaskList] = useState(mocks);
    return (
        <div className="FlexboxContainer">
            {
                taskList.map(taskData => <Task data = {taskData} key ={taskData.id}/>)            
            }
        </div>
    );
};

export default TasksPage;