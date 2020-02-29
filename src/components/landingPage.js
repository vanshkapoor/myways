import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'
import Navbar from './Layout/Navbar'
import SmallCard from './Utils/Card'
import Lcard from './Utils/Lcard'
import Scard from './Utils/Scard'
import Footer from './Layout/Footer'
import '../App.css'

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
                  <SmallCard img="https://www.myways.in/visitor/ico/Exploration.png" second="true" t1="Finding'MyWays'" t2="The first step towards an effective career decision is knowing yourself at the best. Know about your skills, interests and core values which affect majority of your decisions taken sub-consciously."/>
            </Grid.Column>
            <Grid.Column>
                   <SmallCard img="https://www.myways.in/visitor/ico/Network.png" t1="MyMentors & MyPeers Network" t2="Do you think even after exploring and trying, you can settle well with a career fully satisfied? Perhaps no. Here is where you need proper guidance and a good environment to pursue your dream."/>
            </Grid.Column>
            <Grid.Column>
                    <SmallCard img="https://www.myways.in/visitor/ico/Knowing%20yourself.png" second="true" t1="Hands-On Experience" t2="A good psychometric test is not all that can help one decide a career. Career is a journey not a destination. Explore your interest areas by trying them hands-on." />
            </Grid.Column>
          </Grid>

      </div>
      
      <div className="layoutlowerdiv">
{/* Latest articles */}
<div className="text-center mb-4 mt-4">
<h1 style={{color:"rgb(245, 173, 0)",padding:'20px 0px 20px 0px',fontSize:'3rem'}}>Get an in-depth insight of your own Self</h1>
</div>
{/* <Grid> */}
    {/* <Grid.Column width={16}> */}
    <Grid stackable columns={3}>
          <Grid.Column>
              <p style={{fontSize:'1.3rem'}}>Know yourself better to make the best use of your potential and stop following the herd.</p>
          </Grid.Column>
          <Grid.Column>
              <p style={{fontSize:'1.3rem'}}>Give our quick and holistic psychometric test</p>
          </Grid.Column>
          <Grid.Column>
              <p style={{fontSize:'1.3rem'}}>We provide you with psychometric analysis that is practical, easy to understand and unique.</p>
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
          <button className="btns">Explore Myself</button>
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
              <Scard img="https://itkit.io/wp-content/uploads/2019/12/gitlab-logo-gray-rgb.png"/>
          </Grid.Column>
          <Grid.Column>
              <Scard img="https://itkit.io/wp-content/uploads/2020/01/Fortinet-logo-1-1.png"/>
          </Grid.Column>
</Grid>
<Grid stackable columns={2}>
          <Grid.Column>
              <Scard img="https://itkit.io/wp-content/uploads/2019/12/evernote-og.png"/>
          </Grid.Column>
          <Grid.Column>
              <Scard img="https://itkit.io/wp-content/uploads/2019/12/evernote-og.png"/>
          </Grid.Column>
</Grid>
<Grid stackable columns={2}>
          <Grid.Column>
              <Scard img="https://itkit.io/wp-content/uploads/2019/12/gitlab-logo-gray-rgb.png"/>
          </Grid.Column>
          <Grid.Column>
              <Scard img="https://itkit.io/wp-content/uploads/2019/12/gitlab-logo-gray-rgb.png"/>
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
