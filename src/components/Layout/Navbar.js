import React, { useContext,useState,useEffect} from 'react';
import './navbar.css';
import styled from 'styled-components';
import { Link,withRouter,Redirect} from 'react-router-dom';
// import { useAlert } from "react-alert"
// import {Redirect} from 'react-router-dom';


const StyledDiv = styled.div`
border-bottom: 0px solid #65cdf0;
`
const Styledh2 = styled.h2`
    color: #000000;
    font-size: 1.6rem;
    padding-top: 6px;
    padding-bottom: 9px;
    padding-left:10%
`
// const Styledspan = styled.span`
// color: #607D8B;
//     margin-left: 10px;
//     padding-top: 9px;

// `

const Styledbutton = styled.button`
background: #e9e9e9;
border: none;
padding: 10px;
border-radius: 12px;
color: #75cbfd;
`

const Navbar = (props) => {
    const [logedinuser, setLogedinuser] = useState(false);
    const [request,setRequest] = useState("")
    // const alert = useAlert()


    

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        // document.body.style.backgroundColor = "#f7f7f7";
        
    }

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    }

    return (
        <StyledDiv>

            <div id="mySidenav" className="sidenav" style={{zIndex:"1003"}}>
                <div className="navhead">
                    {/* <i class="fas fa-user"></i><br /> */}
                     {/* <strong>TechKit</strong>  */}
                     <img width="80%" src="https://www.myways.in/visitor/img/logo/logo%20home.png" />
                     <br />
                 </div>
                 <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                {/* {data} */}
                <div className="navcontent">
                    <Link to="/">     Home</Link>
                    <Link to="/about">    About us</Link>
                    <Link to="/model">     Model</Link>
                    <Link to="/services">    Services</Link>

                </div>
            </div>
            
            
            <div className={(props.head == 'login'|| props.head == 'register')?'navlayoutlogin':'navlayout'} >
                <div>
                    <span className="navmobile" onClick={openNav} >&#9776;</span>
                    
                    <Styledh2> 
                    <img width="120px" src="https://www.myways.in/visitor/img/logo/logo%20home.png" />
                    </Styledh2>
                    <div className="navright">
                        {(logedinuser) ? 
                        <Link to="/writefn" style={{'color':'black','textDecoration':'none'}}><h2 className={props.head == "Create"?'navrighttags black':'navrighttags'} >Interviews</h2></Link>
                        :null
                        }
                        <Link to="/" style={{'color':'#ffd369','textDecoration':'none','paddingRight':'23px'}}><h2 className={props.head == "explore"?'navrighttags black':'navrighttags'}>Home</h2></Link>
                        <Link to="/about" style={{'color':'#ffd369','textDecoration':'none','paddingRight':'23px'}}><h2 className={props.head == "explore"?'navrighttags black':'navrighttags'}>About Us</h2></Link>
                        <Link to="/model" style={{'color':'#ffd369','textDecoration':'none','paddingRight':'23px'}}><h2 className={props.head == "explore"?'navrighttags black':'navrighttags'}>Model</h2></Link>
                        <Link to="/services" style={{'color':'#ffd369','textDecoration':'none','paddingRight':'23px'}}><h2 className={props.head == "explore"?'navrighttags black':'navrighttags'}>Services</h2></Link>
                        {/* <Link to="/jobs" style={{'color':'#ffd369','textDecoration':'none','paddingRight':'23px'}}><h2 className={props.head == "explore"?'navrighttags black':'navrighttags'}>Campus Manager</h2></Link> */}
                        {/* <Link to="/login" className="joinbtn"><h2 className={props.head == "login"?'navrighttags black':'navrighttags'}>SignIn</h2></Link> */}


                        {/* <Link to="/company" style={{'color':'black','textDecoration':'none'}}><h2  className={props.head == "company"?'navrighttags black':'navrighttags'} >COMPANY</h2></Link> */}
                        {/* <Link to="/themes" style={{'color':'black','textDecoration':'none'}}><h2 className={props.head == "themes"?'navrighttags black':'navrighttags'} >THEMES</h2></Link> */}
                        {/* <Link to="/request" style={{'color':'black','textDecoration':'none'}}> */}
                            {/* </Link> */}
                    </div>
                </div>                                
            </div>
        </StyledDiv>

    )
}


export default withRouter(Navbar);


