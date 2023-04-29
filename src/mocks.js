class TaskData{
    constructor(dueDate,severity,completionPercent,className,skill,difficulty,details,id){
            this.dueDate = dueDate;
            this.severity = severity;
            this.completionPercent = completionPercent;
            this.className = className;
            this.skill = skill;
            this.difficulty = difficulty;
            this.details = details;
            this.id = id;
        }
}

const mockTask1 = new TaskData(new Date("05/24/2023,12:23"),"CRITICAL",75,"DevOps","NOC","HARD","Error 124214:b from the build","894KGS3GH367G9");
const mockTask2 = new TaskData(new Date("05/22/2023,10:30"),"LOW",10,"SoftArchitect","Algo","MEDIUM","Device a soln to problem 1a","843JJJFK98e7j");
const mockTask3 = new TaskData(new Date("05/02/2023,23:59"),"MEDIUM",50,"Cloud Engineer","Storage optimization","HARD","Migrate to REDIS DB","FGFG45SD3");

const mocks = [mockTask1,mockTask2,mockTask3];

export default mocks;