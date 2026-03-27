import './App.css'

function App() {
  const title = "Hello there! Welcome to my React App.";
  const coolThing = "cupckake";
  return (
    <div className="App">
      <div className="content">
        {/* Woah! this is a variable */}
        <h1>{title}</h1>
        <p>Today I'm really fascinated by {coolThing}s!</p>
        <p>I can put any javaScript between curly braces if it equates to a value! For example {3+8}.</p>
      </div>
    </div>
  )
}

export default App;
