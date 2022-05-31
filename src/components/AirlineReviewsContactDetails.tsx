import React from "react";
import {AirlineDataType} from "../types/globalTypes";
import {getAverage} from "../utils/globalFuncs";
import Stars from "./Stars";

function AirlineReviewsContactDetails(companyData: AirlineDataType){
  return(
    <div className="airline-reviews-contact-details">
      <div >
        <span>Customer Support Email</span>
        <span>{companyData?.customerServiceEmail}</span>
      </div>
      <div>
        <span>Customer Support Phone</span>
        <span>{companyData?.customerServicePhone}</span>
      </div>
      <div>
        <span>Website</span>
        <span>{companyData?.customerServiceWebsite}</span>
      </div>
      <div>
        <span>Overall Score</span>
        <Stars score={(getAverage("overallScore", companyData.reviews))}/>
      </div>

      <div>
        <span>Cleanliness</span>
        <Stars score={(getAverage("cleanliness", companyData.reviews))}/>
      </div>
      <div>
        <span>Food Quality</span>
        <Stars score={(getAverage("foodQuality", companyData.reviews))}/>

      </div>
      <div>
        <span>Leg Room</span>
        <Stars score={(getAverage("legRoom", companyData.reviews))}/>

      </div>
      <div>
        <span>Staff</span>
        <Stars score={(getAverage("staff", companyData.reviews))}/>

      </div>
      <div>
        <span>Would Recommend</span>
        <Stars score={(getAverage("wouldRecommend", companyData.reviews))}/>

      </div>
    </div>
  )
}

export default AirlineReviewsContactDetails;