import React from "react";
import {AirlineItemType} from "../types/globalTypes";
import {
  Link
} from "react-router-dom";

function AirlineItem({name, code, logo}: AirlineItemType){

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) =>{
    e.currentTarget.style.display = 'none';
  }
  return(
    <Link className="airline-Item" to={`airline/${code}`}>
      <div className="airline-Item-logo-wrapper">
        <img className="airline-Item-logo" alt={name} src={logo} onError={handleImgError}/>
      </div>
      <div>
        <span className="airline-Item-text">{code}-{name}</span>
      </div>
    </Link>
  )
}

export default AirlineItem;