import img from './images/pismo.png'
const Contact
 = () => {
    return (
        <div className="contactform" >
            <div className='contactimg' >
                
                <img src={img} alt="" />
                <p>If you have a question or just want to get in touch, use the form below. </p>
                </div>
            
                <div className='formC'>
                    <form action="">
                            <h1 style={{textAlign:"center"}}>Contact Us</h1><br /><br />
                            <input type="text" name="" id="" placeholder='Your Name' /> <br /> <br />
                            <input type="text" name="" id="" placeholder='User E-mail'/> <br /> <br />
                            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea> <br /> <br />
                            <button style={{margin:"auto", color:"white", marginBottom: "5px"}} >Send</button>
                         
                    </form>
                </div>
            
        </div>
      );
}
 
export default Contact
;