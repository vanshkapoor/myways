import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'
import Navbar from '../Layout/Navbar'
import SmallCard from '../Utils/Card'
import Lcard from '../Utils/Lcard'
import Scard from '../Utils/Scard'
import Footer from '../Layout/Footer'
import Bigcard from '../Utils/Bigcard'
import Coursecard from '../Utils/Coursecard'


const Services=()=>{
    return(
    <div>
      <Navbar />
        <Container style={{width:'1350px'}}>
            <p className="text-muted" style={{marginTop:'2rem',marginBottom:'2rem',fontSize:'20px'}}> </p>        
            {/* <h1 style={{color:'#797979',fontSize:'3rem'}}>Services</h1> */}
    <div className="layoutlowerdivservices">
    {/* Latest articles */}
    <div className="mb-4 mt-4" style={{paddingBottom:'3%'}}>
        <p>Home > Services</p>
    </div>

    <Grid stackable columns={2}>
            <Grid.Column >
                <h1 style={{color:'#797979',fontSize:'3rem',textAlign:'center'}}>For Student</h1>
                <div  className="iconsserv"><Icon name="student" /></div>
                <Coursecard  t2="For the students currently in class 9th-12th. Whether it is about selecting your stream while going to class 11th or about selecting colleges after class 12th, we have got you covered. Highly experienced Counselors, personalised attention and 10-Dimensional analysis is what you would get only at MyWays."/>
            </Grid.Column>
            <Grid.Column>
                <h1 style={{color:'#797979',fontSize:'3rem',textAlign:'center'}}>For Recruiters</h1>
                <div  className="iconsserv"><Icon name="users" /></div>
                <Coursecard  t2="Having recognized the need of career guidance even in college or when you are working, MyWays takes care that you are not left out with improper direction. With users from various Tier-1 colleges and areas of study, the MyPsychometric Report gains popularity due to its focus on workplace parameters which are otherwise ignored."/>
            </Grid.Column>
    </Grid>



</div>
    </Container>
</div>

    )
}

export default Services;