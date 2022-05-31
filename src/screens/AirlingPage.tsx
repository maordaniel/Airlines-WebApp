import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {AirlineDataType} from "../types/globalTypes";
import '../styles/AirlinePageStyle.css';
import AirlineReviewsCard from "../components/AirlineReviewsCard";
import AirlineReviewsContactDetails from "../components/AirlineReviewsContactDetails";


function AirlinePage(){
  const {airlineCode} = useParams();
  const [companyData, setCompanyData] = useState<AirlineDataType>()

  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() =>{
    axios.get(`https://frontend-assignment-api.azurewebsites.net/api/airline?airline-code=${airlineCode}`)
      .then(res => {
        setLoadingData(false);
        setCompanyData(res.data);
      })
      .catch(error => setError(true))

  },[airlineCode])

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) =>{
    e.currentTarget.style.display = 'none';
  }

  if (loadingData)
    return <div className="loader"></div>

  if(error)
    return <h1>Sorry, there was a problem.. please try again later </h1>

  return(
   <div className="airline-page-container">
     <div className="airline-page-title">
       <div className="airline-Item-logo-wrapper">
         <img className="airline-Item-logo" alt={companyData?.name} src={companyData?.logo} onError={handleImgError}/>
       </div>
       <div>
         <span>{companyData?.name} - {companyData?.code}</span>
       </div>
     </div>

        {companyData &&
            <div className="airline-reviews">
              <AirlineReviewsContactDetails {...companyData}/>
              <AirlineReviewsCard {...companyData}/>
            </div>
             }
   </div>
  )
}

export default AirlinePage;