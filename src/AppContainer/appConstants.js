const HOME_PAGE = "HOME_PAGE";
const SCHED_PAGE = "SCHED_PAGE";
const TASK_PAGE = "TASKS_PAGE";
const STATS_PAGE = "STATS_PAGE";
const SOCIAL_PAGE = "SOCIAL_PAGE";

const APP_PAGES = {
    TASK_PAGE,SCHED_PAGE,STATS_PAGE,SOCIAL_PAGE
};

const PAGE_BTN_ORDER= {
    TASK_PAGE: 0,
    SCHED_PAGE:1,
    STATS_PAGE:2,
    SOCIAL_PAGE:3
}

const COMPLETION_STATUSES = {
    "Not Started":0,
    "Initial Stages":10,
    "Quarter":25,
    "Halfway":50,
    "Advanced":75,
    "Nearly Done":90,
    "Finished":100
};


const CONSTANTS = [APP_PAGES,PAGE_BTN_ORDER,COMPLETION_STATUSES];

export default CONSTANTS;