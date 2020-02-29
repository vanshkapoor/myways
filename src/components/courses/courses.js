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


const Courses=()=>{
    return(
    <div>
      <Navbar />
        <Container style={{width:'1350px'}}>
            <p className="text-muted" style={{marginTop:'2rem',marginBottom:'2rem',fontSize:'20px'}}> </p>        
            <h1 style={{color:'#797979',fontSize:'3rem'}}>View Courses</h1>
    <div className="layoutlowerdivblog">
    {/* Latest articles */}
    <div className="mb-4 mt-4" style={{paddingBottom:'3%'}}>
        <h3>Select best courses from the most experienced developers in the domains</h3>
    </div>

    <Grid stackable columns={3}>
            <Grid.Column>
                <Coursecard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" />
            </Grid.Column>
            <Grid.Column>
                <Coursecard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" />
            </Grid.Column>
            <Grid.Column>
                <Coursecard img="https://itkit.io/wp-content/uploads/2019/08/Brandless-Hero.jpg" second="true" />
            </Grid.Column>
    </Grid>


    <Grid stackable columns={3}>
            <Grid.Column>
                <Coursecard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" />
            </Grid.Column>
            <Grid.Column>
                <Coursecard img="https://itkit.io/wp-content/uploads/2019/08/Brandless-Hero.jpg"  />
            </Grid.Column>
            <Grid.Column>
                <Coursecard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg"  />
            </Grid.Column>
    </Grid>

      
    <Grid stackable columns={3}>
            <Grid.Column>
                <Coursecard img="https://itkit.io/wp-content/uploads/2019/08/Brandless-Hero.jpg" second="true" />
            </Grid.Column>
            <Grid.Column>
                <Coursecard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg"  />
            </Grid.Column>
            <Grid.Column>
                <Coursecard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" />
            </Grid.Column>
    </Grid>



</div>
</Container>

<Footer />

    </div>

    )
}

export default Courses;