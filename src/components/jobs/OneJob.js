import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'
import Navbar from '../Layout/Navbar'
import SmallCard from '../Utils/Card'
import Lcard from '../Utils/Lcard'
import Scard from '../Utils/Scard'
import Footer from '../Layout/Footer'
import Bigcard from '../Utils/Bigcard'


const OneJob=()=>{
    return(
    <div>
      <Navbar />
        <Container style={{width:'1350px'}}>
            <div className="joblayoutlowerdiv">
                <Grid stackable columns={2} style={{width:'100%',marginTop:'4%'}}>
                    
                    <Grid.Column>
                        <div style={{display:'flex'}}>
                            <img width="100px" src="https://itkit.io/wp-content/uploads/2019/09/2BE35199-6B05-46A1-9609-41F742BDF001.jpg"></img>
                            <div style={{paddingLeft:'2%'}}>
                                <h1 style={{color:'#3857a3'}}>Company Name</h1>
                                <h2 style={{color:'#59606c'}}>Frontend Engineering Lead</h2>                
                            </div>
                        </div>
                    </Grid.Column>

                    <Grid.Column>    
                        <div style={{color:'grey'}}>
                            <p><Icon name="clock outline"></Icon>7 - 12 years</p>
                            <p><Icon name="lock"></Icon>Not Disclosed</p>
                            <p><Icon name="location arrow"></Icon>Mumbai</p>
                            <p><Icon name="envelope open"></Icon>No of openings : 1</p>
                        </div>
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
                    <h1>Job description</h1>
                    Square Panda is seeking a Front-End Engineering Lead at our Mumbai Office - India headquarters who will work with the internal Square Panda team (engineering, product, educational curriculum) and external engineering teams to develop, and extend our cloud-based services. Square Panda's Educational Cloud Platform delivers critical functionality to our innovative educational technology products.

                    The primary duties of the Lead include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and other product stakeholders to bridge the gap between graphical design and technical implementation. Additional duties might include developing internal tools, technical research projects and other duties as required. We have clients that will access the front-end using both traditional (desktop/laptop) browsers and browser on mobile devices.

                    The successful candidate will be strongly versed in software development processes. <br /><br />Previous experience with a shipping, consumer product is a big plus. The Square Panda team is fun-loving, quirky, and full of self-starters. We are looking for someone who values working independently but with the support of a skilled and diverse group of individuals. You should be motivated, can figure out what to do next when there is downtime, and want to have an impact on the world.

                    This position reports to the Director of Software Engineering, with important relationships to the Product Team.

                    <h3>Responsibilities :</h3>
                    <ul>
                        <li> Participate in developing new, user-facing features </li>
                        <li> Extend and improve product documentation </li>
                        <li> Work collaboratively with other arms of the engineering team that are co-located in other countries </li>
                        <li> Participate in developing new, user-facing features </li>
                        <li> Participate in developing new, user-facing features </li>
                        <li> Participate in developing new, user-facing features </li>
                        <li> Participate in developing new, user-facing features </li>

                    </ul>

                    <h3>Required Candidate profile</h3>

                    <b>MINIMUM QUALIFICATIONS :</b><br />
                    <ul>
                        <li> Participate in developing new, user-facing features </li>
                        <li> Extend and improve product documentation </li>
                        <li> Work collaboratively with other arms of the engineering team that are co-located in other countries </li>
                        <li> Participate in developing new, user-facing features </li>
                        <li> Participate in developing new, user-facing features </li>
                        <li> Participate in developing new, user-facing features </li>
                        <li> Participate in developing new, user-facing features </li>
                    </ul>

                    <h3>PREFERRED QUALIFICATIONS :</h3>

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
                    <p><span style={{color:'grey'}}>RoleTeam : </span> Lead/Technical Lead</p>
                    <p> <span style={{color:'grey'}}>Industry Type : </span> IT-Software / Software Services</p>
                    <p> <span style={{color:'grey'}}>Functional Area : </span> IT Software - Application Programming, Maintenance</p>
                    <p> <span style={{color:'grey'}}>Employment Type : </span> Full Time, Permanent</p>
                    <p> <span style={{color:'grey'}}>Role Category : </span> Programming & Design</p>
                    <br />
                    <b>Education</b><br /><br />
                    <p>UG :B.Tech/B.E. in Computers</p>
                    <p>PG :Any Postgraduate in Any Specialization</p>
                    <p>Doctorate :Any Doctorate in Any Specialization, Doctorate Not Required</p>
                    
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

export default OneJob;