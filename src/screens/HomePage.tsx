import React,{ useState, useCallback } from "react";
import axios from "axios";
import debounce from 'lodash.debounce';
import '../styles/HomePageStyle.css';
import {AirlineItemType} from "../types/globalTypes";
import AirlineItem from "../components/AirlineItem";


function HomePage() {

  const [textInput, setTextInput] = useState("");
  const [loadingData, setLoadingData] = useState(false);

  const [airlineCompanies, setAirlineCompanies] = useState<AirlineItemType[]>();

  const changeHandler = (e: { target: HTMLInputElement }) => {
    const value = e.target.value;
    setTextInput(value);
    setAirlineCompanies([])
    if (value !== ""){
      return debouncedChangeHandler(value);
    }
  };

  const apiCall = (text: string) => {
      setLoadingData(true);
      axios.get(`https://frontend-assignment-api.azurewebsites.net/api/search?query=${text}`)
        .then(data => {
          setLoadingData(false);
          setAirlineCompanies(data.data);
        })
        .catch(error => console.log(error))
  }

  const debouncedChangeHandler = useCallback(debounce(apiCall, 1000), []);

  return (
    <div className="homepage-container" >
      <div className="main-content">
        <div className="header-container" >
          <div className="header-wrapper">
            <img className="company-logo" src="https://blackrabbit-frontend-assignment.azurewebsites.net/blackrabbit-black-logo.cc2311f3.svg"
                 alt="company-logo" />
            <span className="black-rabbit-header">BLACK RABBIT</span>
            <span className="black-rabbit-header2">KNOW YOUR AIRLINE!</span>

            <div className="search-airline-input-wrapper">
              <input className="search-airline-input" placeholder="Search for airline" onChange={changeHandler} value={textInput}/>
            </div>
          </div>

        </div>
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
