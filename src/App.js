import logo from './logo.png';
import './App.css';
import AppContainer from './AppContainer';
import ProfileBtn from './ProfileBtn';
import TasksPage from './TasksPage';

function App() {
  return (
    <div className="App">
      <ProfileBtn/>
      <p>azamoszohar@gmail.com</p>
      <AppContainer/>
      <TasksPage/>
    </div>
  );
}

export default App;
