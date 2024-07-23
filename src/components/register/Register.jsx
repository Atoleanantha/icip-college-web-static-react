import React, {useState,useLayoutEffect} from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import feeDetail1 from "./feeDetail1.jpg"
import feeDetail2 from "./feeDetail2.jpg"
const Register = () => {
  const [hovered, setHovered] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);

    const buttonStyle = {
      transition: 'background-color 0.3s ease',
      textAlign:"center"
    };
  
    const handleHover = () => {
      setHovered(true);
    };
  
    const handleMouseOut = () => {
      setHovered(false);
    };
    const handleClick = () => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLScLcfbDdfItonH-7x82iA4g0KRtOzM2cv6-4IkeujMJ-oxYiA/viewform?usp=send_form', '_blank');
    };

  return (
   <div className='m-4 '>
   <div style={ {border:"0.2px rgb(67,67,67) solid " ,borderRadius:"5px", padding:"10px", textAlign:"center", marginBottom:"0px"}}>
     
   <label style={{fontWeight:"bold", textDecoration: "dotted", fontSize:"20px"}}>Registration </label> <label style={{color:"yellowgreen", fontWeight:'bold',fontSize:"20px"}}>Details</label><br/>
    <br/>
    <Row style={{textAlign:"center", paddingBottom:"0px"}}>
        <Col md="6" sm="12" lg="6">
        <img width="95%" height="90%" src={feeDetail1} alt="clg-img" />
      
        </Col>
        <Col md="6" sm="12" lg="6">
        <img width="95%" height="90%" src={feeDetail2} alt="clg-img" />
        </Col>
    </Row>
   <Button className='discoverbtn ' 
   variant='primary'
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      style={buttonStyle}>
        Register
      </Button>
      <h3 style={{color:"red"}}>Registration Closed</h3>
   </div>
   
   </div>
  )
}

export default Register