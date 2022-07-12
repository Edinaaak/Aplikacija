
import BlogList from './Bloglist';
import Slike from './image';
import Footer from './footer';
import Kartice from './kartice';
import { useEffect, useState } from 'react';

const Home = () => {
    const [blogs, setBlogs]= useState(null);
    
    useEffect(() => {
      fetch('https://localhost:44378/api/Auotomobili')
      .then(res=> {
        return res.json();
       })
       .then(data => {
            setBlogs(data);
       });
    },[]);
    
    return ( 
        <div className="home">
         <Slike />
          {blogs && <BlogList blogs={blogs} />}
          <Kartice/>
          <Footer/>
        </div>
     );
    }
export default Home;