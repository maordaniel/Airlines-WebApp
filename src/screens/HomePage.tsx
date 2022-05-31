import React,{ useState, useCallback } from "react";
import '../styles/HomePageStyle.css';
import {AirlineItemType} from "../types/globalTypes";
import AirlineItem from "../components/AirlineItem";
import SearchBox from "../components/SearchBox";

function HomePage() {

  const [loadingData, setLoadingData] = useState(false);

  const [airlineCompanies, setAirlineCompanies] = useState<AirlineItemType[]>();



  return (
    <div className="homepage-container" >
      <div className="main-content">
        <SearchBox setLoadingData={setLoadingData} setAirlineCompanies={setAirlineCompanies}/>

        <div className="airline-item-container">
          {loadingData? <div className="loader"></div> : null}
          {airlineCompanies?.map(item => <AirlineItem key={item.code} {...item}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
