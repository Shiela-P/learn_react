// shortcut sfc (stateless functional component)
const Home = () => {
    const handleClick = () => {
        console.log('Wow... You just had to click it...')
    }

    const handleCLick2 = (name) =>{
        console.log("Good job, " + name + "!")
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Do not click</button>
            {/* How to pass an argument without immediately activating the function on page load */}
            <button onCLick={() => {handleCLick2("you")}} >Click here!</button>
        </div>
     );
}


 
export default Home;