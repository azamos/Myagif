import logo from './logo.png';
import './App.css';
import Menu from './Menu';
import CONSTANTS from './Menu/appConstants';
import TasksPage from './TasksPage';
import { useState } from 'react';

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
      <img src={logo} height={"300px"}/>
      <Menu/>
    </div>
  );
}

export default App;
