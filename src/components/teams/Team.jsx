import React,{useLayoutEffect} from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import principal from '../../images/committee_img/principal.jpg'
import mahesh from "../../images/committee_img/mahesh.jpg"
import kedar from "../../images/committee_img/kedar.jpg"
import sujata from "../../images/committee_img/sujata.jpg"
import dipika from "../../images/committee_img/dipika.jpg"
import annasaheb from "../../images/committee_img/annasaheb.jpg"
import pravin from "../../images/committee_img/pravin.jpg"
import maheshk from "../../images/committee_img/khatal.jpg"
import somnath from "../../images/committee_img/somnath.jpg"
import pallavi from "../../images/committee_img/pallavi.jpg"
import revati from "../../images/committee_img/revati.jpg"
import mayuri from "../../images/committee_img/mayuri.jpg"
import rani from "../../images/committee_img/rani.jpg"
import diksha from "../../images/committee_img/diksha.jpg"
import manisha from "../../images/committee_img/manisha.jpg"
import nurain from "../../images/committee_img/nurain.jpg"
import karbhari from "../../images/committee_img/karbhari.png"
import vinod from "../../images/committee_img/vinod.png"
import pramod from "../../images/committee_img/pramod.png"
import manojj from "../../images/committee_img/manoj.png"
import vishal from "../../images/committee_img/vishal.png"
import dhumal from "../../images/committee_img/dhumal.jpg"
import gurav from "../../images/committee_img/gurav.jpg"



