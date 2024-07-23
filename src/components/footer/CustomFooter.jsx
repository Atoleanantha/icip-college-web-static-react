import React,{useLayoutEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import twitter from './twitter.png'
import linkedIn from './linkedin.png'
import instagram from './instagram.png'
import browser from './browser.png'
import facebook from './facebook.png'
import youtube from './youtube.png'
import location from './Goolgelocation.png'
import '../../App.css'
import Address from '../common_components/Address';
function CustomFooter() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);

    const iconStyle={
        imageheight:"2em",
        width:"2em",
    }
    const uMargin={
      margin:"3px",
      borderTop: "1.5px dashed #bbb",
  }
    
  return (
    // <div style={{backgroundColor:"#dee0d2"}}>
    <div className='p-2' style={{backgroundColor:"#85DD52" ,color:"black"}}>
        <Container className='para1 mt-2'>
       <Row row-md-4>
        <Col xs="12" md="6" sm="12">
          <h3>Useful Links</h3>
          <Nav.Link className='nav-item'><Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link></Nav.Link>
          <Nav.Link className='nav-item' ><Link to='/guest' style={{ color: 'black', textDecoration: 'none' }}>Guests</Link></Nav.Link>
          <Nav.Link className='nav-item'><Link to='/gallery' style={{ color: 'black', textDecoration: 'none' }}>Gallery</Link></Nav.Link>
          <Nav.Link className='nav-item' ><Link to='/team' style={{ color: 'black', textDecoration: 'none' }}>Team</Link></Nav.Link>
          <Nav.Link className='nav-item'  ><Link to='/schedule' style={{ color: 'black', textDecoration: 'none' }}>Schedule</Link></Nav.Link>
          <Nav.Link className='nav-item' ><Link to='/about' style={{ color: 'black', textDecoration: 'none' }}>About Us</Link></Nav.Link>
          <Nav.Link className='nav-item' ><Link to='/contact' style={{ color: 'black', textDecoration: 'none' }}>Contact Us</Link></Nav.Link>

          <Nav.Link className='b-nav-item' href="#home"> <Link to="/privacyplolicy" style={{textDecoration:"none", color:"black"}}> Terms & Conditions </Link></Nav.Link>
        </Col>
         
        <Col  xs="12" md="6" sm="12">
            <h3>Contact Info</h3>
           
          <Address margin="0px" fontSize="20px" txtcolor="black"/>
          </Col>
          {/*
          <Col xs="6" md="4" sm="6">
            <h3>Legal Links</h3>
             <Nav.Link className='b-nav-item' href="#home"> <Link to="/privacyplolicy" style={{textDecoration:"none", color:"black"}}> Terms & Conditions </Link></Nav.Link> 
          <Nav.Link className='b-nav-item' href="#aboutus">Refund Policy</Nav.Link>
          <Nav.Link className='b-nav-item' href="#home">Terms and Conditions</Nav.Link>
        </Col>
        */}
      </Row>
      

      <Container className='socialMedia' >
            <h2 style={{textAlign:'center'}}>Follow Us</h2>
            <Row className="justify-content-center mb-1 mt-2" >
                <Col xs="1" md="1" sm="2">
                    <Nav.Link className='i-nav-item' target='blank' href="#linkedIn"><img style={iconStyle} src={linkedIn} alt="LinkedIn" /></Nav.Link>
                </Col>
                <Col xs="1" md="1" sm="2">
                    <Nav.Link className='i-nav-item' target='blank' href="#"><img style={iconStyle} src={instagram} alt="Instagram" /></Nav.Link>
                </Col>
                <Col xs="1" md="1" sm="2">
                    <Nav.Link className='i-nav-item' target='blank' href="#twitter"><img style={iconStyle} src={twitter} alt="Twitter" /></Nav.Link>
                </Col>
                <Col xs="1" md="1" sm="2">
                    <Nav.Link className='i-nav-item' target='blank' href="http://www.amrutdpharm.org"><img style={iconStyle} src={browser} alt="browser" /></Nav.Link>
                </Col>
                <Col xs="1" md="1" sm="2">
                    <Nav.Link className='i-nav-item' target='blank' href="https://www.facebook.com/profile.php?id=100064874403570&mibextid=ZbWKwL"><img style={iconStyle} src={facebook} alt="facebook" /></Nav.Link>
                </Col>
                <Col xs="1" md="1" sm="2">
                    <Nav.Link className='i-nav-item' target='blank' href="https://youtube.com/@amrutvahiniinstituteofphar1115?si=UY_lwiUNKHSFvsFp"><img style={iconStyle} src={youtube} alt="youtube" /></Nav.Link>
                </Col>
                <Col xs="1" md="1" sm="2"> 
                    <Nav.Link className='i-nav-item' target='blank' href="https://maps.app.goo.gl/nYU5jRhx6LC1bYJa7"><img style={iconStyle} src={location} alt="location" /></Nav.Link>
                </Col>
            </Row>
            <div style={{textAlign:'center'}}>
            <p>Copyright ©2024 | <b>Amrutvahini Institute of Pharmacy</b>.<br/> All Rights Reserved</p>
            </div>
      </Container>
      
    </Container>
    </div>
    
  )
}


export default CustomFooter;