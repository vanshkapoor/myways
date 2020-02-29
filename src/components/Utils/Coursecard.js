import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form, Rating} from 'semantic-ui-react'

const Coursecard =(props) => {
    return(
            <Link to="/courses/1">
                <Card style={{margin:'auto',width:'100%',boxShadow:'0px 6px 30px rgba(106,100,95,0.15)',color:'black',padding:'12px 20px 30px 23px',borderRadius:'12px',fontSize:'1.2rem'}}>
                  <h1>{props.t1}</h1>
                  <p>{props.t2}</p>

            </Card></Link>
    )
}

export default Coursecard
