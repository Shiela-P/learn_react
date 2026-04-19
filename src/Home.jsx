import BlogList from './BlogList';
import useFetch from './useFetch';
// shortcut sfc (stateless functional component)
const Home = () => {
   const {data: blogs, isPending, error} = useFetch('http://localhost:3000/blogs');


    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending  && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title="My Blogs"/>}

        </div>
     );
}


 
export default Home;