import Navbar from './Navbar.jsx'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create.jsx';

function App() {
  // const title = "Hello there! Welcome to my React App.";
  // const coolThing = "cupckake";
  return (
    // Everything is warpped in the Router component
    <Router>
      <div className="App">
        {/* We want navbar on every page so it's not wrapped in switch */}
        <Navbar />
        <div className="content">
          {/* switch component allows me to have multiple "pages" with only one showing at a time */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
          </Switch>

        
        </div>
      </div>
    </Router>
  );
}

export default App;
