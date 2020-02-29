import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'
import Navbar from '../Layout/Navbar'
import SmallCard from '../Utils/Card'
import Lcard from '../Utils/Lcard'
import Scard from '../Utils/Scard'
import Footer from '../Layout/Footer'
import Bigcard from '../Utils/Bigcard'

const Interviews = () => {


  return (
    <div>
      <Navbar />
        <Container style={{width:'1350px'}}>
            <p className="text-muted" style={{marginTop:'2rem',marginBottom:'6rem',fontSize:'20px'}}> </p>
        
        <div className='layoutupperdivint'>
            <Grid className="blogup" stackable columns={2} style={{marginTop:'-7rem'}}>
                <Grid.Column width={16}>

                    <Card style={{margin:'auto',width:'100%',boxShadow:'0px 6px 30px rgba(106,100,95,0.15)'}}>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                            <Card.Content style={{paddingTop:'11%'}}>
                                    <h1 className="divh1" style={{color:'#2C509F',padding:'0px 7px 0px 20px',fontSize:'3rem',fontWeight:'bold'}}>IT Leaders from around the Globe</h1>
                                    <Card.Description style={{paddingLeft:'18px',paddingBottom:'13%'}}>
                                          <Button style={{background:'smokewhite','borderRadius': '24px',color: '#2c509f'}}>Request to Interview</Button>        
                                    </Card.Description>
                                </Card.Content>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <img className="cardsimgbig" src="https://itkit.io/wp-content/uploads/2019/09/Screen-Shot-2019-09-11-at-10.23.22-AM.png"></img>
                                <img width="100%" src="https://itkit.io/wp-content/uploads/2019/11/IBM-think.jpg" />
                            </div>
                        </div>
                    </Card>

                </Grid.Column>
            </Grid>  
            <hr style={{marginTop:'6%'}}/>
        </div>
      
    <div className="layoutlowerdivblog">
    
    {/* Latest articles */}
    <div className="mb-4 mt-4">
          <Button style={{background:'#EA646B','borderRadius': '24px',color: 'white'}}>View all</Button>       
          <Button style={{background:'white','borderRadius': '24px',color: '#2c509f'}}>Interviews</Button>        
          <Button style={{background:'white','borderRadius': '24px',color: '#2c509f'}}>Podcasts</Button>        

    </div>

    <Grid stackable columns={3}>
            <Grid.Column>
                <SmallCard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" />
            </Grid.Column>
            <Grid.Column>
                <SmallCard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" />
            </Grid.Column>
            <Grid.Column>
                <SmallCard img="https://itkit.io/wp-content/uploads/2019/08/Brandless-Hero.jpg" second="true" />
            </Grid.Column>
    </Grid>


    <Grid stackable columns={3}>
            <Grid.Column>
                <SmallCard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" />
            </Grid.Column>
            <Grid.Column>
                <SmallCard img="https://itkit.io/wp-content/uploads/2019/08/Brandless-Hero.jpg"  />
            </Grid.Column>
            <Grid.Column>
                <SmallCard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg"  />
            </Grid.Column>
    </Grid>

      
    <Grid stackable columns={3}>
            <Grid.Column>
                <SmallCard img="https://itkit.io/wp-content/uploads/2019/08/Brandless-Hero.jpg" second="true" />
            </Grid.Column>
            <Grid.Column>
                <SmallCard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg"  />
            </Grid.Column>
            <Grid.Column>
                <SmallCard img="https://itkit.io/wp-content/uploads/2019/10/photo-1481887328591-3e277f9473dc.jpeg" second="true" />
            </Grid.Column>
    </Grid>



</div>
</Container>

        <Footer />

    </div>
  );
}

export default Interviews;
