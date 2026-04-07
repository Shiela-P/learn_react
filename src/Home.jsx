import {useState} from 'react';
import BlogList from './BlogList';
// shortcut sfc (stateless functional component)
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Welcome", body: "lorem ipsum...", author: "me", id:1},
        {title: "A day in the life of an Oreo Cookie Tester", body: "Lorem ipsum...", author: "Myself", id:"2"},
        {title: "I make 6 figures just playing with puppies all day", body: "Loerm ipsum...", author: "I", id:"3"}
    ]);
    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="My Blogs"/>
           <BlogList blogs={blogs.filter((blog) => blog.id === "2" )} title="Blogs About Oreos"/>
        </div>
     );
}


 
export default Home;