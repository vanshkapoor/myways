import React from 'react'

import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'

const SmallCard =(props) => {
    return(
            <Card style={{margin:'auto',width:'100%',boxShadow:'0px 6px 30px rgba(106,100,95,0.15)',background:'whitesmoke'}}>
                  <img width="60%" style={{margin:'auto',paddingTop:'6%',backgrounf:'#ffffc1'}} src={props.img} wrapped ui={false} />
                  <Card.Content style={{background:'white'}}>
                      {/* {props.second?<img className="cardsmimgup" src="https://itkit.io/wp-content/uploads/2019/09/2BE35199-6B05-46A1-9609-41F742BDF001.jpg"></img>:null} */}
                      {/* <img className="cardsmimg" src="https://itkit.io/wp-content/uploads/2019/09/Screen-Shot-2019-09-11-at-10.23.22-AM.png"></img> */}
                    <Card.Meta>
                      {/* <span className='date dp'>
                      <Icon name='podcast' />
                       PODCASTS
                       </span> */}
                    </Card.Meta>
                      <Card.Header style={{color:'#ffd369',padding:'14px 4px 6px 20px',fontSize:'2rem'}}>{props.t1}</Card.Header>
                    <Card.Description style={{paddingLeft:'18px',paddingBottom:'55px',fontSize:'18px',lineHeight:'1.8rem'}}>
                    {props.t2}
                    </Card.Description>
                  </Card.Content>

            </Card>
    )
}

export default SmallCard
