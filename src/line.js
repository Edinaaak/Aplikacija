import img1 from './images/slusalica.png';
import img2 from './images/lok.png';
import img3 from './images/sat2.png';
import img4 from './images/log2.png';
import img5 from './images/face.png';
import img6 from './images/ig.png';
import img7 from './images/tw.png';
import { Link } from 'react-router-dom';
const Line = () => {
    return (
        <div className="Line">
            <div className="first">
                <img src={img1} alt="" />
                <p>Native Rental</p>
                <img src={img2} alt="" />
                <p>(381)808080</p>
                <img src={img3}style={{width:"15px", height: "15px"}} alt="" />
                <p>10:00-14:00|15:30-20:00</p>
                <img src={img4} style={{width:"18px", height: "14px"}} alt="" />
                <Link to={'/login'}><p>Login</p></Link>
            </div>
           <div className="second">
                <p>Follow us on:</p>
               <a href="https://www.facebook.com/"><img src={img5}  alt="" /></a>
               <a href="https://www.instagram.com/"><img src={img6} alt="" /></a>
               <a href="https://www.twitter.com/"><img src={img7} alt="" /></a>
           </div>
        </div>



      );
}
 
export default Line;