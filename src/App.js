import './App.css';
import { SideMenu } from './slide';
import { MainBox } from './MainBox';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className='page'>
        <Router>
          <MainBox/>
          <SideMenu/>
        </Router>
      </div>
    </div>
  );
}

export default App;
