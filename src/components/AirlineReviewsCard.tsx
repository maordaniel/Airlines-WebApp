import React from "react";
import {AirlineDataType} from "../types/globalTypes";
import Stars from "./Stars";


function AirlineReviewsCard(companyData: AirlineDataType ){
  return(
    <div className="airline-reviews-card-container">
      {companyData?.reviews.map((item, index) =>
        <div key={index} className="airline-reviews-card-wrapper">
          <div className="avatar">
            <div className="circle"></div>
          </div>
          <div className="airline-reviews-card-review">
            <span className="airline-reviews-card-review-title">{item.customerName}</span>
            <span>{item.review}</span>

          </div>
          <div className="airline-reviews-card-review-stars" >
            <div>
              Overall Score:
              <Stars score={(item.overallScore)} />
            </div>


            <div>
              Cleanliness:
              <Stars score={(item.overallScore)} />
            </div>

            <div>
              Food Quality:
              <Stars score={(item.overallScore)} />
            </div>

            <div>
              Leg Room:
              <Stars score={(item.overallScore)} />
            </div>

            <div>
              Staff:
              <Stars score={(item.overallScore)} />
            </div>

            <div>
              Would Recommend:
              <Stars score={(item.overallScore)} />
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default AirlineReviewsCard;