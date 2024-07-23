import React,{useLayoutEffect} from 'react'
import { Col, Container} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Address from '../common_components/Address'
import RoadMap from '../common_components/RoadMap'
import { PiPhoneCallFill } from "react-icons/pi";
import { PiEnvelopeDuotone } from "react-icons/pi";
const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);
  return (<Container >
    <div   style={{textAlign:"center",backgroundColor:"yellowgreen" }}><h5>Contact Us</h5></div>
    <label style={{fontWeight:"bold", textDecoration: "dotted"}}>Contact for</label> <label style={{color:"yellowgreen", fontWeight:'bold '}}>Registration</label>
    <div style={ {border:"0.2px rgb(67,67,67) solid " ,borderRadius:"5px", padding:"10px"}}>
      <label>Name : <label>Mr. Khatal M.B</label></label>
      <br/>
      <PiPhoneCallFill /><span>  </span>
      <label>Phone : <label>+91 7040550292</label></label>
      <br/>
      <PiEnvelopeDuotone /><span>  </span>
      <label>Email : <label>icipamrutvahini@gmail.com</label></label>
    </div>
    <label style={{fontWeight:"bold", textDecoration: "dotted"}}>Contact for</label> <label style={{color:"yellowgreen", fontWeight:'bold '}}>Queries</label>
    <div style={ {border:"0.2px rgb(67,67,67) solid " ,borderRadius:"5px", padding:"10px"}}>
      <label>Name : <label>Dr. Annasaheb B. Jagnar</label></label>
      <br/>
      <PiPhoneCallFill /><span>  </span>
      <label>Phone : <label>+91 9970130058</label></label>
      <br/>
      <PiEnvelopeDuotone /><span>  </span>
      <label>Email : <label>icipamrutvahini@gmail.com</label></label>
    </div>
    <Row>
      <Col md="6" lg="6" sm="12">
      <div>
    <label style={{fontWeight:"bold", textDecoration: "dotted"}}>Contact</label> <label style={{color:"yellowgreen", fontWeight:'bold '}}>Details</label>
  </div>
        <Address margin="16px" fontSize="30px" txtcolor="orange"/>
      </Col>
      <Col md="6" lg="6" sm="12">
      <label style={{textDecoration: "dotted", fontWeight:'bold '}}>Road</label> <label style={{color:"yellowgreen", fontWeight:'bold '}}>Map</label>
        <RoadMap />
      </Col>
    </Row>
    <hr className='dashed'/>
    
    <label style={ {fontWeight:"bold"}}>Google <label style={{color:'yellowgreen'}}>Location</label></label>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.0653152241916!2d74.17753429999999!3d19.6245052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddab0a233176d7%3A0xd26250f2df1288ef!2sAMRUTVAHINI%20INSTITUTE%20OF%20PHARMACY!5e0!3m2!1sen!2sin!4v1709361479734!5m2!1sen!2sin" style={{ width:"100%",height:"400px",  loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} ></iframe>
  </Container>
 
  )
}

export default Contact;