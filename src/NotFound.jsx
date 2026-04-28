import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops!</h2>
            <p>That page doesn't seem to be around right now...</p>
            <Link to="/">Want to go back to the homepage?</Link>
        </div>  
     );
}
 
export default NotFound;