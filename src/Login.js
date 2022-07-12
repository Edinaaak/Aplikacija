import { useState } from 'react';
import img1 from './images/orange3.png';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();
    const rem = "Remember me";
    const handleSubmit = (e) => {
        e.preventDefault();
        const podaci = {email, password};
        setIsPending(true);
        fetch('', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(podaci)
        }).then (()=> {
            console.log("New data are added.")
            setIsPending(false);
            history.push('/')
        })
        
    }
    return ( 
        
        <div className="main">
                <div className="pozadina">
                    <img src={img1} alt="" />
                    <div className="text">
                        <p>Nice to see you again</p>
                        <h1>WELCOME BACK!</h1>
                        <p>You can sign in to access with your existing account</p>
                    </div>
                </div>
                <div className='forma'>
                    <h3>Login account</h3>
                    <form  >
                        <label htmlFor="">Name or e-mail</label>
                        <input type="text" 
                        placeholder='Enter your email...'
                         value={email} onChange={(e)=> setEmail(e.target.value)} />
                        <label >Password</label>
                        <input type="password"
                         placeholder='Enter your password'
                         value={password}
                         onChange={(e)=> setPassword(e.target.value)} /> 
            
                    </form>
                    <div className="check">
                        <input type="checkbox"   />
                        <label htmlFor="">Remember me</label>
                        </div>
                    {!isPending && <button onClick={handleSubmit}>Log in</button>}
                    {isPending && <button onClick={handleSubmit} disabled>Logging in</button>}
                    <p style={{fontSize:"12px",marginTop:"18px"}}>Do not have account? <Link to={'/create'}>Create it!</Link></p>
             </div>
            
        </div>
    
       
     );
}
 
export default Login;