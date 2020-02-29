import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'
import Navbar from '../Layout/Navbar'
import SmallCard from '../Utils/Card'
import Lcard from '../Utils/Lcard'
import Scard from '../Utils/Scard'
import Footer from '../Layout/Footer'
import Bigcard from '../Utils/Bigcard'
import Jcard from '../Utils/Jcard'


const Jobs=()=>{
    return(
    <div>
      <Navbar />
        <Container style={{width:'1350px'}}>
            <p className="text-muted" style={{marginTop:'2rem',marginBottom:'2rem',fontSize:'20px'}}> </p>        
            <h1 style={{color:'#797979',fontSize:'3rem'}}>View Jobs</h1>
    <div className="layoutlowerdivblog">
    {/* Latest articles */}
    <div className="mb-4 mt-4">
          <Button style={{background:'#EA646B','borderRadius': '24px',color: 'white'}}>View all</Button>       
          <Button style={{background:'white','borderRadius': '24px',color: '#2c509f'}}>Software</Button>        
          <Button style={{background:'white','borderRadius': '24px',color: '#2c509f'}}>Commerce</Button>        

    </div>

    <Grid stackable columns={3}>
            <Grid.Column>
                <Jcard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" />
            </Grid.Column>
            <Grid.Column>
                <Jcard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" />
            </Grid.Column>
            <Grid.Column>
                <Jcard img="https://itkit.io/wp-content/uploads/2019/08/Brandless-Hero.jpg" second="true" />
            </Grid.Column>
    </Grid>


    <Grid stackable columns={3}>
            <Grid.Column>
                <Jcard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" />
            </Grid.Column>
            <Grid.Column>
                <Jcard img="https://itkit.io/wp-content/uploads/2019/08/Brandless-Hero.jpg"  />
            </Grid.Column>
            <Grid.Column>
                <Jcard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg"  />
            </Grid.Column>
    </Grid>

      
    <Grid stackable columns={3}>
            <Grid.Column>
                <Jcard img="https://itkit.io/wp-content/uploads/2019/08/Brandless-Hero.jpg" second="true" />
            </Grid.Column>
            <Grid.Column>
                <Jcard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg"  />
            </Grid.Column>
            <Grid.Column>
                <Jcard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" />
            </Grid.Column>
    </Grid>



</div>
</Container>

<Footer />

    </div>

    )
}

export default Jobs;