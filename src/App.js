
import './App.css';
import Menu from './Menu';
import CONSTANTS from './Menu/appConstants';
import TasksPage from './TasksPage';
import { useState } from 'react';
import Week from './Sched/Week';

const {APP_PAGES} = CONSTANTS;
const {TASK_PAGE,SCHED_PAGE,STATS_PAGE,SOCIAL_PAGE} = APP_PAGES;

const ActiveComponent = props => {
  const {component} = props;
  switch(component){
    case TASK_PAGE: return <TasksPage/>;
    default: return <p></p>;
  }
};

function App() {
  return (
    <div className="App">
      <Menu/>
      <Week/>
    </div>
  );
}

export default App;
