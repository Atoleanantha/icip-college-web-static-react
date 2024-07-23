import React,{useLayoutEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const PrivacyPolicy = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);
  return (
    
    <>
    <Row>
        <Col md="6" sm="12" lg="6">
        <h3 style={{ textAlign: 'center', background: 'yellowgreen', margin: '0px', paddingTop: '10PX', color: '#3E4598' }}>Paper Presentation Guidelines</h3>
        <ol type="1">
            <li>The research paper should be innovative and research oriented.</li>
            <li>Each group should not contain more than two participants.</li>
            <li>The participants should send their soft copy of paper as per template for shortlisting up to date of registration on Email:icipamrutvahini@gmail.com</li>
            <li> Maximum 10 slides will be allowed for paper presentation and slides should not contain name of guide and institute for transparent judgment.</li>
            <li>Maximum time for presentation will be 7 minutes and 03 minutes for conclusion and question answer will be given.</li>
            <li>Limited entries for paper will be short listed from total papers received.</li>
            <li>Send your paper and duly filled application form on given E-mail id.</li>
            <li>Paper should be in Times new roman with size 12, headings bold and contain abstract, aim and objective, material and method, result and discussion, references at the time of submission for short listing purpose.</li>
            <li>Failure to fulfill the above rules will disqualify the paper.</li>
            <li>The short listed participants should bring their final paper at the time of presentation.</li>
        </ol>
        
        </Col>
        <Col md="6" sm="12" lg="6">
        <h3 style={{ textAlign: 'center', background: 'yellowgreen', margin: '0px', paddingTop: '10PX', color: '#3E4598' }}>Poster Presentation Guidelines</h3>
        <ol type='1'>
            <li>Research poster should be in flex with size 1m x 1m.</li>
            <li>The poster should be research oriented, genuine and content should be concise.</li>
            <li>The font should be in Times new roman with visible size of letters and diagrams to be read from distance of 2 feet</li>
            <li>The poster should have only author and co-author name.</li>
            <li>Do not mention college/ institute, guide name on the poster for transparent judgment.</li>
            <li>The presentation time will be 03 minutes and 02 minutes for conclusion and question and answer.</li>
            <li>Limited entries for posters will be short listed from total posters received.</li>
            <li>Send your poster and duly filled application form on Email: icipamrutvahini@gmail.com</li>
            <li>Poster should have abstract, aim and objective, material and method, result and discussion, references at the time of submission for short listing purpose.</li>
            <li>Failure to fulfill the above rules will disqualify the poster.</li>
            <li>The short listed participants should bring their final poster at the time of presentation. </li>
        </ol>
        </Col>
    </Row>
    <div style={{border:"0.5px  black solid", margin:"10px",padding:"10px"}}>
    For Any Query Regarding Paper & Poster Presentation <Link to="/contact"> Contact </Link> Dr. Annasaheb B. Jagnar M.: 9970130058
    </div>
    </>
  )
}

export default PrivacyPolicy