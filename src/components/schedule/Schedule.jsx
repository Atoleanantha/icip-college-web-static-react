import React,{useLayoutEffect} from 'react'
import { Container,  Table } from 'react-bootstrap'
import schedule from './schedule.jpg'
const Schedule = () => {
  const day1=[
    {
      time:"08:30 am to 10:00 am",
      event:"	Registration and Breakfast"
    },
    {
      time:"10:00 am to 11:00 am",
      event:"Inaugural function & Photo Session"
    },
    {
      time:"11:00 am to 12:00 noon",
      event:"	Expert's Session I"
    },
    {
      time:"12:15 pm to 01:15 pm",
      event:"Expert's Session II"
    },
    {
      time:"01:15 pm to 02:15 pm",
      event:"Lunch Break and networking"
    },
    {
      time:"02:15 pm to 03:00 pm",
      event:"Panel Discussion"
    },
    {
      time:"03:00 pm to 03:30 pm",
      event:"Tea Break and networking"
    },
    {
      time:"03:30 pm to 05:30 pm",
      event:"Oral presentation and Evaluation"
    },
    {
      time:"06:00 pm to 07:00 pm",
      event:"Cultural Event"
    },
  ]
  const day2=[
    {
      time:"08:30 am to 09:30 am",
      event:"	Breakfast"
    },
    {
      time:"09:30 am to 10:30 am",
      event:"	Expert's Session III"
    },
    {
      time:"10:45 am to 11:45 am",
      event:"	Expert's Session IV"
    },
    {
      time:"12:00 noon to 01:00 pm",
      event:"Expert's Session V"
    },
    {
      time:"01:00 pm to 02:00 pm",
      event:"Lunch Break and networking"
    },
    {
      time:"02:00 pm to 03:30 pm",
      event:"Poster presentation and Evaluation"
    },
    {
      time:"03:30 pm to 03:45 pm",
      event:"Tea Break and networking"
    }, {
      time:"03:30 pm to 03:45 pm",
      event:"Oral presentation and Evaluation"
    }, {
      time:"03:45 pm to 04:30 pm",
      event:"Valedictory Function"
    },
  ]
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);

  return (
    <>
    <Container>
      <Container style={{textAlign:"center", marginBottom:"10px"}}>
     <img src={schedule} width="100%" alt="schedule img"/>
     </Container> 
      <Container style={{background:'yellowgreen'}}>
        <h2 style={{textAlign:'center'}}>Day 1st (13th March 2024)</h2>
      </Container>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Time</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
      {day1.map((date,index)=>{
          return(
            <tr>
              <td>
                {index+1}
              </td>
              <td>
                {date.time}
              </td>
              <td>
                {date.event}
              </td>
            </tr>
          );
        })}
      </tbody>
        
      </Table>
    </Container>
    <Container>
      <Container style={{background:'#3E4598', color:"white"}}>
        <h2 style={{textAlign:'center'}}>Day 2nd (14th March 2024)</h2>
      </Container>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Time</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
      {day2.map((date,index)=>{
          return(
            <tr>
              <td>
                {index+1}
              </td>
              <td>
                {date.time}
              </td>
              <td>
                {date.event}
              </td>
            </tr>
          );
        })}
      </tbody>
        
      </Table>
       
        
      
    </Container>
    </>
  )
}

export default Schedule