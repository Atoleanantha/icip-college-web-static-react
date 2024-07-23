import React,{useLayoutEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import img1 from '../../images/gallery_img/ga1.jpg'
const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);
  return (
   <div className='p-4' >
     <label style={{fontWeight:"bold", textDecoration: "dotted", fontSize:"20px"}}>About</label> <label style={{color:"yellowgreen", fontWeight:'bold',fontSize:"20px"}}>Conference</label><br/>
     <br/>
     <Row >
      <Col md="6" lg="6" sm="12">
      <p style={{textAlign:"justify", color:" #999999", fontSize:"15px"}}>
    
        <h5>The 1<sup>st</sup> "International Conference on Innovative Pharmacy Amrutvahini 2024.</h5>

        AMRUTVAHINI PHARMACEUTICAL RESEARCH ACCELERATING DISCOVERIES WITH ARTIFICIAL INTELLIGENCE CONFERENCE is an event that seeks to drive innovation, foster collaboration, and explore the limitless possibilities that lie at the intersection of technology and transdisciplinary education. In an era defined by rapid technological advancements and complex global challenges, this conference seeks to revolutionize the way we prepare individuals for the future.
        <br/>
        The conference promotes transdisciplinary education, where knowledge has no barriers, and individuals are encouraged to explore, synthesize, and apply insights from various fields. Moreover, the integration of technology in education takes center stage, exploring how cutting-edge digital tools, e-learning platforms, and artificial intelligence can enhance the learning experience. It emphasizes the power of cross-sectoral collaboration and shows how such an approach can generate innovative solutions to complex societal issues including healthcare, the environment, and social equity.
        <br/>
        Through keynote address, panel discussions, technical sessions, and research presentations, the conference will fosters knowledge sharing, collaborative initiatives, policy recommendations, and empower educators with practical tools. It would serves as an inspirational platform for the change, where attendees leave with a refreshed outlook on education's transformative potential in our increasingly digital and interconnected world.
        <br/>

        <label style={{fontWeight:"bold"}} >Highlights of conference</label>

        <li>Five Speakers from Five Different Countries</li>

        <li>Participants limit upto 250 only</li>

        <li>Paper and Poster Presentation</li>

         <li>Panel Discussion</li>
      </p>
      </Col>
      <Col md="6" lg="6" sm="12" style={{textAlign:"center"}}>
      <img width="95%" height="95%" src={img1} alt="clg-img" />
      </Col>
    </Row>
    
    <label style={{fontWeight:"bold", textDecoration: "dotted", fontSize:"20px"}}>About</label> <label style={{color:"yellowgreen", fontWeight:'bold',fontSize:"20px"}}>College</label><br/>
    <br/>
    <Row >
      <Col md="6" lg="6" sm="12" style={{textAlign:"center"}}>
      <img width="85%" height="95%" src="https://www.amrutdpharm.org/images/institute/building%20upadted%2015082023.jpg" alt="clg-img" />
      </Col>
      <Col md="6" lg="6" sm="12">
      <p style={{textAlign:"justify", color:" #999999", fontSize:"15px"}}><label>Amrutvahini Institute of Pharmacy established by Amrutvahini Sheti & Shikshan Vikas Sanstha at Amrutnagar, Sangamner.

Amrutvahini Institute of Pharmacy is the milestone of pharmacy profession in rural area. The institute is a center of excellence at all levels in the file of pharmaceutical sciences consigned to create self discipline physically fit mentally robust & morally strong professionals with high degree of integrity & diverse knowledge.
</label>
<br/>
<br/>
Amrutvahini Institute of Pharmacy, Sangarnner is a fully residential College established in 2006. This college is outcome of untiring efforts of <b> Hon. Late. Shri Bhausaheb Santuji Thorat </b>(Founder), motivation of Hon. Shri Balasaheb B. Thorat, Minister of Revenue and MLA Govt. of M.S., Member NCWC, President of AVS & SVS Sanstha and inspiration of Hon. Dr. Sudhirji Tambe, Ex.MLA, Graduate Constituency, Govt. Maharashtra & Trustee of Sanstha being a leading surgeon by profession who always encourages the Medical & Pharmacy Education in the Sanstha. The college has been playing a key role not only in turning Sangarnner tahsil as one of the most prominent area in the state, economically and educationally, but also has been functioning as a wonderful! resource for well trained and qualified man power for the country.
<br></br>
<br></br>
<label>Our students are not only superior in the field of education but also capable to meet challenges of every advancing technology in modern pharmaceuticals & globalization for benefit of society in healthcare profession.
</label>
</p>
      
      
      </Col>
    </Row>
    <Row>
    <Col md="6" lg="6" sm="12" style={{textAlign:"start", border:"0.5px black solid"}}>
    <label style={{color:"yellowgreen" }}>D. Pharmacy </label> (Intake 60)<br></br>
    Affiliated to Maharashtra State Board of Technical Education Mumbai, India<br/>

    Approved By Government of Maharashtra, India Pharmacy Council of India (PCI), New Delhi, India.<br/>

    Director of Technical Education (DTE), Mumbai, India

    </Col>
    <Col md="6" lg="6" sm="12" style={{textAlign:"start",border:"0.5px black solid"}}>

    <label style={{color:"red"}}>B. Pharmacy </label> (Intake 60)<br/>

Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere,

Raigad, Maharashtra, India<br/>

Approved By Government of Maharashtra, India Pharmacy Council of India (PCI), New Delhi, India.<br/>

Director of Technical Education (DTE), Mumbai, India

    </Col>
    </Row>
   </div>
  )
}

export default About