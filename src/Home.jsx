import {useState, useEffect} from 'react';
import BlogList from './BlogList';
// shortcut sfc (stateless functional component)
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Welcome", body: "lorem ipsum...", author: "me", id:1},
        {title: "A day in the life of an Oreo Cookie Tester", body: "Lorem ipsum...", author: "Myself", id:"2"},
        {title: "I make 6 figures just playing with puppies all day", body: "Loerm ipsum...", author: "I", id:"3"}
    ]);

    const [name, setName] = useState('pikachu');

    const handleDelete = (id) => {
        // Creates a new array of blogs using evrything except the excluded id
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        alert("test");
    }, [name])

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="My Blogs" handleDelete={handleDelete}/>
           <button onClick={() => setName("charmander")}>Change Name</button>
           <p>{ name }</p>
        </div>
     );
}


 
export default Home;