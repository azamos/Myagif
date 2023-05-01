
import './App.css';
import Menu from './Menu';
import CONSTANTS from './Menu/appConstants';
import TasksPage from './TasksPage';
import { useState } from 'react';
import Week from './Sched/Week';

const {APP_PAGES,HOME_PAGE} = CONSTANTS;
const {TASK_PAGE,SCHED_PAGE,STATS_PAGE,SOCIAL_PAGE} = APP_PAGES;

function App() {
  const [activeComponent,setActiveComponent] = useState(HOME_PAGE);
  return (
    <div className="App">
      <Menu setActiveComponent = {setActiveComponent} activeComponent = {activeComponent}/>
      {activeComponent == CONSTANTS.APP_PAGES.TASK_PAGE && <TasksPage/>}
      {activeComponent==CONSTANTS.APP_PAGES.SCHED_PAGE && <Week/>}
    </div>
  );
}

export default App;
