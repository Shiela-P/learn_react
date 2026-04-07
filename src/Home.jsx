import {useState, useEffect} from 'react';
import BlogList from './BlogList';
// shortcut sfc (stateless functional component)
const Home = () => {
    const [blogs, setBlogs] = useState(null);


    const handleDelete = (id) => {
        // Creates a new array of blogs using evrything except the excluded id
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
           return res.json()
        }) 
        .then((data) => {
            setBlogs(data);
        })
    }, [])

    return ( 
        <div className="home">
          {blogs && <BlogList blogs={blogs} title="My Blogs" handleDelete={handleDelete}/>}

        </div>
     );
}


 
export default Home;