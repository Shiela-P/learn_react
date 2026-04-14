import Navbar from './Navbar.jsx'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  // const title = "Hello there! Welcome to my React App.";
  // const coolThing = "cupckake";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
          {/* Woah! this is a variable */}
          {/* <h1>{title}</h1> */}

        
        </div>
      </div>
    </Router>
  );
}

export default App;
