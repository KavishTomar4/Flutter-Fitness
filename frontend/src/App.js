import logo from './logo.svg';
import './App.css';
import { BrowserRoute, Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/navbar.js';
import Yogacontainer from './Components/yogacontainer.js';
import Readypage from './Components/readypage.js';


function App() {
  return (
    <div>
        <Navbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path = "/">
                <Yogacontainer/>
              </Route>
            <Route exact path = "/readypage/:yoganame">
              <Readypage/>
            </Route>
          </Switch>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
