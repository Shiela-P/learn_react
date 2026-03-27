import Navbar from './Navbar.jsx'
import Home from './Home'

function App() {
  // const title = "Hello there! Welcome to my React App.";
  // const coolThing = "cupckake";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* Woah! this is a variable */}
        {/* <h1>{title}</h1> */}

       
      </div>
    </div>
  )
}

export default App;
