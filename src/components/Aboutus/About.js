import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'
import Navbar from '../Layout/Navbar'
import SmallCard from '../Utils/Card'
import Lcard from '../Utils/Lcard'
import Scard from '../Utils/Scard'
import Footer from '../Layout/Footer'
import Bigcard from '../Utils/Bigcard'

const About = () => {


  return (
    <div>
      <Navbar />
        <Container style={{width:'1350px'}}>
            <p className="text-muted" style={{marginTop:'2rem',marginBottom:'6rem',fontSize:'20px'}}> </p>
            {/* <iframe  src="https://www.youtube.com/embed/V75778a0-Po?autoplay=1&controls=0&loop=1&playlist=8HSr8BjcufM&amp;showinfo=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */}
        <div className='layoutupperdivblog'>
            <Grid className="blogup" stackable columns={2} style={{marginTop:'-7rem'}}>
                <Grid.Column width={16}>
                    <Bigcard />
                </Grid.Column>
            </Grid>  
            
            <hr style={{marginTop:'6%'}}/>
        </div>
      
    <div className="layoutlowerdivblog">

    {/* <div className="layoutupperdiv"> */}
<div className="text-center mb-4 mt-4 ">
<h1 style={{color:"rgb(245, 173, 0)",padding:'20px 0px 20px 0px',fontSize:'3rem'}}>Vision</h1>
</div>
<p style={{fontSize:'1.6rem',color:'grey'}}>
We, at MyWays, believe that every individual should make a well informed and independent career choice
</p>
{/* </div> */}
<hr />
<div className="text-center mb-4 mt-4 ">
<h1 style={{color:"rgb(245, 173, 0)",padding:'20px 0px 20px 0px',fontSize:'3rem'}}>Cause</h1>
</div>
<p style={{fontSize:'1.6rem',color:'grey'}}>
The uninformed career decision taken by most of the students lead to dissatisfaction in jobs and ultimately in life. The exceptionally good perception of few fields (like engineering) and colleges (like IITs) lead to a lot of societal pressure among students. This continues even in colleges wherein one decides internships in order to build a good CV, many times unintentionally, because this is what is common and 'secure' way to success.
</p>


</div>

<div style={{marginTop:'2rem',marginBottom:'2rem'}}>
    <p className="quote">“Successful career is a journey, not a destination. Let us travel together.”</p>
</div>

</Container>

        {/* <Footer /> */}

    </div>
  );
}

export default About;
