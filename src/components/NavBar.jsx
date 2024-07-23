import React,{useState} from 'react'
import '../App.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ICIPLogo from '../images/ICIP.png'
import { NavLink } from 'react-router-dom';


function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const handleClick=()=>{
    window.open('https://drive.google.com/file/d/1-HV-pWRX_u7ju_M7HZL8dtMJv3DkDB-w/view?usp=drivesdk','_blanck')
  }
  
  return (
    <Navbar className='responsive-nav' expanded={expanded} collapseOnSelect expand="lg" bg="light" variant="light" defaultActiveKey="/home">
      <Navbar.Brand href="/"><img src={ICIPLogo} alt="ICIP LOGO" style={{ height: '70px', display: 'flex' }} /></Navbar.Brand>
      <Navbar.Brand href="/" style={{fontSize:"clamp(20px,4vw,30px)"}}>ICIP Amrutvahini</Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >

        <Nav className="me-auto" style={{margin:"10px"}} >
          <Nav.Link  onClick={() => setExpanded(false)}  as={NavLink} activeClassName="active-link"><Link to='/' activeClassName="active-link"><div className='nav-item'>Home</div></Link ></Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)} as={NavLink} activeClassName="active-link"><Link to='/guest' ><div className='nav-item'>Guests</div></Link></Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)} as={NavLink} activeClassName="active-link"><Link to='/team' ><div className='nav-item'>Committee</div></Link></Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)} as={NavLink} activeClassName="active-link"><Link to='/gallery' ><div className='nav-item'>Gallery</div></Link></Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)} as={NavLink} activeClassName="active-link"><Link to='/schedule' ><div className='nav-item'>Schedule</div></Link></Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)} as={NavLink} activeClassName="active-link"><Link to='/contact' ><div className='nav-item'>Contact</div></Link></Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)} as={NavLink} activeClassName="active-link"><Link to='/about' ><div className='nav-item'>About</div></Link></Nav.Link>

        </Nav>
        <Nav>
          <Button > <Link to='/register' style={{color:"white"}}>Register</Link></Button>
       
          <span style={{width:"10px"}}>   </span>
          <Button className='broucher' variant="outline-success" onClick={handleClick}>Download Brochure</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}



export default NavBar;