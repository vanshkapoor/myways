import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'
import Navbar from '../Layout/Navbar'


const Login = () => {


  return (
    <div>
      <Navbar />
        <Container style={{width:'1350px'}}>
        
            <div className="layoutlowerdivauth">
                <div className="authupform">
                    <h2 style={{fontSize:'2rem'}}>Login with TechKit</h2>
                    <hr style={{width:'20%'}} />
                    <h3 style={{color:'#717171'}}>Welcome Back to TechKit !</h3>
                </div>
                <div>
                <Form className="" style={{marginTop:'5%',backgroundColor:'white'}}>
                    <Form.Field style={{padding:'0px 17px 0px 17px'}}>
                    <input style={{width:'90%',borderRadius:'24px'}} className="inp" placeholder='Email Address' />
                    </Form.Field>
                    <Form.Field style={{padding:'0px 17px 0px 17px'}}>
                    <input style={{width:'90%',borderRadius:'24px'}} className="inp" placeholder='Password' />
                    </Form.Field>
                    <Button type='submit' style={{background:'#3857a3',borderRadius:'24px',color:'white',width:'64%'}}>Submit</Button>
                </Form>
                <p className="date" style={{color:'grey',paddingTop:'1%'}}> FORGOT PASSWORD</p>
                <div>
                    <p style={{paddingTop:'1%',fontSize:'1.3rem'}}>New to Segit AI ? <Link to="/register">Sign Up</Link></p>
                </div>
                </div>
            </div>
        </Container>
    </div>
  );
}

export default Login;
