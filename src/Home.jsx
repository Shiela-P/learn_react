import {useState, useEffect} from 'react';
import BlogList from './BlogList';
// shortcut sfc (stateless functional component)
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('http://localhost:3000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error("could not fetch data");
                }
            return res.json()
            }) 
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            });
        }, [])

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending  && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title="My Blogs"/>}

        </div>
     );
}


 
export default Home;