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


const Model=()=>{
    return(
    <div>
      <Navbar />
        <Container style={{width:'1350px'}}>
            <p className="text-muted" style={{marginTop:'2rem',marginBottom:'2rem',fontSize:'20px'}}> </p>        
            <h1 style={{color:'#797979',fontSize:'3rem'}}>3-I Model</h1>
    <div className="layoutlowerdivblog">
    {/* Latest articles */}
    <div className="mb-4 mt-4" style={{paddingBottom:'3%'}}>
        <p>Home > About Us > 3-I Model</p>
    </div>

    <Grid stackable columns={2}>
            <Grid.Column width={12}>
                <Coursecard t1="Problem" t2="The problems faced in deciding what to pursue are categorised as follows. If you are facing one of these, then this is the right place.

I do not know what I am good at and what I can do.
I know what I am good at but I don’t know the options available.
I know the options and my destination but I don’t know how to go there.
I am aware of everything but I fear or feel restricted from going there."/>
            </Grid.Column>
            <Grid.Column width={4}>
                <img style={{width:'100%',borderRadius:'12px'}} src="https://www.myways.in/visitor/img/services/1.jpg" />
            </Grid.Column>
    </Grid>


    <Grid stackable columns={3}>
            <Grid.Column>
                <SmallCard img="https://www.myways.in/visitor/ico/Exploration.png" second="true" t1="Finding'MyWays'" t2="The first step towards an effective career decision is knowing yourself at the best. Know about your skills, interests and core values which affect majority of your decisions taken sub-consciously."/>
            </Grid.Column>
            <Grid.Column>
                <SmallCard img="https://www.myways.in/visitor/ico/Exploration.png" second="true" t1="Finding'MyWays'" t2="The first step towards an effective career decision is knowing yourself at the best. Know about your skills, interests and core values which affect majority of your decisions taken sub-consciously."/>
            </Grid.Column>
            <Grid.Column>
                <SmallCard img="https://www.myways.in/visitor/ico/Exploration.png" second="true" t1="Finding'MyWays'" t2="The first step towards an effective career decision is knowing yourself at the best. Know about your skills, interests and core values which affect majority of your decisions taken sub-consciously."/>
            </Grid.Column>
    </Grid>

    <Grid stackable columns={2}>
            <Grid.Column width={12}>
            <Coursecard t1="Problem" t2="The problems faced in deciding what to pursue are categorised as follows. If you are facing one of these, then this is the right place.

I do not know what I am good at and what I can do.
I know what I am good at but I don’t know the options available.
I know the options and my destination but I don’t know how to go there.
I am aware of everything but I fear or feel restricted from going there."/>
                {/* <Coursecard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" /> */}
            </Grid.Column>
            <Grid.Column width={4}>
                <img style={{width:'100%',borderRadius:'12px'}} src="https://www.myways.in/visitor/img/services/2.png" />
            </Grid.Column>
    </Grid>


</div>
</Container>

{/* <Footer /> */}

    </div>

    )
}

export default Model;