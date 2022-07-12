import img1 from './images/prva.png';
import img2 from './images/treca.png';
import img3 from './images/cetvrta.png';
import img4 from './images/peta.png';
const Kartice = () => {
    return ( 

        <div className="cards" style={{maxWidth:"1000px", height:"auto", margin:"auto"}}>
            <h1 style={{textAlign:"center", marginTop:"50px"}}>Best Rent a Car Deals</h1>
            <div className="card1" style={{display:"flex"}}>
                <div className='kar' >
                <img src={img1} alt="" />
                <h3>KE rent a car with free Baby – Child seat</h3>
                <p>We offer free of charge the first baby or child seat.
                     If you require more than one baby or child seat the extra cost is only 3€ per day.
                      We always offer the best Paros rent a car deals.</p>
                </div>
              <div className='kar'>
                    <img src={img2} alt="" />
                    <h3>Car Rental in EK with free Additional driver</h3>
                    <p>Choose our car rental Paros services and get the additional driver free of charge.
                         Hassle free rent a car in Paros with our rent a car Paros holiday services. We always care more.</p>
                </div>
                </div>
            <div className="card2" style={{display:"flex"}}>
                <div className='kar' >
                <img src={img3} alt="" />
                <h3>Free car rental EK delivery services</h3>
              <p>We always offer more. Our car rental Paros prices include free pick up and drop off all over Paros.
                 Free delivery in Paros Airport, Paros Port and your hotel. 
                 Antiparos car rental services come with a small extra cost.</p>
                 </div>
                 <div className='card4'>
                    <img src={img4} alt="" />
                    <h3>Rent a car in EK with no hidden costs</h3>
                    <p>We are the most reliable Paros car rental company.
                         Our prices are all inclusive and there are no hidden costs.
                          All prices are final and all the costs are more that clear. 
                          With us you can be sure that you will rent a car in Paros with no hidden costs.</p>
                 </div>
                 </div>
            </div>
        
     );
}
 
export default Kartice;