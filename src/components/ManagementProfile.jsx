import React from 'react'
import ProfileCard from './common_components/ProfileCard'
import { Row ,Col, Container} from 'react-bootstrap'
import '../App.css'
const ManagementProfile = () => {
    
    const guestData=[
        {
            title:'bhausaheb',
            name:"Hon'ble Late Shri Bhausaheb Santuji Thorat",
            resignantion:"Founder",
            college:"Amrutvahini Sheti and Shikshan Vikas Sanstha,Sangamner",
        },
        {
            title:'balasaheb',
            name:"Hon'ble Shri Balasaheb Thorat",
            resignantion:"Ex. Minster of revene, Govt. Maharashtra , President",
            college:"Amrutvahini Sheti and Shikshan Vikas Sanstha,Sangamner",
        },
        {
            title:'sudhirji',
            name:"Hon'ble Dr.Sudhirji Tambe",
            resignantion:"Ex.MLA, Graduate Constituency, Govt. Maharashtra, Trustee",
            college:"Amrutvahini Sheti and Shikshan Vikas Sanstha,Sangamner",
        },
        {
            title:'sharayu',
            name:"Hon'ble Mrs.Sharayu Deshmukh",
            resignantion:"Managing Trustee",
            college:"Amrutvahini Sheti and Shikshan Vikas Sanstha,Sangamner",
        },
        {
            title:'anil',
            name:"Hon'ble Shri. Anil B. Shinde",
            resignantion:"Chief Executive Officer",
            college:"Amrutvahini Sheti and Shikshan Vikas Sanstha,Sangamner",
        },
        {
            title:'gurav',
            name:"Dr. Jotiba B. Gurav",
            resignantion:"Director Academics",
            college:"Amrutvahini Sheti & Shikshan Vikas Sanstha, Sangamner",
        },{
            title:'manoj',
            name:"Hon'ble Dr. Manoj P. Shirbhate",
            resignantion:"Principal",
            college:"Amrutvahini Institute of Pharmacy, Sangamner",
        },
    ]
  return (
    <>
    <h3 style={{textAlign:'center',background:'#3E4598', margin:'0px',paddingTop:'10PX',color:'yellowgreen'}}>OUR MANAGEMENT</h3>

    <Container  fluid style={{ background:'#3E4598',display:'flex', alignContent:'center'}}>
        
        <Row md={4} className='m-4 justify-content-center w-100'>
            {guestData.map((data, index) => (
                <ProfileCard props={data} />
             
            ))}
          </Row>
        </Container>
    </>
    
    
  )
}

export default ManagementProfile