import anil from '../../images/management_img/Hon._Anil_Shinde.png'
import manoj from '../../images/management_img/Pricipal.png'
import sharayu from '../../images/management_img/Hon._Sharayu_Deshmukh.png'
import sudhirji from '../../images/management_img/Hon.Dr._Sudhir_Tambe.png'
import balasaheb from '../../images/management_img/Hon._Balasaheb_Thorat.png'
import bhausaheb from '../../images/management_img/Late._Shri._Bhausaheb_Santuji_Thorat.png'
const Team = () => {
  const organizer = [
    {
      img: principal,
      name: "Dr. Manoj P. Shirbhate",
      resignantion: "Programme Chair",
    },
    {
      img: mahesh,
      name: "Mr. Mahesh P. Junghare",
      resignantion: "Coordinator",
    },
    {
      img: kedar,
      name: "Dr. Manish S. Kedar",
      resignantion: "Coordinator",
    },
    {
      img: sujata,
      name: "Miss. Sujata R. Khatal",
      resignantion: "Member",
    },
    {
      img: dipika,
      name: "Miss. Dipika U. Gite",
      resignantion: "Member",
    },
    {
      img: annasaheb,
      name: "Dr. Annasaheb B. Jagnar",
      resignantion: "Member",
    },
    {
      img: pravin,
      name: "Mr. Pravin A. Shelke",
      resignantion: "Member",
    },
    {
      img: maheshk,
      name: "Mr. Mahesh B. Khatal",
      resignantion: "Member",
    },
    {
      img: somnath,
      name: "Mr. Somnath K. Thorat",
      resignantion: "Member",
    },
    {
      img: pallavi,
      name: "Miss. Pallavi A. Pansare",
      resignantion: "Member",
    },
    {
      img: revati,
      name: "Miss. Revati P. Diddi",
      resignantion: "Member",
    },
    {
      img: mayuri,
      name: "Miss. Mayuri S. Godse",
      resignantion: "Member",
    },
    {
      img: rani,
      name: "Miss. Rani P. Gomase",
      resignantion: "Member",
    },
    {
      img: diksha,
      name: "Miss. Diksha M. Randive",
      resignantion: "Member",
    },
    {
      img: manisha,
      name: "Miss. Manisha N. Sharmale",
      resignantion: "Member",
    },
    {
      img: nurain,
      name: "Miss. Nurain N. Mirza",
      resignantion: "Member",
    },

  ]

  const guestData=[
    {
      img:bhausaheb,
      name:"Hon'ble Late Shri Bhausaheb Santuji Thorat",
      resignantion:"Founder",
      college:"Amrutvahini Sheti and Shikshan Vikas Sanstha,Sangamner",
  },
    {
      img:balasaheb,
        name:"Hon'ble Shri Balasaheb Thorat",
        resignantion:"Ex. Minster of revene, Govt. Maharashtra , President",
        college:"Amrutvahini Sheti and Shikshan Vikas Sanstha,Sangamner",
    },
    {
      img:sudhirji,
        name:"Hon'ble Dr.Sudhirji Tambe",
        resignantion:"Ex.MLA, Graduate Constituency, Govt. Maharashtra, Trustee",
        college:"Amrutvahini Sheti and Shikshan Vikas Sanstha,Sangamner",
    },
    {
      img:sharayu,
        name:"Hon'ble Mrs.Sharayu Deshmukh",
        resignantion:"Managing Trustee",
        college:"Amrutvahini Sheti and Shikshan Vikas Sanstha,Sangamner",
    },
    {
      img:anil,
        name:"Hon'ble Shri. Anil B. Shinde",
        resignantion:"Chief Executive Officer",
        college:"Amrutvahini Sheti and Shikshan Vikas Sanstha,Sangamner",
    },{
      img:karbhari,
        name:"Hon'ble Karbhari V. Kale",
        resignantion:"Voice-Chancellor DBATU, ",
        college:"Lonere, Dist. Raigad, Maharastra, India",
    },
    {
      img:vinod,
        name:"Dr. Vinod M. Mohitkar",
        resignantion:"Director of Technical Education",
        college:"Mumbai, India",
    },

    {
      img:pramod,
        name:"Shri. Pramod A. Naik",
        resignantion:"Director, Maharashtra State Board of Technical Edication",
        college:"Mumbai, India",
    },
    {
      img:manojj,
        name:"Dr. Manoj Jadhav",
        resignantion:"Founder & CEO ISHA Therapeutics LLC,",
        college:"New Jersey, USA",
    },
    {
      img:vishal,
        name:"Dr. Vishal V. Pande",
        resignantion:"Dean, Pharmacy DBATU, Lonere",
        college:"Dist. Raigad, Maharastra, India",
    },
    
    {
      img:dhumal,
        name:"Shri. Vivek B. Dhumal",
        resignantion:"Manager",
        college:"Amrutvahini Sheti & Shikshan Vikas Sanstha, Sangamner",
    },
    {
      img:gurav,
        name:"Dr. Jotiba B. Gurav",
        resignantion:"Director, Academics",
        college:"Amrutvahini Sheti & Shikshan Vikas Sanstha, Sangamner",
    },
    {
      img: principal,
      name: "Dr. Manoj P. Shirbhate",
      resignantion: "Pricipal",
      college:"Amrutvahini Institute of Pharmacy, Sangamner"
    },
]
useLayoutEffect(() => {
  window.scrollTo(0, 0)
},[]);
  return (
    <>
      <h3 style={{ textAlign: 'center', background: 'yellowgreen', margin: '0px', paddingTop: '10PX', color: '#3E4598' }}>Our Patrons</h3>
      <Container fluid style={{ display: 'flex', alignContent: 'center' }}>

        <Row md={6} sm="6" className='m-4 justify-content-center '>
          {guestData.map((data, index) => (
            <Card className='m-3 border-0' style={{ backgroundColor: '#3E4598', color: 'white' }}>
              <Card.Img variant="top" src={data.img} />
              <Card.Body className="p-0 d-flex flex-column justify-content-center">
                <Card.Title>{data.name}</Card.Title>
                <Card.Text style={{color:"yellowgreen"}}>
                  {data.resignantion}
                  <br/>
                  {data.college}
                </Card.Text>

              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>

      <h3 style={{ textAlign: 'center', background: 'yellowgreen', margin: '0px', paddingTop: '10PX', color: '#3E4598' }}>Organizer Committe</h3>

      <Container fluid style={{ display: 'flex', alignContent: 'center' }}>

        <Row md={6} sm={2} className='m-4 justify-content-center '>
          {organizer.map((data, index) => (
            <Card className='m-3 border-0' style={{ backgroundColor: '#3E4598', color: 'white' }}>
              <Card.Img variant="top" src={data.img} />
              <Card.Body className="p-0 d-flex flex-column justify-content-center">
                <Card.Title>{data.name}</Card.Title>
                <Card.Text style={{color:"yellowgreen"}}>
                  {data.resignantion}
                  
                </Card.Text>

              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Team