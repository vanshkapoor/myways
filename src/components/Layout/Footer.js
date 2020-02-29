import React, { useState } from "react";
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'


const Footer =() => {
    return(<>
    <Container>
    
    <div className="text-center mb-4 mt-4 headfoot">
      <h1 style={{color:"#2C509F",padding:'20px 0px 20px 0px'}}>Join the TechKit Community</h1>
      <p>Want to get updates from TechKit? Join the community to receive interviews, blogs, newsletters, event invites, and jobs right to your inbox.</p>
    </div>

        <Form className="formfoot">
        <Form.Field style={{padding:'10px 17px 0px 17px'}}>
          <input style={{border:"none"}} className="inp" placeholder='First Name' />
        </Form.Field>
        <Form.Field style={{padding:'0px 17px 0px 17px'}}>
          <input style={{border:"none"}} className="inp" placeholder='Last Name' />
        </Form.Field>
        <Form.Field style={{padding:'0px 17px 0px 17px'}}>
          <input style={{border:"none"}} className="inp" placeholder='Job Role' />
        </Form.Field>
        <Form.Field style={{padding:'0px 17px 0px 17px'}}>
          <input style={{border:"none"}} className="inp" placeholder='Email Address' />
        </Form.Field>
        <Button type='submit' style={{background:'white',borderRadius:'24px'}}>Submit</Button>
    </Form>
    </Container>

    <div className="layoutlowerdiv1">
    <Grid stackable className="foot" style={{paddingTop:'3%',paddingBottom:'3%'}}>
      <Grid.Column width={4} style={{textAlign:'center'}}>
            TechKit
      </Grid.Column>
      <Grid.Column width={8} >

        <Grid stackable columns={4}>
            <Grid.Column width={4} style={{textAlign:'center'}}>
              Interviews
            </Grid.Column>
            <Grid.Column width={4} style={{textAlign:'center'}}>
              Blog
            </Grid.Column>
            <Grid.Column width={4} style={{textAlign:'center'}}>
              Events
            </Grid.Column>
            <Grid.Column width={4} style={{textAlign:'center'}}>
              Jobs
            </Grid.Column>
          </Grid>
      </Grid.Column>
      <Grid.Column width={4} style={{textAlign:'center'}}>
          <img src="https://itkit.io/wp-content/uploads/2019/08/twitter.svg" />
          <img src="https://itkit.io/wp-content/uploads/2019/08/fb-circle.svg" />            
      </Grid.Column>
    </Grid>
    <div className="footlowerdiv">
      <p className="footerup">© 2020 askSpoke. All rights Reserved. Privacy Policy </p>
      <p className="footerlp">BROUGHT TO YOU BY</p>
    </div>
    </div>
{/* 
  <div>
<Container>

</Container>
  </div>
<div>
 */}

</>
    )
}

export default Footer;