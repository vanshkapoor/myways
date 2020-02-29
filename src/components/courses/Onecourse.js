import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form, Rating} from 'semantic-ui-react'
import Navbar from '../Layout/Navbar'
import SmallCard from '../Utils/Card'
import Lcard from '../Utils/Lcard'
import Scard from '../Utils/Scard'
import Footer from '../Layout/Footer'
import Bigcard from '../Utils/Bigcard'
import Faq from './faq'

const Onecourse=()=>{
    return(
    <div>
      <Navbar />
        <Container style={{width:'1350px'}}>
            <div className="joblayoutlowerdiv">
                <Grid stackable columns={2} style={{width:'100%',marginTop:'4%'}}>
                    
                    <Grid.Column>
                        <span className='date dp' >
                                Web Development
                        </span>
                        <h1 style={{marginTop:'1%',color:'#3857a3'}}>The Web Developer Bootcamp</h1>
                        <h3 style={{marginTop:'0%'}}>The only course you need to learn web development - HTML, CSS, JS, Node, and More!</h3>
                        <Rating icon='user' defaultRating={3} maxRating={5} /> 52223 students
                        <p style={{color:'grey',paddingTop:'2%'}}>created by <strong>Rituraj sir</strong></p>
                        <div style={{color:'grey'}}>
                            <p><Icon name="world"></Icon>English</p>
                            <p><Icon name="envelope open"></Icon>No of students applied : 98638</p>
                        </div>
                        <h2 style={{marginTop:'2%'}}>Cost : $199</h2>
                        <h3 style={{marginTop:'-1%',color:'#797979'}}>Last date to Apply : 12-3-20</h3>
                    </Grid.Column>

                    <Grid.Column>    
    
                        <img width="46%" src="https://itkit.io/wp-content/uploads/2019/09/2BE35199-6B05-46A1-9609-41F742BDF001.jpg"></img>
                        <div>
                            <Button style={{marginTop: '3%',color: 'white',background: '#3857a3',borderRadius: '24px',width: '65%',marginBottom: '3%'}}>Apply to Job</Button>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
    <div className="layoutlowerdivblog">
    {/* Latest articles */}

    <Grid stackable columns={2}>
            <Grid.Column>
                <p style={{paddingTop:'5%'}}>
                    <h2>What you'll learn</h2>
                        <Icon name="check" style={{color:'grey',paddingTop:'1.5%'}}></Icon> Make REAL web applications using cutting-edge technologies <br />
                        <Icon name="check" style={{color:'grey',paddingTop:'1.5%'}}></Icon> Make REAL web applications using cutting-edge technologies <br />
                        <Icon name="check" style={{color:'grey',paddingTop:'1.5%'}}></Icon> Make REAL web applications using cutting-edge technologies <br />
                        <Icon name="check" style={{color:'grey',paddingTop:'1.5%'}}></Icon> Make REAL web applications using cutting-edge technologies <br />
                        <Icon name="check" style={{color:'grey',paddingTop:'1.5%'}}></Icon> Make REAL web applications using cutting-edge technologies <br />


                    <h3>Curriculum</h3>
                    <ul>
                        <li> Participate in developing new, user-facing features </li>
                        <li> Extend and improve product documentation </li>
                        <li> Work collaboratively with other arms of the engineering team that are co-located in other countries </li>
                        <li> Participate in developing new, user-facing features </li>
                        <li> Participate in developing new, user-facing features </li>
                        <li> Participate in developing new, user-facing features </li>
                        <li> Participate in developing new, user-facing features </li>
                    </ul>

                </p>
            </Grid.Column>
            <Grid.Column>
                <div style={{paddingTop:'6%'}}>
                    {/* <p><span style={{color:'grey'}}>RoleTeam : </span> Lead/Technical Lead</p>
                    <p> <span style={{color:'grey'}}>Industry Type : </span> IT-Software / Software Services</p>
                    <p> <span style={{color:'grey'}}>Functional Area : </span> IT Software - Application Programming, Maintenance</p>
                    <p> <span style={{color:'grey'}}>Employment Type : </span> Full Time, Permanent</p>
                    <p> <span style={{color:'grey'}}>Role Category : </span> Programming & Design</p> */}
                    <h3>FAQs :</h3>
                    <Faq />
                    <br />
 
                    <b>Key Skills</b><br /><br />
                    <div>
                            <Button style={{border: '2px solid #3857a3',color: '#3857a3',borderRadius:'24px'}}>CSS</Button>
                            <Button style={{border: '2px solid #3857a3',color: '#3857a3',borderRadius:'24px'}}>UI</Button>
                            <Button style={{border: '2px solid #3857a3',color: '#3857a3',borderRadius:'24px'}}>Javascript</Button>
                            <Button style={{border: '2px solid #3857a3',color: '#3857a3',borderRadius:'24px'}}>MySQL</Button>
                            <Button style={{border: '2px solid #3857a3',color: '#3857a3',borderRadius:'24px'}}>jQuery</Button>
                    </div>
                </div>
            </Grid.Column>
    </Grid>

</div>
</Container>

<Footer />

    </div>

    )
}

export default Onecourse;