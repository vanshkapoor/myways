import React from 'react'

import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'

const Lcard =() => {
    return(
            <Card style={{margin:'auto',width:'100%',boxShadow:'0px 6px 30px rgba(106,100,95,0.15)'}}>
                  <Image src='https://itkit.io/wp-content/uploads/2019/09/394A9704-1.jpg' wrapped ui={false} />
                  <Card.Content>
                    <Card.Meta>
                      <span className='date dp'>
                       INFRASTRUCTURE
                       </span>
                    </Card.Meta>
                    <Card.Header style={{color:'#2C509F',padding:'14px 4px 6px 20px'}}>Getting to Know IT kit Co-Host,Manuel Bernal</Card.Header>
                    <Card.Description style={{paddingLeft:'18px',paddingBottom:'55px'}}>
                    <p className="date" style={{color:'grey',paddingBottom:'5px'}}>Keegan Thomson | October 24, 2019</p>
                    In IT we have this term “Greenfield” which defines an environment with no legacy and no existing technology. It is, in essence
                    </Card.Description>
                  </Card.Content>

            </Card>
    )
}

export default Lcard
