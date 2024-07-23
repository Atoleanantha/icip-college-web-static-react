import React, { useState ,useLayoutEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CustomCarousel from './common_components/CustomCarousel';
import ManagementProfile from './ManagementProfile';
import HeroSection from './HeroSection';
import staffdesign from '../images/staffdesign.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OpenPdf from './common_components/OpenPdf';
import study from '../images/icons/icon-cpe-credits.svg'
import insight from '../images/icons/icon-insight.svg'
import announcements from '../images/icons/icon-announcements.svg'
import genius from '../images/icons/icon-genius-bar.svg'
const Home = () => {
    const [hovered, setHovered] = useState(false);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    const buttonStyle = {
        backgroundColor: hovered ? 'lightgreen' : 'yellowgreen',
        transition: 'background-color 0.3s ease',
    };
    const iconStyle = {
        height: "35px",
        padding: "5px"
    }

    const handleHover = () => {
        setHovered(true);
    };

    const handleMouseOut = () => {
        setHovered(false);
    };

    return (
        <Container  fluid style={{ paddingTop: "20px", paddingBottom: '0px', paddingLeft: "0px", paddingRight: '0px' }}>

            <CustomCarousel />
            <HeroSection />
            <Container className='hero' style={{ position: 'relative', paddingTop: "40px", paddingBottom: '40px', paddingLeft: "50px", paddingRight: '0px', marginLeft: "5px" }}>
                <h1 style={{ color: '#3E4598' }} >INVITATION FOR CONFERENCE</h1>
                <p>
                    Dear Professionals,<br /> Greeting from Amrutvahini institute of pharmacy......!<br /> We invite you to attend International Conference on Innovative Pharmacy on theme "Pharmaceutical Research: Accelerating Discoveries with Artificial Intelligence" scheduled to be held on 13th & 14th March 2024 at Amrutvahini Institute of Pharmacy Sangamner, 422608, Dist. Ahemednagar, Maharashtra, India.
                </p>
                {/* <img
                    className="img-fluid"
                    style={{
                        maxHeight: '400px',
                        width: 'auto',
                        position: 'absolute',
                        top: '60%',
                        right: '-110px',
                        transform: 'translateY(-50%)',
                        zIndex: 1, // ensure the image is above other content
                    }}
                    src={staffdesign}
                    alt="img"
                /> */}

                <br />
                <h3 style={{ color: '#3E4598' }}>What to Expect at Take Control</h3>

                <Row>

                    <Col className='invite-head' md="6" sm="12" lg="6" style={{ alignItems: "center" }}>
                        <p style={{ color: "#3E4598" }}>
                            <h5 style={{ color: 'yellowgreen' }}>
                                <label><img src={insight} alt="" style={iconStyle} />  </label>
                                Deep Dive Into Pharmaceuticals Industry Trends with Artificial Intelligence</h5>
                            Virtue Insight is delighted to announce its 1<sup>st</sup> 'International Conference on Inovative Pharmacy' on theame Pharmaceutical Research: Accelerating Discoveries with Artificial Intelligence” Join our new break-out sessions to deep dive into  Pharma Innovation with Artificial Intelligence and Demystifying Real World Evidence- Technological Advancements.
                            <br />
                            <br />

                            <h5 style={{ color: 'yellowgreen' }}>
                                <label><img src={announcements} alt="" style={iconStyle} />  </label>
                                Learn About Drug Design, Research, Formulations and Development</h5>
                            Hear from ICIP  and medication adherence experts on how to transform medication counseling, immunization with advance medication therapy management (MTM) solutions available today and what’s next for the future.
                            <br />
                            <br />

                            <h5 style={{ color: 'yellowgreen' }}>
                                <label><img src={genius} alt="" style={iconStyle} />  </label>
                                Connect With Pharmaceuticals Industry Experts At The ICIP</h5>
                            Connect with ICIP experts at 1st International Conference on Innovative Pharmacy Amrutvahini 2024 where you can get your specific questions answered.
                            <br />
                            <br />

                            <h5 style={{ color: 'yellowgreen' }}>
                                <label><img src={study} alt="" style={iconStyle} />  </label>
                                Pharmaceutical Research Accelerating Discoveries with Artificial Intelligence</h5>
                            The 1<sup>st</sup> "International Conference on Innovative Pharmacy Amrutvahini 2024.
                            Pharmaceutical Research Accelerating Discoveries with Artificial Intelligence. conference is an event that seeks to drive innovation, foster collaboration, and explore the
                            limitless possibilities that lie at the intersection of technology and transdisciplinary
                            education. In an era defined by rapid technological advancements and complex global
                            challenges, this conference seeks to revolutionize the way we prepare individuals for the
                            future.

                        </p>
                        <Link to="/about" >
                            <Button
                                onMouseOver={handleHover}
                                onMouseOut={handleMouseOut}
                                style={{ backgroundColor: 'yellowgreen', }}>
                                Know More!
                            </Button>
                        </Link>
                    </Col>
                    <Col md="6" sm="12" lg="6" style={{ textAlign: "center" }}>
                        <img height="90%" width="100%" src={staffdesign} alt='img' />
                    </Col>
                </Row>


            </Container>
            <ManagementProfile />
        </Container>
    )
}

export default Home;
