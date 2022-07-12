import {useParams}  from "react-router-dom";
import useFetch from "./usefetch";
import { useState } from "react";
import Footer from './footer';
import img from './images/mercedes.png';

const BlogDetails = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);

    // ...
 
    const deletePost = (id) => {
       posts.delete(`${id}`);
       setPosts(
          posts.filter((posts) => {
             return posts.id !== id;
          })
       );
    };
 
    
 
    const {data: blog} = useFetch('https://localhost:44378/api/Auotomobili/'+id);
    return ( 
        <div className="blog-details">
             
            {blog && (
                <article>
                    <h2 style={{textAlign:"center", color:"black"}}>{blog.name}</h2>
                    <div className="prikaz">
                     <img src={require('./images/cars.jpg')}></img>
                    <form >
                        <input type="radio" name="" value={blog.day1} />
                        <label htmlFor="">1 Day / {blog.day1}</label><br></br>
                        <input type="radio" name="" value={blog.day2} />
                        <label htmlFor="">4-6 Days / {blog.day2}</label><br></br>
                        <input type="radio" name="" value={blog.day3} />
                        <label htmlFor="">6-12 Days / {blog.day3}</label><br></br>
                        <input type="radio" name="" value={blog.day4} />
                        <label htmlFor="">20+ Days / {blog.day4}</label><br></br>
                        <button style={{marginLeft:"110px"}} onClick={() =>deletePost(posts.id) }>Reserve</button>
                    </form>
                    </div>
                      <div style={{width:"100%", height:"2px", textAlign:"center", backgroundColor:"gray"}}></div>
                      <div className="feature" style={{display:"flex"}}>
                        <div className="osobine" style={{width:"500px",height:"300px"}}>
                            <h2>Model Features</h2><br />
                            
                            <label htmlFor="">Door: {blog.doors}</label><br /><br />
                            <label htmlFor="">Passenger: {blog.passengers}</label><br /><br />
                           <label htmlFor="">Engine: {blog.engine}</label> <br></br> <br />
                           <label htmlFor="">Gasoline: {blog.gasoline}</label> <br></br> <br />
                           <label htmlFor="">Gearbox: {blog.gearbox}</label> <br></br> <br />
                            <label htmlFor="">Air conditional </label><br /><br /> <br />
                        </div>
                        <div className="include">
                            <h2>Our prices include</h2><br />
                            <label htmlFor="">TPI Insurance</label><br /><br />
                            <label htmlFor="">Unlimited Kilometres</label><br /><br />
                            <label htmlFor="">Delivery & Pick-up</label><br /><br />
                            <label htmlFor="">Free Additional Driver</label><br /><br />
                            <label htmlFor="">1st Child seat</label><br /><br />
                            <label htmlFor="">24/7 roadside assistance</label><br /><br />
                            
                        </div>
                      </div>
                </article>
            )}
            <Footer/>
        </div>
     );
}
 
export default BlogDetails;