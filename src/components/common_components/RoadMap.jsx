import React from 'react'
import road_map from '../../images/road_map.png'
const RoadMap = () => {
  return (
    <div style={ {border:"0.2px rgb(67,67,67) solid " ,borderRadius:"5px", padding:"10px"}}>
        <p>The Institute is located on Pune-Nashik National Highway, MH-50.</p>
        <div style={ { padding:"10px", textAlign:"center"}}>
            <img  width="90%" height ="80%"  src={road_map}/>
        </div>
      
      
      
      </div>
  )
}

export default RoadMap