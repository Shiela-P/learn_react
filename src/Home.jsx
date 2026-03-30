import {useState} from 'react';

// shortcut sfc (stateless functional component)
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Welcome", body: "lorem ipsum...", author: "me", id:1},
        {title: "A day in the life of an Oreo Cookie Tester", body: "Lorem ipsum...", author: "Myself", id:"2"},
        {title: "I make 6 figures just playing with puppies all day", body: "Loerm ipsum...", author: "I", id:"3"}
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}


 
export default Home;