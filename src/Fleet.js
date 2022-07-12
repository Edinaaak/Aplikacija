import BlogList from "./Bloglist";
import useFetch from "./usefetch";
import Footer from "./footer";
const Fleet = () => {
    const {data:blogs, isPending, error} = useFetch('https://localhost:44378/api/Auotomobili');
    return ( 
       <div className="modeli">
        <h1 style={{textAlign:"center", margin:"15px 0"}} >Our rental cars</h1>
        <div style={{ margin:"0px 450px", backgroundColor:"orangered",maxWidth:"100px", height:"2px"}}></div>
        <p style={{textAlign:"center", margin:"15px 0"}}>Choose any of ours featured cars</p>
        {error && <div>{error}</div>}
          {isPending && <div>Loading..</div>}
          {blogs && <BlogList blogs={blogs} />}
          <Footer/>
       </div>
     );
}
 
export default Fleet;