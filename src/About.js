import rent from './images/rentacar.webp';
import why from './images/cu.jpg';
import Footer from './footer';
const About = () => {
    return ( 

        <div className="aboutus">
              <h1 style={{textAlign:"center", margin:"50px"}}>Welcome To Our Profile  <br></br>
          Learn more about EK Car Rental </h1>
          <div className='first'><img src={rent} alt="" />
          <div className='paragraf1'>
            <b>CR car rental</b> founded in 2006 can accommodate your vehicle needs,
             offering all types of cars, scooters and ATV’s in Paros and Antiparos areas.
              For over 12 years we are known for our superior customer service,
               our new and well-maintained vehicles and the variety and quality
                of extra services we offer at the lowest possible cost.
            </div>
          </div>

          <div className="second">
            <h1 style={{textAlign:"center", margin:"10px", marginTop:"20px"}}>Your safety first!</h1>
            <p>Service Stations are found allover Paros and Antiparos through number of specialized
               partner tour agencies and hotels. We strive to be always on time and provide our services 
               allover both islands at the shortest possible waiting time for you.
                We drop off and collect the vehicle of your choice at any point in Paros. 
                We do not charge delivery or pickup fees anywhere in Paros, including Paros Airport, 
                Port of Paros and main areas such as Parikia, Naousa, Lefkes, Aliki and many many more.
                 We also deliver and pick-up for free at any hotel in these areas.</p>
          </div>

          <div className='chooseus'>
            <div className='paragraf2'>
              <h3 style={{margin:"15px"}}>Why choose us?</h3>
              <p> &#8226; Economy cars (small, versatile, fuel-efficient, easy to drive everyday cars) </p>
              <p> &#8226;Mid-size hatchbacks (the ideal choice for more than two people)</p>
                  <p>&#8226;Automatic and Hybrid-automatic cars (Fuel efficient, smart, easy to drive smart cars with plenty of space)</p> 
                 <p> &#8226; People carriers (7-seater and 9-seater minibus options, so the whole pack can travel together) </p>

            </div>
            <img src={why} alt="" />
          </div>
          <Footer/>
        </div>
     );
}
 
export default About;