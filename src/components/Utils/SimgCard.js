import React from 'react'

import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'

const Simgcard =(props) => {
    return(
           
            <img className="imgscard" width="88%" src={props.img} />
            
    )
}

export default Simgcard


 // <Card style={{margin:'auto',width:'100%'}}>
                {/* <div className="row">
                    <div className="col-4 coll">
                        <img className="imgscard" width="88%" src={props.img} />
                    </div>
                    <div className="col-8" style={{display:'flex'}}>
                        <div className="grey"></div>
                        <Card.Content>
                        <Card.Header style={{color:'#2C509F',padding:'18px 7px 10px 20px',fontSize:'21px',fontWeight:'bold'}}>Getting to Know IT kit Co-Host,Manuel Bernal</Card.Header>
                        <Card.Description style={{paddingLeft:'18px',paddingBottom:'55px',color:'grey',fontWeight:'bold'}}>
                        Ryan Bacon, IT Support Engineer
                        </Card.Description>
                    </Card.Content>
                    </div>
                </div> */}
            // </Card>