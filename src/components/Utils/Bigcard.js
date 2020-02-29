import React from 'react'
import { Container, Grid, Image , Card , Icon , Button, GridRow, Form} from 'semantic-ui-react'


const Bigcard =() => {
    return(
        <Card style={{margin:'auto',width:'100%',boxShadow:'0px 6px 30px rgba(106,100,95,0.15)'}}>
            <div className="text-center mb-4 mt-4 ">
                <h1 style={{color:"rgb(245, 173, 0)",padding:'20px 0px 20px 0px',fontSize:'3rem'}}>Introduction</h1>
            </div>
            <p style={{fontSize:'1.3rem',color:'grey', padding:'0px 21px 37px 22px'}}>
            The very infamous race for IITs going on for years in India, is taking away not just the talent, childhood and happiness but also the lives of the brilliant minds of the country, not only IITs but several similar competitions. Blindly following the herd is leading to many serious problems like one student committing suicide every hour in India, Kota being the suicide hub instead of education hub of India, more than two-third of the employees planning to quit their jobs, high no.of jobless graduates and about 1000 dropouts every year in top institutes of the country like IITs. With the vision of making individuals able to make and pursue a well informed and independent career choice, MyWays, a team of students from IIT Delhi and Delhi University, is working with the students of schools and colleges, helping them to choose an appropriate career for themselves in order to achieve professional goals and develop a well defined strategy to become what they want to be.

In today’s world, unfortunately, not many students are able to discover their potential and interest or are unaware of the career options at the stage when pressure starts building up. Seeking help from those who can assist in discovering one’s interests and skills and accordingly map suitable career choices becomes necessary. Most importantly, students need mentorship, exposure and support so that they are more confident in opting for the careers of their choice. Thus we have developed Myways, an innovative and full fledged solution provider to all the problems regarding career choice.
            </p>
            <iframe style={{margin:'auto',height:'18rem',width:'80%'}} src="https://www.youtube.com/embed/V75778a0-Po?autoplay=1&controls=0&loop=1&playlist=8HSr8BjcufM&amp;showinfo=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

    </Card>
    )
}

export default Bigcard