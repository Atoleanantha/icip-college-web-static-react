import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import anil from '../../images/management_img/Hon._Anil_Shinde.png'
import manoj from '../../images/management_img/Pricipal.png'
import sharayu from '../../images/management_img/Hon._Sharayu_Deshmukh.png'
import sudhirji from '../../images/management_img/Hon.Dr._Sudhir_Tambe.png'
import balasaheb from '../../images/management_img/Hon._Balasaheb_Thorat.png'
import bhausaheb from '../../images/management_img/Late._Shri._Bhausaheb_Santuji_Thorat.png'
import gurav from '../../images/management_img/jb_gurav.png'
function ProfileCard({props}) {
    console.log(props)
    const images={
        'bhausaheb':bhausaheb,
        'balasaheb':balasaheb,
        'sudhirji':sudhirji,
        'sharayu':sharayu,
        'anil':anil,
        'gurav':gurav,
        'manoj':manoj
    }
  return (
    <Card className='m-3 border-0' style={{backgroundColor:'#3E4598', color:'white'}}>
      <Card.Img variant="top" src={images[props.title]} />
      <Card.Body className="p-0 d-flex flex-column justify-content-center">
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
         {props.resignantion}
         <br/>
         {props.college}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;