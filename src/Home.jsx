import {useState} from 'react';

// shortcut sfc (stateless functional component)
const Home = () => {
    const [food, setFood] = useState('cupcakes');
    const handleClick = () => {
       setFood('Chicken Wing');
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Do not click</button>
            <p>{food}</p>
            
        </div>
     );
}


 
export default Home;