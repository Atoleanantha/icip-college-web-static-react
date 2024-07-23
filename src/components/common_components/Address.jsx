import React, { useEffect } from "react";
import { FaAddressBook, FaBeer, FaMailchimp, FaRegSun, FaVoicemail } from "react-icons/fa";
import  {IconContext}  from "react-icons";
import { PiEnvelopeDuotone } from "react-icons/pi";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { PiPhoneCallFill } from "react-icons/pi";
import '../../App.css'

const Address = ({margin, fontSize,txtcolor}) => {
    const pstyle={
        color:txtcolor,
        fontWeight:"bold",
        fontSize:"14px"
    }
    const cstyle={
        color:"rgb(67,67,67)",
        fontSize:"12px",
        textOverflow:"revert-layer"
    }
 
    const uMargin={
        margin:margin,
        borderTop: "1.5px dashed #bbb",
    }
    const fStyle={
        fontSize:fontSize,
    }
    const iconStyle={
      color:txtcolor,
      size:"1em"
    }
  return (
    <IconContext.Provider value={iconStyle}>
      <div style={ {border:"0.2px rgb(67,67,67) solid " ,borderRadius:"5px", padding:"10px"}}>
        <h6 style={fStyle}>Amrutvahini Institute of Pharmacy</h6>
        <div>
        <hr class="dashed" style={uMargin}/>
        <PiEnvelopeDuotone /><span>  </span>
        <label style={pstyle}> Principal : <b style={cstyle}> Dr.Shirbhate M.P. ,<i>( M.Pharm, Ph.D.)</i></b></label>
        <hr class="dashed" style={uMargin}/>
        
        
        <label style={pstyle}> <PiPaperPlaneTiltFill /> Address : <i style={cstyle}> Amrutvahini Institute Of Pharmacy
        <br/>P.O. Sangamner S.K.,Tal. Sangamner
        <br/>Dist. Ahmednagar-422608
        <br/>Maharashtra, India</i></label>
        <hr class="dashed" style={uMargin}/>
        <PiPhoneCallFill /><span>  </span>
        <label style={pstyle}> Phone : <label style={cstyle}> 02425-259002</label></label>
        <hr class="dashed" style={uMargin}/>
        <PiPhoneCallFill /><span>  </span>
        <label style={pstyle}> Mobile : <label style={cstyle}> 9607161515 / 9607241515</label></label>
        <hr class="dashed" style={uMargin}/>
        <PiEnvelopeDuotone /><span>  </span>
        <label style={pstyle}> Email :<label style={cstyle}> principalamrutvahiniiop@gmail.com</label></label>

        </div>
      
      
      
      </div>
    </IconContext.Provider>
  );
};

export default Address;