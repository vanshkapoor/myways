import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'

const Jcard =(props) => {
    return(
            <Link to="/job/1">
                <Card style={{margin:'auto',width:'100%',boxShadow:'0px 6px 30px rgba(106,100,95,0.15)'}}>
                  <Image src={props.img} wrapped ui={false} />
                  <Card.Content>
                      {props.second?<img className="cardsmimgup" src="https://itkit.io/wp-content/uploads/2019/09/2BE35199-6B05-46A1-9609-41F742BDF001.jpg"></img>:null}
                      <img className="cardsmimg" src="https://itkit.io/wp-content/uploads/2019/09/Screen-Shot-2019-09-11-at-10.23.22-AM.png"></img>
                    <Card.Meta>
                      <span className='date dp'>
                      <Icon name='podcast' />
                       SOFTWARE
                       </span>
                    </Card.Meta>
                    <Card.Header style={{color:'#2C509F',padding:'14px 4px 6px 20px'}}>SegitAI</Card.Header>
                    <Card.Header style={{padding:'2px 4px 6px 20px'}}>front end developer role</Card.Header>
                    <Card.Description style={{paddingLeft:'18px',paddingBottom:'25px'}}>
                            <p><Icon name="clock outline"></Icon>7 - 12 years experience</p>
                            <p><Icon name="location arrow"></Icon>Mumbai</p>
                            <p><Icon name="lock"></Icon>REACTJS,JS,jquery,HTML,CSS,NLP,AI</p>
                            <p><Icon name="envelope open"></Icon>No of openings : 1</p>
                    </Card.Description>
                  </Card.Content>

            </Card></Link>
    )
}

export default Jcard
