import { useState } from 'react';
import img1 from './images/orange2.png';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {
    const [FirstName, setFirstname] = useState('');
    const [LastName, setLastname] = useState('');
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const[isPending, setIsPending] = useState(false);
    const[message1, setMessage1] = useState('');
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage1("");
        const validEmail = /[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]/;
        if(!validEmail.test(Username) || Username=="")
        {
            setMessage1("Email is not valid.");
        }
        const podaci = {FirstName,LastName,Username,Password };
        console.log(podaci);
        setIsPending(true);
      
        fetch('https://localhost:44378/api/Registers', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(podaci),
           
        })
        
    }
    return ( 
        
        <div className="main">
        <div className="pozadina">
            <img src={img1} alt="" />
            <div className="text">
                <p>Nice to see you again</p>
                <h1>Join Us</h1>
                <p>To keep connected <br></br>with us <br></br> create account</p>
            </div>
        </div>
        
        <div className='forma'>
            <h3>Register</h3>
            <form onSubmit={handleSubmit} >
                <span style={{fontSize:"12px", color:"red"}}>{message1}</span>
                <input type="text" id='ime'
                placeholder='First Name'
                 value={FirstName} onChange={(e)=> setFirstname(e.target.value)} />
                 <label hidden></label>
                <input type="text" id='prezime'
                placeholder='Last Name'
                 value={LastName} onChange={(e)=> setLastname(e.target.value)} />
                 <label hidden></label>
                <input type="text" id='adresa'
                placeholder='E-mail Address' required={true}
                 value={Username} onChange={(e)=> setUsername(e.target.value)} />
                 <label hidden></label>
                <input type="password" id='lozinka'
                 placeholder='Password'
                 value={Password}
                 onChange={(e)=> setPassword(e.target.value)} /> 
    
            </form>
            <div className="check">
                <input type="checkbox"   />
                <label htmlFor="">I read and agree to Terms & Conditions</label>
                </div>
             <button onClick={handleSubmit} style={{width:"200px", marginLeft:"150px", paddingLeft:"40px"}}>Create Account</button>
            
            <p style={{fontSize:"12px",marginTop:"18px"}}>Already have an account? <Link to={'/login'}>Sign in</Link></p>
     </div>
                
</div>

     );
}
 
export default Create;