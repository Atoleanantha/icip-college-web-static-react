import React, {useState } from 'react'
import '../App.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import aviplogo from '../images/AVIP.png'
import msbtelogo from '../images/MSBTELOGO.png'
import dbatulogo from '../images/DBATU.png'
import icpalogo from '../images/ICPA2Logo.png'
const HeroSection = () => {
    const [hovered, setHovered] = useState(false);

    const buttonStyle = {
      backgroundColor: hovered ? 'lightgreen' : 'yellowgreen',
      transition: 'background-color 0.3s ease',
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
        <Container fluid className='hero' style={{ color: 'white', background: "#3E4598", margin: '0px', padding: '50px 100px' }}>
      <h1  style={{ textAlign: 'center', color: 'yellowgreen',
          }}>Pharmaceutical Research Accelerating Discoveries with Artificial Intelligence</h1>

      <Row className="align-items-center">
        <Col md={8} xs={12}>
          <h1>First International Conference on Innovative Pharmacy Amrutvahini 2024</h1>
          <p>Approved by Maharashtra State Board of Technical Education Mumbai, India.<br /> Dr. Babasaheb Technological University, Lonere, Raigad, Maharashtra, India</p>
          <Row>
            <Col>
              <img src={aviplogo} alt='Logo' className="img-fluid" style={{ maxHeight: '130px', textAlign: 'end' }} />
            </Col>
            <Col>
              <img src={msbtelogo} alt='Logo' className="img-fluid" style={{ maxHeight: '130px', textAlign: 'end' }} />
            </Col>
            <Col>
              <img src={dbatulogo} alt='Logo' className="img-fluid" style={{ maxHeight: '125px', textAlign: 'end' }} />
            </Col>
          </Row>
        </Col>
        <Col className="text-md-right mb-md-0 mb-3">
          <img src={icpalogo} alt='Logo' className="img-fluid" style={{ maxHeight: '250px', textAlign: 'end' }} />
        </Col>
      </Row>
      <br/>
      <h2 className="text-start" >
        Save the Date!
        <br />
        March 13<sup>th</sup> - 14<sup>th</sup>, 2024
      </h2>
      <Button className='discoverbtn' 
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      style={buttonStyle}>
        Accelerating Discoveries with AI
      </Button>
    </Container>
    )
}

export default HeroSection;