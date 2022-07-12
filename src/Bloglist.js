import { getByTitle } from "@testing-library/react";
import { Link } from "react-router-dom";
const BlogList 
 = ({blogs}) => {
    
    /*const blogs = props.blogS;
    const title = props.title;*/
    return (  
        <div className="blog-list">
                 
            {blogs.map((blog) => 
         (
                <div className="blog-preview" style={{ textAlign:"center"}} key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <div   className="auto" >
                         <img src={blog.nameofImage} /></div>
                        
                        <p>{blog.name}</p>
                        <div className="linija"></div>
                        <div className='cena'> 
                            <p style={{marginLeft:"3px"}}>Day from</p>
                            <p>{blog.price}</p>
                            
                        </div>
                        <button>Price</button>
                    </Link>
                    
                </div>
                
            ))}
            
        </div>
    );
}
 
export default BlogList;