import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'
import Navbar from './Layout/Navbar'
import SmallCard from './Utils/Card'
import Lcard from './Utils/Lcard'
import Scard from './Utils/Scard'
import Footer from './Layout/Footer'
import '../App.css'
import Simgcard from './Utils/SimgCard'

const LandingPage = () => {


  return (
    <div>
      <Navbar />
      
        <div style={{position:'relative'}}>
            <img src="https://www.myways.in/visitor/img/intro-background.jpg" width="100%" />
            <div className="landingimgdiv">
                <h2 className="landingh2">Welcome to <img src="https://www.myways.in/visitor/img/logo/logo%20home.png" width="300"></img></h2>
                <Button style={{fontSize:'1.6rem',backgroundColor:'#ffd570',borderRadius:'24px'}}>Get Started</Button>
            </div>
        </div>

        <Container style={{width:'1350px'}}>
        <p className="text-muted" style={{textAlign:'center',marginTop:'4rem',marginBottom:'6rem',fontSize:'2rem'}}>“Successful career is a journey, not a destination. Let us travel together.” </p>
        



        <div className='layoutupperdiv'>
          <Grid style={{marginBottom:'3rem',marginTop:'-4rem'}} stackable columns={3}>
            <Grid.Column>
                  <SmallCard 
                  img="https://www.myways.in/visitor/ico/analysis.png"
                //   img="https://www.myways.in/visitor/ico/Exploration.png" 
                  second="true" t1="Personalized Career Planning" t2="We use the power of Artificial Intelligence to perform in-depth analysis on student's skill-set, asiprations, psychometrics, interests and experienced people similar to her, to create personalized learning journey"/>
            </Grid.Column>
            <Grid.Column>
                   <SmallCard 
                   img="https://www.myways.in/visitor/ico/upskill.png"
                //    img="https://www.myways.in/visitor/ico/Network.png" 
                   t1="Filling Gaps via Upskilling" t2="Next, the employability gaps are identified and the best courses and industrial training across various platforms are provided to create a personalized learning and upskilling plan to become industry-ready."/>
            </Grid.Column>
            <Grid.Column>
                    <SmallCard 
                    img="https://www.myways.in/visitor/ico/employed.png"
                    // img="https://www.myways.in/visitor/ico/Knowing%20yourself.png"
                    second="true" t1="Getting Career-Ready & Employable" t2="Furthermore, the student is connected with the companies with internship profiles best-fit for her career to get some real industry exposure and experience in order to be career-ready and employable." />
            </Grid.Column>
          </Grid>

      </div>
      
      <div className="layoutlowerdiv">
{/* Latest articles */}
<div className="text-center mb-4 mt-4">
<h1 style={{color:"rgb(245, 173, 0)",padding:'20px 0px 20px 0px',fontSize:'3rem'}}>Create Highly Personalized Career Plans</h1>
</div>
{/* <Grid> */}
    {/* <Grid.Column width={16}> */}
    <Grid stackable columns={3} style={{marginTop:'5%',marginBottom:'5%'}}>
          <Grid.Column style={{borderLeft: '7px solid #FF9800'}}>
              <p style={{fontSize:'1.3rem'}}>Career-Profiling with a 4-Dimensional holistic analysis of the student using Artificial Intelligence and Psychometrics.</p>
          </Grid.Column>
          <Grid.Column style={{borderLeft: '7px solid #FF9800'}}>
              <p style={{fontSize:'1.3rem'}}>Creation of Career Plans aligning with skills, personality, aspirations & practicality.</p>
          </Grid.Column>
          <Grid.Column style={{borderLeft: '7px solid #FF9800'}}>
              <p style={{fontSize:'1.3rem'}}>Customized statistics about the job market in the selected career field(s) and suggestions on what next steps to take.</p>
          </Grid.Column>
    </Grid>  
    {/* </Grid.Column> */}
  {/* </Grid> */}

  <div className="text-center mb-4 mt-4">
<h1 style={{color:"rgb(245, 173, 0)",padding:'20px 0px 20px 0px',fontSize:'3rem'}}>What does the Psychometrics Analysis contain?</h1>
</div>
{/* <Grid> */}
    {/* <Grid.Column width={16}> */}
<ul style={{fontSize:'1.4rem',color:'grey',lineHeight:'2rem'}}>
    <li>Explore various layers of yourself like Personality, Values, Work Style, Interests, Learning Styles and Skills</li>
    <li>Discover your best-fit work environment and your workplace-fit</li>
    <li>Career Planning aligning with your parameters of 'Happiness'</li>
    <li>Next go and explore these career options through internships, events, workshops provided on MyWays Portal itself</li>
    <li>Being self aware, prepare well to face the industry interviews and differentiate yourself from others</li>
    {/* <li>Explore various layers of yourself like Personality, Values, Work Style, Interests, Learning Styles and Skills</li> */}
</ul>

<div className="text-center" style={{paddingTop:'6rem',paddingBottom:'2rem'}}>
          <button className="btns">Personalise My journey</button>
</div>

{/* Job Board */}
<div className="layoutupperdiv">
<div className="text-center mb-4 mt-4 ">
<h1 style={{color:"rgb(245, 173, 0)",padding:'20px 0px 20px 0px',fontSize:'3rem'}}>Try out your choices hand on</h1>
</div>
<p style={{fontSize:'1.6rem',color:'grey'}}>
Explore right kind of opportunities through internships and take a flavour of various careers before actually selecting one. Intern with various companies and take a step ahead in finding the right opportunities for yourself.
</p>
<div className="text-center" style={{paddingTop:'6rem',paddingBottom:'2rem'}}>
          <button className="btns">Explore Opportunities</button>
</div>
</div>

<div className="text-center mb-4 mt-4">
<h1 style={{color:"rgb(245, 173, 0)",padding:'20px 0px 20px 0px',fontSize:'3rem'}}>Seek Career Mentorship</h1>
</div>
<p style={{fontSize:'1.6rem',color:'grey'}}>
Get connected to a robust peer-mentor network, take mentorship from college seniors and from the renowned career counsellors and mentors for additional help in your chosen career stream. (Currently only available for School students)
</p>
<div className="text-center" style={{paddingTop:'6rem',paddingBottom:'2rem'}}>
          <button className="btns">Become a mentor
          </button>
</div>

<div className="text-center mb-4 mt-4">
<h1 style={{color:"rgb(245, 173, 0)",padding:'20px 0px 20px 0px',fontSize:'3rem'}}>Our Clients and Collaborations</h1>
</div>
<Grid stackable columns={2}>
          <Grid.Column>
              <Scard img="https://www.myways.in/visitor/img/Collab/joshtalks.png" text="Josh Talks"/>
          </Grid.Column>
          <Grid.Column>
              <Scard img="https://www.myways.in/visitor/img/Collab/vitc.png" text="VIT chennai"/>
          </Grid.Column>
</Grid>
<Grid stackable columns={2}>
          <Grid.Column>
              <Scard img="https://www.myways.in/visitor/img/Collab/iiitd.png" text="IIIT Delhi"/>
          </Grid.Column>
          <Grid.Column>
              <Scard img="https://www.myways.in/visitor/img/Collab/bsw_logo.png" text="BSW"/>
          </Grid.Column>
</Grid>
<Grid stackable columns={2}>
          <Grid.Column>
              <Scard img="https://www.myways.in/visitor/img/Collab/msit.png" text="MSIT "/>
          </Grid.Column>
          <Grid.Column>
              <Scard img="https://www.myways.in/visitor/img/Collab/nss.png" text="NSS"/>
          </Grid.Column>
</Grid>

<div className="text-center mb-4 mt-4">
<h1 style={{color:"rgb(245, 173, 0)",padding:'20px 0px 20px 0px',fontSize:'3rem'}}>
Upskill yourself: A Signle Platfrom for all your Learning Needs</h1>
</div>
<Grid stackable columns={3}>
          <Grid.Column>
              <Simgcard img="https://www.myways.in/visitor/img/Collab/udemy.png"/>
          </Grid.Column>
          <Grid.Column>
              <Simgcard img="https://www.myways.in/visitor/img/Collab/edx.png"/>
          </Grid.Column>
          <Grid.Column>
              <Simgcard img="https://www.myways.in/visitor/img/Collab/coursera.png"/>
          </Grid.Column>
</Grid>
    </div>
</Container>
{/* 
<Footer /> */}

    </div>
  );
}

export default LandingPage;
