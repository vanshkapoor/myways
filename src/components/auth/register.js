import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form,Checkbox} from 'semantic-ui-react'
import Navbar from '../Layout/Navbar'
import SmallCard from '../Utils/Card'
import Lcard from '../Utils/Lcard'
import Scard from '../Utils/Scard'
import Footer from '../Layout/Footer'
import Bigcard from '../Utils/Bigcard'

const Register = () => {


  return (
    <div>
      <Navbar />
        <Container style={{width:'1350px'}}>
        
            <div className="layoutlowerdivauth">
                <div className="authupform">
                    <h2 style={{fontSize:'2rem'}}>Sign Up with TechKit</h2>
                    <hr style={{width:'20%'}} />
                    <h3 style={{color:'#717171'}}>Sign up to techKit !</h3>
                </div>
                <div>
                <Form className="" style={{marginTop:'5%',backgroundColor:'white'}}>
                    <Form.Field style={{padding:'0px 17px 0px 17px'}}>
                    <input style={{width:'90%',borderRadius:'24px'}} className="inp" placeholder='Company Name' />
                    </Form.Field>
                    <Form.Field style={{padding:'0px 17px 0px 17px'}}>
                    <input style={{width:'90%',borderRadius:'24px'}} className="inp" placeholder='Email Address' />
                    </Form.Field>
                    <Form.Field style={{padding:'0px 17px 0px 17px'}}>
                    <input style={{width:'90%',borderRadius:'24px'}} className="inp" placeholder='Password' />
                    </Form.Field>
                    <Form.Field style={{padding:'0px 17px 0px 17px'}}>
                    <input style={{width:'90%',borderRadius:'24px'}} className="inp" placeholder='Confirm Password' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox style={{width:'90%'}} label='By creating an account, I agree to TechKit Terms Of Service and Privacy Policy' />
                    </Form.Field>
                    <Button type='submit' style={{background:'#3857a3',borderRadius:'24px',color:'white',width:'64%'}}>Submit</Button>
                </Form>
                <div>
                    <p style={{paddingTop:'1%',fontSize:'1.3rem'}}>Existing User ? <Link to="/login">Sign In</Link></p>
                </div>
                </div>
            </div>
        </Container>
    </div>
  );
}

export default Register;
